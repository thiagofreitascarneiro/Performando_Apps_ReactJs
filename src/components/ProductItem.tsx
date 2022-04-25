import { memo, useState, lazy, Suspense } from 'react';
import { AddProductToWishlistProps } from './AddProductToWishlist'
// import { AddPrductToWishlist } from './AddProductToWishlist';

const AddProductToWishlist = lazy(() => {
    return import('./AddProductToWishlist');
})
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
    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => setIsAddingToWishlist(true)}>  Adicionar aos Favoritos</button>

            { isAddingToWishlist && (
            <Suspense fallback={<span>Carregando ...</span>}>
                 <AddProductToWishlist
                    onAddToWishlist={() => onAddToWishlist(product.id)}
                    onRequestClose= {() => setIsAddingToWishlist(false)}
                 />
            </Suspense>
            )}
            
        </div>
    )
}


export const ProductItem = memo(ProductItemCompany, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})