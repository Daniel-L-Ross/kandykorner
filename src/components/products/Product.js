import React from "react"

export const ProductCard = ({ product }) => {
    return (
        <>
            <h3>Product: {product.name}</h3>
            <div>Price: ${product.price}</div>
            <div>Typeid: {product.productTypeId}</div>
            <div>Type Name: {product.productType.name}</div>
        </>
    )
}
