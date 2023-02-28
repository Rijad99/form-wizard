import { PropsWithChildren } from 'react';

import styles from '../FormControls/_FormControls.module.scss';

export const FormControl = (props: PropsWithChildren) => {
    return (
        <div className={styles.formControl}>
            {props.children}
        </div>
    )
}

interface InputProps {
    id: string,
    type: string
    placeholder: string,
    spellCheck?: boolean,
    label: string,
    additionalClasses?: string,
    onKeyDown?: () => void,
    onKeyUp?: () => void
}

export const Input = (props: InputProps) => {
    return (
        <FormControl>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} id={props.id} className={props?.additionalClasses ? props.additionalClasses : ""} spellCheck={props.spellCheck} onKeyDown={props.onKeyDown} onKeyUp={props.onKeyUp} />
        </FormControl>
    )
}
