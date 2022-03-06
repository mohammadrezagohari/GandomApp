import Link from "next/link";
import styles from '../../styles/shared/Nav.module.css'
export default function Nav() {
    return (
        <div className={styles.nav}>
            <input type="checkbox" id={styles.navcheck} />
            <div className={styles.navheader}>
                <div className={styles.navtitle}>
                    گندم
                </div>
            </div>
            <div className={styles.navbtn}>
                <label htmlFor={styles.navcheck}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className={styles.navlinks}>
                <Link href="/contact">تماس با ما</Link>
                <Link href="/about">درباره ما</Link>
                <Link href="/">صفحه اصلی</Link>
            </div>
        </div>
    );
}
