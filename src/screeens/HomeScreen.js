import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Features } from '../components/features';
import { dummyMessages } from '../constants';


export default function HomeScreen() {

    const [messages, setMessages] = useState(dummyMessages);
    const [recording, setRecording] = useState(true);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/images/jarvis.png')} />
                </View>

                {/* Features - Messages */}
                {
                    messages.length > 0 ? (
                        <View style={styles.assistans}>
                            <Text style={styles.assistansText}>
                                Assistants
                            </Text>

                            <View style={styles.card}>
                                <ScrollView
                                    bounces={false}
                                    showsHorizontalScrollIndicator={false}>
                                    {
                                        messages.map((message, index) => {
                                            if (message.role === 'assistant') {
                                                if (message.content.includes('https')) {
                                                    return (
                                                        <View key={index} style={styles.aiImageContainer}>
                                                            <Image style={styles.aiImage} resizeMode='contain' source={{ uri: message.content }} />
                                                        </View>
                                                    )
                                                } else {
                                                    return (
                                                        <View style={styles.aiContainer} key={index}>
                                                            <Text style={styles.aiText}>{message.content}</Text>
                                                        </View>
                                                    )
                                                }
                                            } else {
                                                // Kullanıcı mesajı
                                                return (
                                                    <View key={index} style={styles.userContainer}>
                                                        <Text style={styles.userText}>{message.content}</Text>
                                                    </View>
                                                )
                                            }
                                        })
                                    }
                                </ScrollView>
                            </View>

                        </View>
                    ) : (
                        <Features />
                    )
                }


                {/* Record - Clear - Stop */}

                <View style={styles.footer}>
                    {
                        recording ? (
                            <TouchableOpacity>
                                <View style={styles.micContainer}>
                                    <Image style={styles.mic} source={require('../../assets/images/micWave.gif')} />
                                </View>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity>
                                <View style={styles.micContainer}>
                                    <Image style={styles.mic} source={require('../../assets/images/mic.png')} />
                                </View>
                            </TouchableOpacity>
                        )
                    }



                </View>
            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    safeArea: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
    },
    assistans: {
        margin: 20
    },
    assistansText: {
        fontSize: 20,
        color: 'black',
        marginVertical: 10
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: 400,
        borderRadius: 17,
        backgroundColor: '#e0e0e0',
        padding: 10,
    },
    aiContainer: {
        backgroundColor: '#f0f0f0',
        alignSelf: 'flex-start',
        padding: 10,
        marginVertical: 6,
        borderRadius: 10,
        maxWidth: '80%',
    },
    aiText: {
        color: 'black',
        fontSize: 16,
    },
    userContainer: {
        backgroundColor: '#C9FAE2',
        alignSelf: 'flex-end',
        padding: 10,
        marginVertical: 6,
        borderRadius: 10,
        maxWidth: '80%',
    },
    userText: {
        color: 'black',
        fontSize: 16,
    },
    aiImageContainer: {
        alignSelf: 'flex-start',
        padding: 10,
        marginVertical: 6,
        borderRadius: 10,
        maxWidth: '80%',
    },
    aiImage: {
        height: 200,
        width: 200,
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    micContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CCD99',
        width: 70,
        height: 70,
        borderRadius: 50,
        padding: 10,
    },
    mic: {
        borderRadius: 50,
        width: 50,
        height: 50,

    }
});
