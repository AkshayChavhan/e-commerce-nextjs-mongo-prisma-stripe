'use client'
import SetColor from '@/app/components/products/SetColor'
import SetQuantity from '@/app/components/products/SetQuantity'
import React, { useCallback, useState } from 'react'

type Props = {
    product: any
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    catagory: string,
    brand: string,
    selectedImg: SelectedImgType,
    quantity: number,
    price: number
}

export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string
}

const Horizontal = () => {
    return <hr className='w-[30% my-2]' />
}

const ProductDetails = ({ product }: Props) => {

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        catagory: product.catagory,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price
    })
    const productRating = product.reviews.reduce((acc: number, item: any) => {
        return acc + item.rating;
    }, 0) / product.reviews.length;

    // console.clear();
    // console.log('cartProduct => ', cartProduct);

    const handColorSelect = useCallback((value: SelectedImgType) => {
        setCartProduct((prev) => {
            return { ...prev, selectedImg: value }
        });
    }, [cartProduct.selectedImg]);

    const handleQtyDecrease = useCallback(() => {
        if (cartProduct.quantity === 1) {
            return;
        }
        setCartProduct((prev) => {
            return { ...prev, quantity: --prev.quantity }
        })
    }, [cartProduct])

    const handleQtyIncrease = useCallback(() => {
        if (cartProduct.quantity === 99) {
            return;
        }
        setCartProduct((prev) => {
            return { ...prev, quantity: ++prev.quantity }
        })
    }, [cartProduct])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div>
                Images
            </div>
            <div
                className='flex flex-col gap-1 text-slate-500 text-sm'>
                <h2
                    className='text-3xl font-medium text-slate-700'>
                    {product.name}
                </h2>
                <div
                    className='flex items-center gap-2'>
                    {/* rating component */}
                    {productRating}
                    <div>{product.reviews.length}</div>
                </div>
                <div className='text-justify'>{product.description}</div>
                <Horizontal />
                <div>
                    <span className='font-semibold'>CATOGORY:</span>
                    {product.catagory}
                </div>
                <div>
                    <span className='font-semibold'>BRAND:</span>
                    {product.brand}
                </div>
                <div className={product.inStock ? 'text-teal-400' : 'text-red-400'}>
                    {product.inStock ? 'In stock' : 'Out of Stock'}
                </div>
                <Horizontal />
                <SetColor
                    cartProduct={cartProduct}
                    images={product.images}
                    handColorSelect={handColorSelect}
                />
                <Horizontal />
                <SetQuantity
                    cartProduct={cartProduct}
                    handleQtyDecrease={handleQtyDecrease}
                    handleQtyIncrease={handleQtyIncrease}
                />
                <Horizontal />
                <div>add to cart</div>
            </div>
        </div>
    )
}

export default ProductDetails