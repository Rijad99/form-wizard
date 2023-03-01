import { useState } from 'react';

import { Input } from '../../../common/FormControls/FormControls';

import styles from '../FirstStepContent/_FirstStepContent.module.scss';
import utilityClasses from '../../../../scss/_utilities.module.scss';

type PersonalInfo = {
    clientName: string,
    clientEmailAddress: string,
    clientPhoneNumber: string
}

export const FirstStepContent = () => {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({ clientName: '', clientEmailAddress: '', clientPhoneNumber: '' });

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        
        setPersonalInfo({ ...personalInfo, [name]: value })
    }

    return (
        <div className={styles.stepContent0}>
            <Input type='text' value={personalInfo.clientName} name='clientName' id='step-one-client_name' additionalClasses={`${utilityClasses.mb22}`} label='Name' placeholder='e.g. Stephen King' spellCheck={false} onChange={(e) => handleInputChange(e)} />
            <Input type='text' value={personalInfo.clientEmailAddress} name='clientEmailAddress' id='step-one-client_email_address' additionalClasses={`${utilityClasses.mb22}`} label='Email Address' placeholder='e.g. stephenking@lorem.com' spellCheck={false} onChange={(e) => handleInputChange(e)} />
            <Input type='text' value={personalInfo.clientPhoneNumber} name='clientPhoneNumber' id='step-one-client_phone_number' label='Phone Number' placeholder='e.g. +1 234 567 890' spellCheck={false} onChange={(e) => handleInputChange(e)} />
        </div>
    )
};
