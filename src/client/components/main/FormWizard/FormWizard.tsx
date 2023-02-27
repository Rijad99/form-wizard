import { useState, PropsWithChildren } from 'react'

import { Container } from '../../common/Container/Container';
import { Card } from '../../common/Card/Card';
import { StepItem } from '../StepItem/StepItem';
import { Step, FirstStepContent, SecondStepContent, ThirdStepContent, FourthStepContent  } from '../Steps/Steps';

import { stepsData, stepHeaderData } from '../../../data/stepsData';

import styles from "../FormWizard/_FormWizard.module.scss";
import stepItemStyles from '../StepItem/_StepItem.module.scss';
import gridStyle from "../FormGrid/_FormGrid.module.scss";

import sidebarBg from '../../../../images/backgrounds/bg-sidebar-desktop.svg';

const StepsList = (props: PropsWithChildren) => {
    return (
        <ul className={stepItemStyles.stepsList}>
            <img src={sidebarBg} className={stepItemStyles.background} />
            {props?.children}
        </ul>
    )
};

export const FormWizard = () => {
    const [step, setStep] = useState<number>(0);

    const handleStepChange = (stepNumber: number) => {
        setStep(stepNumber);
    }

    const currentStep = (step: number) => {
        switch(step) {
            case 0:
                return <FirstStepContent />
            case 1:
                return <SecondStepContent />
            case 2:
                return <ThirdStepContent />
            case 3:
                return <FourthStepContent />
        };
    };

    return (
        <Container additionalClasses={styles.formWizardContainer}>
            <Card additionalClasses={gridStyle.formGrid}>
                <StepsList>
                    {
                        stepsData.map(step => {
                            return (
                                <StepItem key={step.stepNumber} onClick={() => handleStepChange(step.stepNumber)} stepNumber={step.stepNumber} stepTitle={step.stepTitle} />
                            )
                        })
                    }   
                </StepsList>
                <Step stepTitle={stepHeaderData[step].stepTitle} stepSubtitle={stepHeaderData[step].stepSubtitle}>
                    {currentStep(step)}
                </Step>
            </Card>
        </Container>
    )
};
