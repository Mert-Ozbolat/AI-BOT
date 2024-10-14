import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Jarvis</Text>
                <Text style={styles.headerFuture}>The Future is Here, Powered by AI.</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.logo} source={require('../../assets/images/brain2.png')} />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: 'white',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 37,
        color: '#225879',
        fontWeight: '600',
        marginTop: 100,
    },
    headerFuture: {
        textAlign: 'center',
        fontSize: 18,
        color: 'gray',
        fontFamily: 'semibold',
        fontWeight: '400',
        marginTop: 10,
    },
    imageContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    logo: {
        width: 250,
        height: 250,
    },
    button: {
        backgroundColor: '#225879',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 20,
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    }
})