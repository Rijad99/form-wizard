import { PropsWithChildren } from 'react';

import styles from '../Steps/_Steps.module.scss';

export const Step = (props: PropsWithChildren) => {
    return (
        <div className={styles.formContentGrid}>
            <div className={styles.formHeader}>
                <h1 className={styles.headerTitle}>Personal info</h1>
                <p className={styles.headerSubtitle}>Please provide your name, email address and phone number.</p>
            </div>
            <div className={styles.formContent}>
                {props.children}
            </div>
            <div className={styles.formFooter}>

            </div>
        </div>
    )
};

export const FirstStepContent = () => {
    return (
        <h1>Step One Content</h1>
    )
};

export const SecondStepContent = () => {
    return (
        <h1>Step Two Content</h1>
    )
};

export const ThirdStepContent = () => {
    return (
        <h1>Step Three Content</h1>
    )
};

export const FourthStepContent = () => {
    return (
        <h1>Step Four Content</h1>
    )
};
