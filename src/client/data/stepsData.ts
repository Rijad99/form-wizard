import { StepItemProps } from '../components/main/StepItem/StepItem';
import { StepProps } from '../components/main/Steps/Step';

export const stepsData: StepItemProps[] = [
    {
        stepNumber: 0,
        stepTitle: "Your info",
        path: "/info"
    },
    {
        stepNumber: 1,
        stepTitle: "Select plan",
        path: "/plan"
    },
    {
        stepNumber: 2,
        stepTitle: "Add-ons",
        path: "/addons"
    },
    {
        stepNumber: 3,
        stepTitle: "Summary",
        path: "/summary"
    }
];

export const stepHeaderData: StepProps[] = [
    {
        stepTitle: "Personal info",
        stepSubtitle: "Please provide your name, email address and phone number."
    },
    {
        stepTitle: "Select your plan",
        stepSubtitle: "You have the option of monthly or yearly billing."
    },
    {
        stepTitle: "Pick add-ons",
        stepSubtitle: "Add-ons help enhance your gaming experience."
    },
    {
        stepTitle: "Finishing up",
        stepSubtitle: "Double-check everyhing looks OK before confirming."
    }
];
