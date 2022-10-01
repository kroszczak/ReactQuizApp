import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import IconEntypo from 'react-native-vector-icons/Entypo'

const Settings = () => {

    const [DarkEnabled, setDark] = useState(false);
    const [SoundEnabled, setSound] = useState(true);
    const toggleDark = () => setDark(previousState => !previousState);
    const toggleSound = () => setSound(previousState => !previousState);


    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ margin: 35, backgroundColor: '#fff', borderWidth: 0, borderColor: '#888', borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#dfdfdf', paddingHorizontal: 10, paddingVertical: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: '#333', fontSize: 17, letterSpacing: 1 }}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#67B441" }}
                        thumbColor={DarkEnabled ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleDark}
                        value={DarkEnabled}
                    />
                </View>

                <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: '#333', fontSize: 17, letterSpacing: 1 }}>Enable Sound</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#67B441" }}
                        thumbColor={SoundEnabled ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSound}
                        value={SoundEnabled}
                    />
                </View>
            </View>

            <View>
                <View style={{ height: 50, alignSelf: 'center', position: 'relative', backgroundColor: '#ccc', borderRadius: 30 }}>
                    <View style={{ height: 60, width: 60, backgroundColor: '#83c662', borderRadius: 50, position: 'absolute', top: -5, left: 0 }} />
                    <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'space-evenly' }} >
                        <Text style={{ paddingHorizontal: 10 }}> ZHP </Text>
                        <Text style={{ paddingHorizontal: 10 }}> ZHR </Text>
                        <Text style={{ paddingHorizontal: 10 }}> SHK </Text>
                    </View>
                </View>
                <View style={{ width: 150, height: 50, backgroundColor: 'darkorange', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: '10%', borderRadius: 15 }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Wymaz Dane</Text>
                </View>
            </View>




        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});