import styles from '../ConfirmDialog/_ConfirmDialog.module.scss';

import thankYouIcon from '../../../../images/icons/icon-thank-you.svg';

export const ConfirmDialog = () => {
    return (
        <div className={styles.confirmDialog}>
            <img src={thankYouIcon} className={styles.confirmIcon} />
            <h1 className={styles.confirmTitle}>Thank you!</h1>
            <p className={styles.confirmText}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
    )
}
