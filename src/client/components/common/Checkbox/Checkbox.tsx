import { useState } from "react";

import styles from '../Checkbox/_Checkbox.module.scss';

interface CheckboxProps {
    labelText?: string,
}

export const Checkbox = (props: CheckboxProps) => {
    const [isCbActive, setIsCbActive] = useState<boolean>(false);

    const changeCheckboxState = () => {
        !isCbActive ? setIsCbActive(true) : setIsCbActive(false);
    }

    const handleChange = () => {
        changeCheckboxState()
    }

    return (
        <>
            <div className={`${styles.checkbox} ${isCbActive ? styles.checkboxChecked : styles.checkbox}`} onClick={() => handleChange()}>
                <input type="checkbox" id="remember" className={styles.customCheckbox} />
                {
                    props.labelText 
                    ?
                    <label htmlFor="remember">{props.labelText}</label> 
                    :
                    null
                }
            </div>
        </>
    )
}
