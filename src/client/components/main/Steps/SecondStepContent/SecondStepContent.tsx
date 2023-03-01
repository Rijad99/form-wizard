import { useState } from 'react';

import styles from '../SecondStepContent/_SecondStepContent.module.scss';

import iconArcade from "../../../../../images/icons/icon-arcade.svg";
import iconAdvanced from "../../../../../images/icons/icon-advanced.svg";
import iconPro from "../../../../../images/icons/icon-pro.svg";

interface PlanCardProps {
    iconPath: string,
    name: string,
    price: string,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const PlanCard = (props: PlanCardProps) => {
    return (
        <div className={styles.planCard} onClick={props.onClick}>
            <div>
                <img src={props.iconPath} />
            </div>
            <div className={styles.planCardPricing}>
                <span className={styles.planName}>{props.name}</span>
                <span className={styles.planPrice}>{props.price}</span>
            </div>
        </div>
    )
}

interface ToggleProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Toggle = (props: ToggleProps) => {
    return (
        <div className={styles.toggleContainer}>
            <span className={styles.pricingPlan}>Monthly</span>
            <div className={styles.toggle}>
                <div className={styles.circle} onClick={props.onClick}></div>
            </div>
            <span className={styles.pricingPlan}>Yearly</span>
        </div>
    )
}

export const SecondStepContent = () => {
    const [toggle, setToggle] = useState<string>('monthly');

    const handlePlanCardChange = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.classList.toggle(styles.shown);
    }

    const handleToggleChange = (e: React.MouseEvent<HTMLDivElement>) => {
        setToggle('yearly');

        e.currentTarget.classList.toggle(styles.toRight);
    }

    return (
        <div className={styles.stepContent1}>
            <div className={styles.planCardsGrid}>
                <PlanCard iconPath={iconArcade} name='Arcade' price='$9/mo' onClick={(e) => handlePlanCardChange(e)} />
                <PlanCard iconPath={iconAdvanced} name='Advanced' price='$12/mo' onClick={(e) => handlePlanCardChange(e)} />
                <PlanCard iconPath={iconPro} name='Pro' price='$15/mo' onClick={(e) => handlePlanCardChange(e)} />
            </div>
            <Toggle onClick={(e) => handleToggleChange(e)} />
        </div>
    )
};
