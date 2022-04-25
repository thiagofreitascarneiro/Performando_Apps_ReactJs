import { memo } from 'react';

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }
    onAddToWishlist: (id: number) => void;
}




export function ProductItemCompany({ product, onAddToWishlist }: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => onAddToWishlist(product.id)}> Add to wishtlist</button>
        </div>
    )
}


export const ProductItem = memo(ProductItemCompany, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})