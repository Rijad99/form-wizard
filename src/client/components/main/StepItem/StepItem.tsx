import styles from '../StepItem/_StepItem.module.scss';

export interface StepItemProps {
    stepNumber: number, 
    stepTitle: string,
    onClick?: () => void
}

export const StepItem = (props: StepItemProps) => {
    return (
        <li className={styles.step} onClick={props.onClick}>
            <div className={styles.stepCircle}>{props.stepNumber}</div>
            <div className={styles.stepInfo}>
                <span className={styles.stepNumber}>Step {props.stepNumber}</span>
                <span className={styles.stepTitle}>{props.stepTitle}</span>
            </div>
        </li>
    )
}
