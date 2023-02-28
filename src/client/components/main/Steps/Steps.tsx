import { PropsWithChildren } from 'react';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/FormControls/FormControls';

import styles from '../Steps/_Steps.module.scss';
import buttonStyles from '../../common/Button/_Button.module.scss';
import utilityClasses from '../../../scss/_utilities.module.scss';

export interface StepProps {
    stepTitle: string,
    stepSubtitle: string,
    stepNumber?: number
}

export const Step = (props: PropsWithChildren<StepProps>) => {

    const renderStepFooterButtons = (step: number) => {
        switch(step) {
            case 0: 
                return <Button text="Next" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnNext} ${props.stepNumber === 0 && utilityClasses.alignToRight}`} />
            case 1:
            case 2:
                return (
                    <>
                        <Button text="Go Back" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnBack}`} />
                        <Button text="Next" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnNext} ${props.stepNumber === 0 && utilityClasses.alignToRight}`} />
                    </>
                )
            case 3:
                return (
                    <>
                        <Button text="Go Back" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnBack}`} />
                        <Button text="Confirm" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnConfirm}`} />
                    </>
                )
        }
    }

    return (
        <div className={styles.formContentGrid}>
            <div className={styles.stepHeader}>
                <h1 className={styles.stepTitle}>{props.stepTitle}</h1>
                <p className={styles.stepSubtitle}>{props.stepSubtitle}</p>
            </div>
            <div className={styles.stepContent}>
                {props.children}
            </div>
            <div className={styles.stepFooter}>
                {renderStepFooterButtons(props.stepNumber!)}
            </div>
        </div>
    )
};

export const FirstStepContent = () => {
    return (
        <div className={styles.stepContent0}>
            <Input type='text' id='step-one-client_name' additionalClasses={`${utilityClasses.mb22}`} label='Name' placeholder='e.g. Stephen King' spellCheck={false} />
            <Input type='text' id='step-one-client_email_address' additionalClasses={`${utilityClasses.mb22}`} label='Email Address' placeholder='e.g. stephenking@lorem.com' spellCheck={false} />
            <Input type='text' id='step-one-client_phone_number' label='Phone Number' placeholder='e.g. +1 234 567 890' spellCheck={false} />
        </div>
    )
};

export const SecondStepContent = () => {
    return (
        <div></div>
    )
};

export const ThirdStepContent = () => {
    return (
        <div></div>
    )
};

export const FourthStepContent = () => {
    return (
        <div></div>
    )
};
