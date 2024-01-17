import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
}

export const CartContext = createContext<CartContextType | null>(null)


interface Props {
    [propName: string]: any
}

export const CartContextProvider = (props: Props) => {

    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prevState) => {
            let updatedCart;
            if (prevState) {
                updatedCart = [...prevState, product]
            } else {
                updatedCart = [product]
            }
            localStorage.setItem('eShopCartItems' , JSON.stringify(updatedCart));
            return updatedCart;
        })
    }, [])

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart
    }

    useEffect(()=>{
        const cartItems :any = localStorage.getItem('eShopCartItems');
        const products : CartProductType[] | null = JSON.parse(cartItems)
        setCartProducts(products);
    },[])

    return <CartContext.Provider value={value} {...props} />
}
export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider")
    }

    return context;
}
