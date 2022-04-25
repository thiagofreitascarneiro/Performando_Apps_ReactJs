import { ProductItem } from "./ProductItem";
import { useMemo } from 'react';

interface searchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }>
    onAddToWishlist: (id: number) => void;

}

export function SearchResults({ totalPrice, results, onAddToWishlist }: searchResultsProps) {

    // const totalPrice =  useMemo(() => {
      
    // }, [results])

    return (
        <div>
            <h2>{totalPrice}</h2>

            {results.map(product => {
                return (
                <ProductItem 
                    key={product.id}
                    product={product}
                    onAddToWishlist={onAddToWishlist}
                />
            );
            })}


        </div>
    )
}