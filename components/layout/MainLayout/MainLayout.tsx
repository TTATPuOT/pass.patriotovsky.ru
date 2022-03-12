import React from 'react';
import Head from 'next/head';
import styles from './MainLayout.module.sass';

export interface MainLayoutProps {
    children: JSX.Element
}

const MainLayout = (props: MainLayoutProps) => {
    return <div>
        <Head>
            <title>Generate strong password</title>
            <meta name="description" content="Generate strong password easelly" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {props.children}

        <div className={styles.footer}>
            <div className="container">
                Developed by <a href="https://patriotovsky.ru/" target="_blank" rel="noreferrer">Anton Neverov</a>
            </div>
        </div>
    </div>;
};

export default MainLayout;
