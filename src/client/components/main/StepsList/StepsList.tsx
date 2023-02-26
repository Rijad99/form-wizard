import styles from '../StepsList/_StepsList.module.scss';

import sidebarBg from '../../../../images/backgrounds/bg-sidebar-desktop.svg';

const steps: StepItemProps[] = [
    {
        stepNumber: 1,
        stepTitle: "Your info"
    },
    {
        stepNumber: 2,
        stepTitle: "Select plan"
    },
    {
        stepNumber: 3,
        stepTitle: "Add-ons"
    },
    {
        stepNumber: 4,
        stepTitle: "Summary"
    }
];

interface StepsListProps {
    onClick: () => void
}

export const StepsList = (props: StepsListProps) => {
    return (
        <ul className={styles.stepsList}>
            <img src={sidebarBg} className={styles.background} />
            {
                steps.map(step => {
                    return (
                        <StepItem key={step.stepNumber} onClick={props.onClick} stepNumber={step.stepNumber} stepTitle={step.stepTitle} />
                    )
                })
            }
        </ul>
    )
};

interface StepItemProps {
    stepNumber: number, 
    stepTitle: string,
    onClick?: () => void
}

const StepItem = (props: StepItemProps) => {
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
