import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


export const Features = () => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>Features</Text>

            <View style={styles.chatGPT} >
                <View style={styles.chatContainer}>
                    <Image style={styles.chatImg} source={require('../../assets/images/chatGPT.png')} />
                    <Text style={styles.chatText}>ChatGPT</Text>
                </View>
                <Text style={styles.desc}>
                    ChatGPT can provide you with and knowledgeable responses, assist you width creative ideas..
                    ChatGPT can provide you with and knowledgeable responses, assist you width creative ideas..
                </Text>
            </View>


            <View style={styles.dall} >
                <View style={styles.chatContainer}>
                    <Image style={styles.chatImg} source={require('../../assets/images/dall-e.png')} />
                    <Text style={styles.chatText}>DALL-E</Text>
                </View>
                <Text style={styles.desc}>
                    DALL-E can provide you with and knowledgeable responses, assist you width creative ideas..
                    DALL-E can provide you with and knowledgeable responses, assist you width creative ideas..
                </Text>
            </View>



            <View style={styles.SmartAI} >
                <View style={styles.chatContainer}>
                    <Image style={styles.chatImg} source={require('../../assets/images/smart-ai.png')} />
                    <Text style={styles.chatText}>Smart AI</Text>
                </View>
                <Text style={styles.desc}>
                    Smart AI can provide you with and knowledgeable responses, assist you width creative ideas..
                    Smart AI can provide you with and knowledgeable responses, assist you width creative ideas..
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        padding: 20
    },
    text: {
        fontSize: 27,
        color: 'black',
        fontFamily: 'semibold',
        marginBottom: 10
    },
    chatGPT: {
        backgroundColor: '#9CEFC8',
        padding: 10,
        borderRadius: 15,
        marginVertical: 8,
    },
    dall: {
        backgroundColor: '#E5CEFE',
        padding: 10,
        borderRadius: 15,
        marginVertical: 8,
    },
    SmartAI: {
        backgroundColor: '#93E6EF',
        padding: 10,
        borderRadius: 15,
        marginVertical: 8,
    },
    chatContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 3
    },
    chatImg: {
        height: 40,
        width: 40,
    },
    chatText: {
        paddingHorizontal: 10,
        color: 'black',
        fontWeight: '500',
        fontSize: 20,
    },
    desc: {
        color: 'black',
        fontSize: 16,
    }

})
