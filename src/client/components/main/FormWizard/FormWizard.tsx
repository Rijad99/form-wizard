import React, { useState } from 'react'

import { Container } from '../../common/Container/Container';
import { Card } from '../../common/Card/Card';
import { StepsList } from '../StepsList/StepsList';
import { FirstStep, SecondStep, ThirdStep, FourthStep  } from '../Steps/Steps';

import styles from "../FormWizard/_FormWizard.module.scss";
import gridStyle from "../FormGrid/_FormGrid.module.scss";

export const FormWizard = () => {
    const [step, setStep] = useState<number>(1);

    const handleStepChange = (stepNumber: number) => {
        setStep(stepNumber);
    }

    const currentStep = (step: number) => {
        switch(step) {
            case 1:
                return <FirstStep />
            case 2:
                return <SecondStep />
            case 3:
                return <ThirdStep />
            case 4:
                return <FourthStep />
        };
    };

    return (
        <Container additionalClasses={styles.formWizardContainer}>
            <Card additionalClasses={gridStyle.formGrid}>
                <StepsList onClick={() => handleStepChange(2)} />
                {currentStep(step)}
            </Card>
        </Container>
    )
};
