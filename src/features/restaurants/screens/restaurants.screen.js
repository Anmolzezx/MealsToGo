import React from "react"
import { SearchBar } from "react-native-paper"
import { StatusBar, SafeAreaView, View, StyleSheet, Text } from "react-native"
import { RestaurantInfo } from "../components/restaurant-info.component"


export const RestaurantsScreen = () => (
    <SafeAreaView style = {styles.container}>
        <View> style = {styles.search} 
            <SearchBar />
        </View>

        <View style = {styles.list}>
            <RestaurantInfo />
        </View>

    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        flex : 1, 
        marginTop: StatusBar.currentHeight
    },
    search : {
        padding: 16
    },
    list: {
        flex: 1, 
        padding: 16, 
        backgroundColor: "blue"
    }
})