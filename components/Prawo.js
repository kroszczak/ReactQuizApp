import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";

export default function Prawo() {

    let prawo = [
        'Harcerz sumiennie spełnia swoje obowiązki wynikające z Przyrzeczenia Harcerskiego',
        'Na słowie harcerza polegaj jak na Zawiszy',
        'Harcerz jest pożyteczny i niesie pomoc bliźnim',
        'Harcerz w każdym widzi bliźniego, a za brata uważa każdego innego harcerza',
        'Harcerz postępuje po rycersku',
        'Harcerz miłuje przyrodę i stara się ją poznać',
        'Harcerz jest karny i posłuszny rodzicom i wszystkim swoim przełożonym',
        'Harcerz jest zawsze pogodny',
        'Harcerz jest oszczędny i ofiarny',
        'Harcerz pracuje nad sobą, jest czysty w myśli, mowie i uczynkach; jest wolny od nałogów'
    ]

    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                style={{ paddingTop: 10 }}
                data={prawo}
                renderItem={({ item, index }) =>
                    <View key={index} style={styles.itemContainer}>
                        <Text style={[styles.number]}>{index + 1}</Text>
                        <View style={{ borderBottomWidth: 1, borderColor: '#ddd', marginVertical: 3, width: 75 }} />
                        <Text style={styles.item}>{item}</Text>
                    </View>} />

            <View style={styles.tile}>
                <Text style={styles.tileHeader}>Przyrzeczenie</Text>
                <View style={styles.underline} />
                <Text style={styles.tileText}>
                    Przyrzekam całym swoim zyciem pełnić słuzbę Bogu i Polsce, nieść chętną pomoc bliźnim i być posłusznym Prawu Harcerskiemu
                </Text>
            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        flex: 1
    },

    tileHeader: {
        width: '100%',
        fontSize: 20,
        letterSpacing: 2,
        color: '#888',
        marginBottom: 3
    },

    underline: {
        borderBottomWidth: 1,
        borderBottomColor: '#dfdfdf',
        width: '20%',
        marginBottom: 10
    },

    itemContainer: {
        alignItems: 'center',
        marginBottom: 25,
    },

    item: {
        fontSize: 18,
        color: '#999',
        width: '75%',
        textAlign: 'center'
    },

    number: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#999',
    },

    tile: {
        borderTopWidth: 1,
        borderColor: '#f9f9f9',
        padding: 25,
        paddingTop: 10
    },

    tileText: {
        fontSize: 15,
        color: '#777'
    }

})
