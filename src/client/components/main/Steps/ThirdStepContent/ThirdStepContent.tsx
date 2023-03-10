import { useState } from 'react';

import styles from '../ThirdStepContent/_ThirdStepContent.module.scss';

import { addonsData } from '../../../../data/addonsData';
import { Checkbox } from '../../../common/Checkbox/Checkbox';

export const ThirdStepContent = () => {
    const [checkboxes, setCheckboxes] = useState<boolean[]>(new Array(addonsData.length).fill(false));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
        const inputParentElement = e.currentTarget.parentElement?.parentElement?.parentElement;
        inputParentElement!.classList.toggle(styles.selectedAddon);

        const updatedCheckboxes = checkboxes.map((checkbox, index) => position === index ? !checkbox : checkbox);
        setCheckboxes(updatedCheckboxes);
    }

    return (
        <div className={styles.addonsGrid}>
            {
                addonsData.map(addon => {
                    return (
                         <AddOn key={addon.id} id={addon.id} title={addon.title} description={addon.description} price={addon.price} checked={checkboxes[addon.id!]} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, addon.id!)} />
                    )
                })
            }
        </div>
    )
};

export interface AddOnProps {
    id?: number,
    title: string,
    description: string,
    price: string,
    checked?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AddOn = (props: AddOnProps) => {
    return (
        <div className={styles.addonItem}>
            <div className={styles.addonCheckbox}>
                <Checkbox id={`addon-${props.id}`} checked={props.checked!} onChange={props.onChange!} />
            </div>
            <div className={styles.addonInfo}>
                <h4 className={styles.addonTitle}>{props.title}</h4>
                <span className={styles.addonDescription}>{props.description}</span>
            </div>
            <div className={styles.addonPrice}>
                <span className={styles.addonPrice}>{props.price}</span>
            </div>
        </div>
    )
}
