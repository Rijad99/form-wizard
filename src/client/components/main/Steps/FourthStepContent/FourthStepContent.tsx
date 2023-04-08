import { Link, useOutletContext } from 'react-router-dom';

import styles from '../FourthStepContent/_FourthStepContent.module.scss';

export const FourthStepContent = () => {
    const [activeStep, setActiveStep] = useOutletContext<any>()

    const updateCurrentStep = () => {
        setActiveStep(1);
        localStorage.setItem('stepNumber', JSON.stringify(1));
    }

    return (
        <>
            <div className={styles.summaryContainer}>
                <SelectedPlan name='Arcade (Monthly)' linkToStep='Change' price='$9/mo' onClick={() => updateCurrentStep()} />
                <SelectedAddOn name='Online service' price='+1$/mo' />
                <SelectedAddOn name='Larger storage' price='+2$/mo' />
            </div>
            <PriceSummary text='Total (per month)' price='+$12/mo' />
        </> 
    )
};

interface SelectedPlanProps {
    name: string,
    linkToStep: string,
    price: string,
    onClick?: () => void
}

const SelectedPlan = (props: SelectedPlanProps) => {
    return (
        <div className={styles.selectedPlan}>
            <div>
                <h4 className={styles.planName}>{props.name}</h4>
                <Link to="/plan"><span className={styles.link} onClick={props.onClick}>{props.linkToStep}</span></Link>
            </div>
            <span className={styles.planPrice}>{props.price}</span>
        </div>
    )
}

interface SelectedAddOnProps {
    name: string,
    price: string
}

const SelectedAddOn = (props: SelectedAddOnProps) => {
    return (
        <div className={styles.addOn}>
            <span className={styles.addonName}>{props.name}</span>
            <span className={styles.addonPrice}>{props.price}</span>
        </div>
    )
}

interface PriceSummaryProps {
    text: string,
    price: string
}

const PriceSummary = (props: PriceSummaryProps) => {
    return (
        <div className={styles.priceSummary}>
            <span className={styles.summaryText}>{props.text}</span>
            <span className={styles.summaryPrice}>{props.price}</span>
        </div>
    )
}
