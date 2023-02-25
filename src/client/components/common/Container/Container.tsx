import { PropsWithChildren } from 'react';

import styles from "./_Container.module.scss"

interface ContainerProps {
    additionalClasses?: string;
}

export const Container = (props: PropsWithChildren<ContainerProps>) => {
    return (
        <div className={`${styles.container} ${props?.additionalClasses ? props.additionalClasses : ""}`}>
            {props?.children}
        </div>
    )
};

// Love you najvise <3
