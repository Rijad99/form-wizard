import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';

import styles from '../Steps/_Step.module.scss';
import buttonStyles from '../../common/Button/_Button.module.scss';
import utilityClasses from '../../../scss/_utilities.module.scss';

export interface StepProps {
    stepTitle?: string,
    stepSubtitle?: string,
    stepNumber?: number,
    onClickNext?: () => void,
    onClickBack?: () => void,
    onClickConfirm?: () => void
}

export const Step = (props: PropsWithChildren<StepProps>) => {

    const renderStepFooterButtons = (step: number) => {
        switch(step) {
            case 0: 
                return <Link to="/plan"><Button text="Next" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnNext} ${props.stepNumber === 0 && utilityClasses.alignToRight}`} onClick={props.onClickNext} /></Link>
            case 1:
                return (
                    <>
                        <Link to="/info"><Button text="Go Back" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnBack}`} onClick={props.onClickBack} /></Link>
                        <Link to="/addons"><Button text="Next" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnNext} ${props.stepNumber === 0 && utilityClasses.alignToRight}`} onClick={props.onClickNext} /></Link>
                    </>
                )
            case 2:
                return (
                    <>
                        <Link to="/plan"><Button text="Go Back" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnBack}`} onClick={props.onClickBack} /></Link>
                        <Link to="/summary"><Button text="Next" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnNext} ${props.stepNumber === 0 && utilityClasses.alignToRight}`} onClick={props.onClickNext} /></Link>
                    </>
                )
            case 3:
                return (
                    <>
                        <Link to="/addons"><Button text="Go Back" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnBack}`} onClick={props.onClickBack} /></Link>
                        <Link to="/confirmation"><Button text="Confirm" additionalClasses={`${buttonStyles.btnMedium} ${buttonStyles.btnConfirm}`} onClick={props.onClickConfirm} /></Link>
                    </>
                )
        }
    }

    return (
        <div className={styles.formContentGrid}>
            <div className={styles.stepHeader}>
                {
                    props.stepNumber! < 4 ? (
                        <>
                            <h1 className={styles.stepTitle}>{props.stepTitle}</h1>
                            <p className={styles.stepSubtitle}>{props.stepSubtitle}</p>
                        </>
                    ) : null
                }
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
