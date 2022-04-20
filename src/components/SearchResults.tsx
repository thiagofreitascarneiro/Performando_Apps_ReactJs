import { ProductItem } from "./ProductItem";
import { useMemo } from 'react';

interface searchResultsProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>
    onAddToWishlist: (id: number) => void;

}

export function SearchResults({ results, onAddToWishlist }: searchResultsProps) {

    const totalPrice =  useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price;
        }, 0)
    }, [results])

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