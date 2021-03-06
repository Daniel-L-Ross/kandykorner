import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./Product"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <h2> Check out our awesome products!</h2>
            {products.map(product => <ProductCard key={product.id} product={product}/>)}
        </>
    )
}