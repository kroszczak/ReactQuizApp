import { StyleSheet, Text, View, FlatList, Image, Pressable, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'

data = [
    {
        name: "krzyż harcerski",
        img: require('../img/symbolika/krzyż.png'),
        elements: {
            liljka: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur. nic',
            piasek: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.',
            ramiona: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.3',
        }
    },
    {
        name: "lilijka harcerska",
        img: require('../img/symbolika/lilijka.png'),
        elements: {
            liljka: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur. nic',
            piasek: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.',
            ramiona: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.3',
        }
    },
    {
        name: "Koniczynka WAGGGS",
        img: require('../img/symbolika/koniczynka.png'),
        elements: {
            liljka: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur. nic',
            piasek: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.',
            ramiona: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.3',
        }
    },
    {
        name: "WOSM",
        img: require('../img/symbolika/WOSM.png'),
        elements: {
            liljka: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur. nic',
            piasek: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.',
            ramiona: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.3',
        }
    },
    {
        name: "znaczek zuchowy",
        img: require('../img/symbolika/znaczek.png'),
        elements: {
            liljka: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur. nic',
            piasek: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.',
            ramiona: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.3',
        }
    },
    {
        name: "naramiennik wędrowniczy",
        img: require('../img/symbolika/naramiennik.jpg'),
        elements: {
            liljka: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur. nic',
            piasek: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.',
            ramiona: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.3',
        }
    },
    {
        name: "elementy munduru",
        img: require('../img/symbolika/mundur.jpg'),
        elements: {
            liljka: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur. nic',
            piasek: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.',
            ramiona: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eum recusandae possimus corporis praesentium reprehenderit vitae ratione ducimus exercitationem ipsa enim eius rerum tempore explicabo dicta facere doloribus, minus consectetur.3',
        }
    },
]

const Symbolika = () => {
    const [clicked, setClicked] = useState(null);
    const scrollRef = useRef();

    const handlePress = (index) => {
        setClicked(data[index]);
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
        console.log('done')
    }
    const renderContent = () => {
        return <ScrollView
            ref={scrollRef}
            style={{ width: '100%' }}
            contentContainerStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            showsVerticalScrollIndicator={false}>
            <Image source={clicked.img} style={[styles.image, { width: 250, height: 250 }]}></Image>
            <Text style={{ fontSize: 28, fontWeight: '100', color: '#333', letterSpacing: 7 }}>{clicked.name}</Text>
            <View style={{
                width: '50%', borderBottomColor: '#e7e7e7', borderBottomWidth: 1, marginTop: 10, marginBottom: 40
            }}></View>
            {
                Object.entries(clicked.elements).map(([key, value]) =>
                    <View style={styles.element}>
                        <Text style={styles.elementHeader}> {key} </Text>
                        <View style={{ borderBottomColor: '#f0f0f0', borderBottomWidth: 1, width: 100, marginBottom: 10 }}></View>
                        <Text style={styles.elementContent}> {value} </Text>

                    </View>)
            }
        </ScrollView>
    }
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View>
                <FlatList
                    horizontal
                    // pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={{ borderBottomColor: '#f0f7f0', borderBottomWidth: 1, marginTop: 15, marginHorizontal: 15, backgroundColor: '#e7e7e7', padding: 10, borderRadius: 15 }}
                    data={data}
                    renderItem={({ item, index }) =>
                        <Pressable key={index} onPress={() => { handlePress(index) }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                            <Image source={item.img} style={[styles.image, { width: 60, height: 60 }]}></Image>
                            {/* <Text style={{ textAlign: 'center', color: '#666' }}>{item.name}</Text> */}
                        </Pressable>}
                />
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                {clicked ? renderContent() :
                    <View>
                        <Text style={{ color: '#666', fontSize: 16 }}> Kliknij element, aby zobaczyć szczegóły</Text>
                    </View>}
            </View>
        </View>
    )
}

export default Symbolika

const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 130,
        resizeMode: 'contain'
    },
    element: {
        marginVertical: 10,
        width: '70%',
        display: 'flex',
        alignItems: 'center'
    },
    elementHeader: {
        textAlign: 'center',
        color: '#666',
        fontSize: 24,
        fontWeight: '200',
        letterSpacing: 4,
        marginBottom: 5
    },
    elementContent: {
        textAlign: 'center',
        color: '#888',
        fontSize: 16
    }
})