import { PropsWithChildren } from 'react';

import { Button } from '../../common/Button/Button';

import styles from '../Steps/_Steps.module.scss';
import buttonStyles from '../../common/Button/_Button.module.scss';
import utilityClasses from '../../../scss/_utilities.module.scss';

export interface StepProps {
    stepTitle: string,
    stepSubtitle: string,
    stepNumber?: number
}

export const Step = (props: PropsWithChildren<StepProps>) => {
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
                {
                    props.stepNumber !== 0 && <Button text="Go Back" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnBack}`} />
                }
                {
                    props.stepNumber !== 3 && <Button text="Next" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnNext} ${props.stepNumber === 0 && utilityClasses.alignToRight}`} />
                }
                {
                    props.stepNumber === 3 && <Button text="Confirm" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnConfirm}`} />
                }
            </div>
        </div>
    )
};

export const FirstStepContent = () => {
    return (
        <div></div>
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
