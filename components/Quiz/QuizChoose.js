import { Text, StyleSheet, View, FlatList, ActivityIndicator, Image, TextInput, Pressable } from 'react-native'
import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

export default function QuizChoose({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('https://5szczep.pl/php/endpoints/Test.php');
            let json = await response.json()
            json = json.filter(e => e.isReady == 1);
            setData(json)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const renderItem = ({ item }) => {
        return (
            <Pressable key={item.id} onPress={() => navigation.navigate('Quiz', { quiz: item })} style={styles.QuizListItem}>
                <Image
                    style={styles.QuizListImage}
                    source={{ uri: `https://5szczep.pl/images/${item.src}` }}
                />

                <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.00)', 'rgba(10, 10, 10, 0.45)', 'rgba(10, 10, 10, 0.55)']} style={styles.linearGradient}></LinearGradient>
                <View style={styles.textContainer}>
                    <Text style={styles.QuizListItemText}>{item.title}</Text>
                </View>
            </Pressable>
        );
    }

    useEffect(() => { getData() }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
            {isLoading ? <ActivityIndicator style={{ flex: 1 }} /> : (
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                    data={data}
                    numColumns={2}
                    renderItem={renderItem}
                />
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    QuizListItem: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        height: 130,
        flex: 1,
        maxWidth: '45%',
        borderRadius: 5,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.7,

        elevation: 14,

    },

    QuizListImage: {
        height: '100%',
        width: '100%',
        resizeMode: "cover",
        borderRadius: 5,
        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15
    },

    textContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 5,
        // borderBottomEndRadius: 15,
        // borderBottomLeftRadius: 15,
        zIndex: 0,
        padding: 12,
        justifyContent: 'flex-end',
        // shadowColor: "#000",
        // shadowOffset: {
        // 	width: 1,
        // 	height: 10,
        // },
        // shadowOpacity: 0.28,
        // shadowRadius: 1.40,
    },

    QuizListItemText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    linearGradient: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        flex: 1,
        opacity: 0.5,
        zIndex: 0,
        borderRadius: 5
    },


})