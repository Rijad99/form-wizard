import styles from '../SecondStepContent/_SecondStepContent.module.scss';

import iconArcade from "../../../../../images/icons/icon-arcade.svg";
import iconAdvanced from "../../../../../images/icons/icon-advanced.svg";
import iconPro from "../../../../../images/icons/icon-pro.svg";

interface PlanCardProps {
    iconPath: string,
    name: string
}

const PlanCard = (props: PlanCardProps) => {
    return (
        <div className={styles.planCard}>
            <div>
                <img src={props.iconPath} />
            </div>
            <div className={styles.planCardPricing}>
                <span className={styles.planName}>{props.name}</span>
            </div>
        </div>
    )
}

export const SecondStepContent = () => {
    return (
        <div className={styles.stepContent1}>
            <div className={styles.planCardsGrid}>
                <PlanCard iconPath={iconArcade} name='Arcade' />
                <PlanCard iconPath={iconAdvanced} name='Advanced' />
                <PlanCard iconPath={iconPro} name='Pro' />
            </div>
        </div>
    )
};
