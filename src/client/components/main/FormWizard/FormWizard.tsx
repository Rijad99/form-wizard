import { useState, PropsWithChildren } from 'react'

import { Container } from '../../common/Container/Container';
import { Card } from '../../common/Card/Card';
import { StepItem } from '../StepItem/StepItem';
import { Step } from '../Steps/Step';
import { FirstStepContent } from '../Steps/FirstStepContent/FirstStepContent';
import { SecondStepContent } from '../Steps/SecondStepContent/SecondStepContent';
import { ThirdStepContent } from '../Steps/ThirdStepContent/ThirdStepContent';
import { FourthStepContent } from '../Steps/FourthStepContent/FourthStepContent';
import { ConfirmDialog } from '../ConfirmDialog/ConfirmDialog';

import { stepsData, stepHeaderData } from '../../../data/stepsData';

import styles from '../FormWizard/_FormWizard.module.scss';
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
    const [activeStep, setActiveStep] = useState<number>(4);

    const handleStepChange = (stepNumber: number) => {
        setActiveStep(stepNumber);
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
            case 4:
                return <ConfirmDialog />
        };
    };

    const handleNextStep = (activeStep: number) => {
        setActiveStep(activeStep + 1);
    }

    const handlePreviousStep = (activeStep: number) => {
        setActiveStep(activeStep - 1);
    }

    const handleConfirm = () => {
        setActiveStep(4)
    }

    return (
        <Container additionalClasses={styles.formWizardContainer}>
            <Card additionalClasses={gridStyle.formGrid}>
                <StepsList>
                    {
                        stepsData.map(step => {
                            return (
                                <StepItem key={step.stepNumber} active={activeStep === step.stepNumber} onClick={() => handleStepChange(step.stepNumber)} stepNumber={step.stepNumber + 1} stepTitle={step.stepTitle} />
                            )
                        })
                    }   
                </StepsList>
                {
                    activeStep !== 4 ?
                    <Step stepTitle={stepHeaderData[activeStep].stepTitle} stepSubtitle={stepHeaderData[activeStep].stepSubtitle} stepNumber={activeStep} onClickNext={() => handleNextStep(activeStep)} onClickBack={() => handlePreviousStep(activeStep)} onClickConfirm={() => handleConfirm()} >
                        {currentStep(activeStep)}
                    </Step> :
                    <ConfirmDialog />
                }
            </Card>
        </Container>
    )
};
