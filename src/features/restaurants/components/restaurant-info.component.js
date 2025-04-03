import React from "react"
import {Text ,StyleSheet} from "react-native"
import {Card} from "react-native-paper"


export const RestaurantInfo = ({ restaurant= {} }) => {
    const {
        name = "Some restaurant",
        icon,
        photos = [

        ],
        address = "100 some random street",
        isOpenNow = true,
        rating= 4,
        isClosedTemporarily,
    } = restaurant
    return (
        <Card>
            
        </Card>
    )
}