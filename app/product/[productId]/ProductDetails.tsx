'use client'
import SetColor from '@/app/components/products/SetColor'
import SetQuantity from '@/app/components/products/SetQuantity'
import Button from '@/app/components/products/Button'
import React, { useCallback, useEffect, useState } from 'react'
import ProductImage from '@/app/components/products/ProductImage'
import { useCart } from '@/hook/useCart'
import { MdCheckCircle } from 'react-icons/md'
import { useRouter } from 'next/navigation'

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
    const { handleAddProductToCart, cartProducts } = useCart();
    const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
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

    const router = useRouter();

    const productRating = product.reviews.reduce((acc: number, item: any) => {
        return acc + item.rating;
    }, 0) / product.reviews.length;

    console.clear();
    console.log('cartProducts => ', cartProducts);

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


    useEffect(() => {
        setIsProductInCart(false);
        if (cartProducts) {
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)
            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
    }, [cartProducts])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <ProductImage
                cartProduct={cartProduct}
                product={product}
                handleColorSelect={handColorSelect} />
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
                {
                    isProductInCart ?
                        <>
                            <p className='mb-2 text-slate-500 flex items-center gap-1'>
                                <MdCheckCircle size={20} className='text-teal-400' />
                                <span>Product added to cart</span>
                            </p>
                            <div className='max-w-[300px]'>
                                <Button 
                                label='VIew Cart' 
                                outline 
                                onClick={() => { router.push("/cart")}}
                                />
                            </div>
                        </> :
                        <>
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
                            <div className='max-w-[300px]'>
                                <Button
                                    label='Add to Cart'
                                    onClick={() => handleAddProductToCart(cartProduct)}
                                />
                            </div></>
                }

            </div>
        </div>
    )
}

export default ProductDetails