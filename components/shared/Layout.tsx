import Head from 'next/head';
import styles from '../../styles/shared/Layout.module.css'
import Nav from './Nav';
export default function Layout({ children }: { children: any }) {
    return (
        <div className={styles.container}>
            <Nav></Nav>
            <Head>
                <title>Gandom</title>
            </Head>
            {children}
        </div>
    )
};
