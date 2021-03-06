import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "./ProductTypeProvider"
import { ProductCard } from "./Product"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)

    useEffect(() => {
        getProductTypes()
            .then(getProducts)
    }, [])

    return (
        <div>
            <h2>Check out our awesome products!</h2>
            {products.map(product => {

                const type = productTypes.find(type => type.id === product.productTypeId )
                return <ProductCard key={product.id} product={product} type={type}/>
            })
            }
        </div>
    )
}