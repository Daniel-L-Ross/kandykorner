import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./location/LocationList"
import { ProductList } from "./products/ProductList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { ProductTypeProvider } from "./products/ProductTypeProvider"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
            
            <ProductTypeProvider>
                <ProductProvider>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </ProductProvider>
            </ProductTypeProvider>
        </>
    )
}