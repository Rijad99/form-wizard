import { PropsWithChildren } from 'react';

import { Button } from '../../common/Button/Button';

import styles from '../Steps/_Step.module.scss';
import buttonStyles from '../../common/Button/_Button.module.scss';
import utilityClasses from '../../../scss/_utilities.module.scss';

export interface StepProps {
    stepTitle: string,
    stepSubtitle: string,
    stepNumber?: number,
    onClickNext?: () => void,
    onClickBack?: () => void,
    onClickConfirm?: () => void
}

export const Step = (props: PropsWithChildren<StepProps>) => {

    const renderStepFooterButtons = (step: number) => {
        switch(step) {
            case 0: 
                return <Button text="Next" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnNext} ${props.stepNumber === 0 && utilityClasses.alignToRight}`} onClick={props.onClickNext} />
            case 1:
            case 2:
                return (
                    <>
                        <Button text="Go Back" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnBack}`} onClick={props.onClickBack} />
                        <Button text="Next" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnNext} ${props.stepNumber === 0 && utilityClasses.alignToRight}`} onClick={props.onClickNext} />
                    </>
                )
            case 3:
                return (
                    <>
                        <Button text="Go Back" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnBack}`} onClick={props.onClickBack} />
                        <Button text="Confirm" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnConfirm}`} onClick={props.onClickConfirm} />
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
