import React from 'react';

import {Main} from './styles';
import HeaderStore from '../../containers/header';
import ProductSection from '../../containers/ProductSection';


export default function StoreHome(): React.ReactElement {
    return (
        <Main>
            <HeaderStore />
            <ProductSection />
        </Main>
    )
}