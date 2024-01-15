import Container from '@/app/components/Container';
import React from 'react'
import ProductDetails from './ProductDetails';
import { product } from '@/utils/product';

type Params = {
    productId?: string;
};

type Props = {
    params: Params;
};

function Product({ params }: Props) {
    const { productId } = params;
    console.log('productId => ',productId)
    return (
        <div>
            <Container>
                <ProductDetails product={product}/>
            </Container>
        </div>
    )
}

export default Product