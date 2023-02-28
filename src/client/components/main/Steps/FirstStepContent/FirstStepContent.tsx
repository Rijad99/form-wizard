import { Input } from '../../../common/FormControls/FormControls';

import styles from '../FirstStepContent/_FirstStepContent.module.scss';
import utilityClasses from '../../../../scss/_utilities.module.scss';

export const FirstStepContent = () => {
    return (
        <div className={styles.stepContent0}>
            <Input type='text' id='step-one-client_name' additionalClasses={`${utilityClasses.mb22}`} label='Name' placeholder='e.g. Stephen King' spellCheck={false} />
            <Input type='text' id='step-one-client_email_address' additionalClasses={`${utilityClasses.mb22}`} label='Email Address' placeholder='e.g. stephenking@lorem.com' spellCheck={false} />
            <Input type='text' id='step-one-client_phone_number' label='Phone Number' placeholder='e.g. +1 234 567 890' spellCheck={false} />
        </div>
    )
};
