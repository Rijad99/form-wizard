import { useState } from "react";

import styles from '../Checkbox/_Checkbox.module.scss';

interface CheckboxProps {
    id: string,
    labelText?: string,
    checked: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Checkbox = (props: CheckboxProps) => {
    return (
        <>
            <div className={`${styles.checkbox} ${props.checked ? styles.checkboxChecked : styles.checkbox}`}>
                <input type="checkbox" id={`checkbox-${props.id}`} className={styles.customCheckbox} checked={props.checked} onChange={props.onChange} />
                {
                    props.labelText 
                    ?
                    <label htmlFor={`checkbox-${props.id}`}>{props.labelText}</label> 
                    :
                    null
                }
            </div>
        </>
    )
}
