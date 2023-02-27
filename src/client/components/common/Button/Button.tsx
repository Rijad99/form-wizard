import styles from "../Button/_Button.module.scss";

interface ButtonProps {
    text: string,
    additionalClasses?: string
}

export const Button = (props: ButtonProps) => {
    return (
        <button className={`${styles.btn} ${props?.additionalClasses ? props.additionalClasses : ''}`}>{props.text}</button>
    )
}
