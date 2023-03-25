import { useState, PropsWithChildren } from 'react'
import { useLocation, Outlet } from "react-router-dom";

import { Container } from '../../common/Container/Container';
import { Card } from '../../common/Card/Card';
import { StepItem } from '../StepItem/StepItem';
import { Step } from '../Steps/Step';
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
    const location = useLocation();

    const step = localStorage.getItem('stepNumber') || 0;
    const [activeStep, setActiveStep] = useState<number>(+step);

    const handleStepChange = (stepNumber: number) => {
        setActiveStep(stepNumber);
        localStorage.setItem('stepNumber', JSON.stringify(stepNumber));
    }

    const handleNextStep = (activeStep: number) => {
        setActiveStep(activeStep + 1);
        localStorage.setItem('stepNumber', JSON.stringify(activeStep));
    }

    const handlePreviousStep = (activeStep: number) => {
        setActiveStep(activeStep - 1);
        localStorage.setItem('stepNumber', JSON.stringify(activeStep));
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
                            const active:boolean = (step.path === location.pathname) || (step.stepNumber === 0 && location.pathname === "/");

                            return (
                                <StepItem 
                                    key={step.stepNumber} 
                                    path={step.path}
                                    active={active}
                                    stepNumber={step.stepNumber + 1} 
                                    stepTitle={step.stepTitle} 
                                    onClick={() => handleStepChange(step.stepNumber)}
                                />
                            )
                        })
                    }   
                </StepsList>
                {
                    <Step stepTitle={stepHeaderData[activeStep].stepTitle} stepSubtitle={stepHeaderData[activeStep].stepSubtitle} stepNumber={activeStep} onClickNext={() => handleNextStep(activeStep)} onClickBack={() => handlePreviousStep(activeStep)} onClickConfirm={() => handleConfirm()} >
                        <Outlet />
                    </Step>
                }
            </Card>
        </Container>
    )
};
