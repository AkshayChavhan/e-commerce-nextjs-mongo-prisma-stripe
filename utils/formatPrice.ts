import React from 'react'

type Props = {
    amount: number
}

function formatPrice({ amount }: Props) {
    return new Intl.NumberFormat
        ('en-US', {
            style: 'currency',
            'currency': 'USD'
        }).format(amount);
}

export default formatPrice