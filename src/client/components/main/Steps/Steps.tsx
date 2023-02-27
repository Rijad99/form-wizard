import { PropsWithChildren } from 'react';

import { Button } from '../../common/Button/Button';

import styles from '../Steps/_Steps.module.scss';
import buttonStyles from '../../common/Button/_Button.module.scss';

export interface StepProps {
    stepTitle: string,
    stepSubtitle: string
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
                <Button text="Next" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnNext}`} />
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
