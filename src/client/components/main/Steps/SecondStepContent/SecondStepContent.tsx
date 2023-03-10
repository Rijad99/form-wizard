import { forwardRef, useEffect, useState } from 'react';

import styles from '../SecondStepContent/_SecondStepContent.module.scss';

import { plansData } from '../../../../data/plansData';

export interface PlanCardProps {
    id?: string,
    iconPath: string,
    name: string,
    priceMonthly: string,
    priceYearly: string,
    priceMonthlyYearly?: string,
    additionalClasses?: string,
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const PlanCard = forwardRef<HTMLDivElement, PlanCardProps>((props, ref) => {
    return (
        <div ref={ref} className={`${styles.planCard} ${props?.additionalClasses ? props.additionalClasses : ''}`} onClick={props.onClick}>
            <div>
                <img src={props.iconPath} />
            </div>
            <div className={`${styles.planCardPricing} ${props.priceMonthlyYearly === 'yearly' ? styles.planCardPricingYearly : ""}`}>
                <span className={styles.planName}>{props.name}</span>
                <span className={styles.planPrice}>{`${props.priceMonthlyYearly === 'monthly' ? props.priceMonthly : props.priceYearly}`}</span>
                {
                    props.priceMonthlyYearly === 'yearly' && <span className={styles.freePeriod}>2 months free</span>
                }
            </div>
        </div>
    )
})

interface ToggleProps {
    plan: string,
    additionalClasses?: string,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Toggle = (props: ToggleProps) => {
    return (
        <div className={`${styles.toggleContainer} ${props?.additionalClasses ? props.additionalClasses : ''}`}>
            <span className={`${styles.pricingPlan} ${props.plan === 'monthly' ? styles.activePlan : ''}`}>Monthly</span>
            <div className={styles.toggle}>
                <div className={styles.circle} onClick={props.onClick}></div>
            </div>
            <span className={`${styles.pricingPlan} ${props.plan === 'yearly' ? styles.activePlan : ''}`}>Yearly</span>
        </div>
    )
}

export const SecondStepContent = () => {
    const planCardRefs: Array<HTMLDivElement> = [];

    const [toggle, setToggle] = useState<string>('monthly');
    const [selectedPlan, setSelectedPlan] = useState<string>('0');

    useEffect(() => {
        const plan = localStorage.getItem('selectedPlan') || '0';

        if (selectedPlan !== plan) {
            setSelectedPlan(plan);
        }
    }, []);

    const handlePlanCardChange = (e: React.MouseEvent<HTMLDivElement>, planId: string) => {
        if (planId !== selectedPlan && selectedPlan === '0') {

            setSelectedPlan(planId);
            e.currentTarget.classList.toggle(styles.shown);

            localStorage.setItem('selectedPlan', JSON.stringify(+planId));
        } else {
            planCardRefs[+selectedPlan - 1].classList.remove(styles.shown);

            setSelectedPlan(planId);
            e.currentTarget.classList.toggle(styles.shown);

            localStorage.setItem('selectedPlan', JSON.stringify(+planId));
        }
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
                            <PlanCard key={plan.id} ref={el => el && planCardRefs.push(el)} additionalClasses={`${selectedPlan === plan.id && styles.shown}`} iconPath={plan.iconPath} name={plan.name} priceMonthlyYearly={toggle} priceMonthly={plan.priceMonthly} priceYearly={plan.priceYearly} onClick={(e) => handlePlanCardChange(e, plan.id!)} />
                        )
                    })
                }
            </div>
            <Toggle plan={toggle} onClick={(e) => handleToggleChange(e)} />
        </div>
    )
};
