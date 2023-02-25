import { Container } from '../../common/Container/Container';
import { Card } from '../../common/Card/Card';

import styles from "../FormWizard/_FormWizard.module.scss";
import gridStyle from "../FormGrid/_FormGrid.module.scss";

export const FormWizard = () => {
    return (
        <Container additionalClasses={styles.formWizardContainer}>
            <Card additionalClasses={gridStyle.formGrid} />
        </Container>
    )
};
