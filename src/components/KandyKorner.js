import React from "react"
import { LocationList } from "./location/LocationList"
import { LocationContext, LocationProvider } from "./location/LocationProvider"

export const KandyKorner = () => (
    <>
        <h1>Welcome to kandykorner</h1>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)