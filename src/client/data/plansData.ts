import { PlanCardProps } from "../components/main/Steps/SecondStepContent/SecondStepContent";

import iconArcade from "../../images/icons/icon-arcade.svg";
import iconAdvanced from "../../images/icons/icon-advanced.svg";
import iconPro from "../../images/icons/icon-pro.svg";

export const plansData: PlanCardProps[] = [
    {
        id: '1',
        iconPath: iconArcade,
        name: 'Arcade',
        priceMonthly: '$9/mo',
        priceYearly: '$90/yr'
    },
    {
        id: '2',
        iconPath: iconAdvanced,
        name: 'Advanced',
        priceMonthly: '$12/mo',
        priceYearly: '$120/yr'
    },
    {
        id: '3',
        iconPath: iconPro,
        name: 'Pro',
        priceMonthly: '$15/mo',
        priceYearly: '$150/yr'
    }
];
