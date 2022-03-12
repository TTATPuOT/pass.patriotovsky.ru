import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import MainLayout from '@layout/MainLayout';
import IndexPage from '@templates/IndexPage';

const Home: NextPage = () => {
    return <MainLayout>
        <IndexPage />
    </MainLayout>
}

export default Home
