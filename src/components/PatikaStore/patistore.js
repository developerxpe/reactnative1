import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import styles from "./patistore.style";

const patistore = ({ patika }) => {
    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.inner_image}>
                <Image style={styles.image} source={{ uri: patika.imgURL }} />
                </View>
                <View style={styles.inner_title}>
                    <Text style={styles.title}>{patika.title}</Text>
                </View>
                <View style={styles.inner_container}>

                    <Text style={styles.price}>{patika.price}</Text>
                    {patika.inStock ? '' : <Text style={styles.inStock}>STOKTA YOK</Text>}

                </View>
        </SafeAreaView>
    )
}

export default patistore;