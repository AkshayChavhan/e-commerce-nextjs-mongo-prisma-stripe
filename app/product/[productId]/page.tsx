import React from 'react'

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
        <div>Product Page</div>
    )
}

export default Product