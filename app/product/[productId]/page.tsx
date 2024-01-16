import Container from '@/app/components/Container';
import React from 'react'
import ProductDetails from './ProductDetails';
import { product } from '@/utils/product';
import ListRating from './ListRating';

type Params = {
    productId?: string;
};

type Props = {
    params: Params;
};

function Product({ params }: Props) {
    const { productId } = params;
    return (
        <div>
            <Container>
                <ProductDetails product={product}/>
                <div className='flex flex-col mt-20 gap-4'>
                    <div>Add Rating</div>
                    <ListRating product={product} />
                </div>
            </Container>
        </div>
    )
}

export default Product