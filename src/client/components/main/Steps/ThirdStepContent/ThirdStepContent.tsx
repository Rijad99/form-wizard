import styles from '../ThirdStepContent/_ThirdStepContent.module.scss';

import { addonsData } from '../../../../data/addonsData';
import { Checkbox } from '../../../common/Checkbox/Checkbox';

export const ThirdStepContent = () => {
    return (
        <div className={styles.addonsGrid}>
            {
                addonsData.map(addon => {
                    return (
                         <AddOn key={addon.id} title={addon.title} description={addon.description} price={addon.price} />
                    )
                })
            }
        </div>
    )
};

export interface AddOnProps {
    id?: number,
    isChecked?: false,
    title: string,
    description: string,
    price: string
}

const AddOn = (props: AddOnProps) => {
    return (
        <div className={styles.addonItem}>
            <div className={styles.addonCheckbox}>
                <Checkbox />
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
