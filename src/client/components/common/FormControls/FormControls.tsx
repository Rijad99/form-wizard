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
    value: string,
    name: string,
    placeholder: string,
    spellCheck?: boolean,
    label: string,
    additionalClasses?: string,
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    return (
        <FormControl>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} value={props.value} name={props.name} placeholder={props.placeholder} id={props.id} className={props?.additionalClasses ? props.additionalClasses : ""} spellCheck={props.spellCheck} onChange={props.onChange} onKeyDown={props.onKeyDown} onKeyUp={props.onKeyUp} />
        </FormControl>
    )
}
