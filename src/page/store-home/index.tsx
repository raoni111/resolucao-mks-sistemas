import React from 'react';

import {Main} from './styles';
import HeaderStore from '../../containers/header';
import ProductSection from '../../containers/ProductSection';
import Footer from '../../containers/Footer';
import Cart from '../../containers/Cart';


export default function StoreHome(): React.ReactElement {
    return (
        <Main>
            <Cart />
            <HeaderStore />
            <ProductSection />
            <Footer />
        </Main>
    )
}