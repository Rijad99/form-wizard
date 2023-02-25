import { PropsWithChildren } from 'react';

import styles from '../Card/_Card.module.scss';
import utilityClasses from '../../../scss/_utilities.module.scss';

interface CardProps {
    additionalClasses?: string;
}

export const Card = (props: PropsWithChildren<CardProps>) => {
    return (
        <div className={`${styles.card} ${utilityClasses.p12} ${props?.additionalClasses ? props.additionalClasses : ""}`}>
            {props?.children}
        </div>
    )
};
