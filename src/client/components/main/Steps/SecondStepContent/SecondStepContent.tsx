import { useState } from 'react';

import styles from '../SecondStepContent/_SecondStepContent.module.scss';

import { plansData } from '../../../../data/plansData';

export interface PlanCardProps {
    id?: string,
    iconPath: string,
    name: string,
    priceMonthly: string,
    priceYearly: string,
    priceMonthlyYearly?: string
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const PlanCard = (props: PlanCardProps) => {
    return (
        <div className={styles.planCard} onClick={props.onClick}>
            <div>
                <img src={props.iconPath} />
            </div>
            <div className={styles.planCardPricing}>
                <span className={styles.planName}>{props.name}</span>
                <span className={styles.planPrice}>{`${props.priceMonthlyYearly === 'monthly' ? props.priceMonthly : props.priceYearly}`}</span>
            </div>
        </div>
    )
}

interface ToggleProps {
    plan: string,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Toggle = (props: ToggleProps) => {
    return (
        <div className={styles.toggleContainer}>
            <span className={`${styles.pricingPlan} ${props.plan === 'monthly' ? styles.activePlan : ''}`}>Monthly</span>
            <div className={styles.toggle}>
                <div className={styles.circle} onClick={props.onClick}></div>
            </div>
            <span className={`${styles.pricingPlan} ${props.plan === 'yearly' ? styles.activePlan : ''}`}>Yearly</span>
        </div>
    )
}

export const SecondStepContent = () => {
    const [toggle, setToggle] = useState<string>('monthly');

    const handlePlanCardChange = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.classList.toggle(styles.shown);
    }

    const handleToggleChange = (e: React.MouseEvent<HTMLDivElement>) => {
        toggle === 'monthly' ? setToggle('yearly') : setToggle('monthly');

        e.currentTarget.classList.toggle(styles.toRight);
    }

    return (
        <div className={styles.stepContent1}>
            <div className={styles.planCardsGrid}>
                {
                    plansData.map(plan => {
                        return (
                            <PlanCard key={plan.id} iconPath={plan.iconPath} name={plan.name} priceMonthlyYearly={toggle} priceMonthly={plan.priceMonthly} priceYearly={plan.priceYearly} onClick={(e) => handlePlanCardChange(e)} />
                        )
                    })
                }
            </div>
            <Toggle plan={toggle} onClick={(e) => handleToggleChange(e)} />
        </div>
    )
};
