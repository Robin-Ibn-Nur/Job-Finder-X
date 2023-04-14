import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../../Loader/Loader';

const Main = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header />
            <div>{navigation.state === 'loading' && <Loader />}</div>

            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;