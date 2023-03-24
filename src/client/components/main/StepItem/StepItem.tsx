import { Link } from "react-router-dom";

import styles from '../StepItem/_StepItem.module.scss';

export interface StepItemProps {
    stepNumber: number, 
    stepTitle: string,
    active?: boolean,
    path: string,
    onClick?: () => void
}

export const StepItem = (props: StepItemProps) => {
    return (
        <Link to={props.path} className={styles.link}>
            <li className={`${styles.step} ${props.active ? styles.activeStep : ""}`} onClick={props.onClick}>
                <div className={styles.stepCircle}>{props.stepNumber}</div>
                <div className={styles.stepInfo}>
                    <span className={styles.stepNumber}>Step {props.stepNumber}</span>
                    <span className={styles.stepTitle}>{props.stepTitle}</span>
                </div>
            </li>
        </Link>
    )
}
