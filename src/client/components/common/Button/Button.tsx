import styles from "../Button/_Button.module.scss";

interface ButtonProps {
    text: string,
    additionalClasses?: string,
    onClick?: () => void
}

export const Button = (props: ButtonProps) => {
    return (
        <button className={`${styles.btn} ${props?.additionalClasses ? props.additionalClasses : ''}`} onClick={props?.onClick}>{props.text}</button>
    )
}
