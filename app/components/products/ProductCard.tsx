'use client'
import formatPrice from '@/utils/formatPrice'
import { TruncateText } from '@/utils/truncateText'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
    data: any
}

function ProductCard({ data }: Props) {

    const router = useRouter()
    const productRating = data.reviews.reduce((acc: number, item: any) => {
        return acc + item.rating;
    }, 0) / data.reviews.length;

    return (
        <div
            onClick={() => {
                router.push(`/product/${data.id}`)
            }}
            className='col-span-1
        cursor-pointer
        border-[1.2px]
        border-slate-200
        bg-slate-50
        rounded-sm
        p-2
        transition
        hover:scale-105
        text-center
        text-sm'
        >
            <div
                className='
            flex
            flex-col
            items-center
            w-full
            gap-1'>
                <div className='aspect-square overflow-hidden relative w-full'>
                    <Image
                        fill
                        src={data.images[0].image}
                        alt={data.name}
                        className='w-full h-full object-contain'
                    />
                </div>
                <div className='mt-4'>{TruncateText(data.name)}</div>
                <div>{productRating}</div>
                <div>{data.reviews.length} reviews</div>
                <div className='font-semibold'>{formatPrice(data.price)}</div>
            </div>
        </div>
    )
}

export default ProductCard