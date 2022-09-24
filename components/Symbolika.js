import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

data = [
	{
		name: "krzyż harcerski",
		img: require('../img/symbolika/krzyż.png')
	},
	{
		name: "lilijka harcerska",
		img: require('../img/symbolika/krzyż.png')
	},
	{
		name: "Koniczynka WAGGGS",
		img: require('../img/symbolika/koniczynka.png')
	},
	{
		name: "WOSM",
		img: require('../img/symbolika/WOSM.png')
	},
	{
		name: "znaczek zuchowy",
		img: require('../img/symbolika/znaczek.jpg')
	},
	{
		name: "naramiennik wędrowniczy",
		img: require('../img/symbolika/krzyż.png')
	},
	{
		name: "elementy munduru",
		img: require('../img/symbolika/krzyż.png')
	},
]
const Symbolika = () => {
	const [clicked, setClicked] = useState(null)
	return (
		<View style={{ backgroundColor: '#fff', flex: 1 }}>
			<View>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ borderBottomColor: '#e7e7e7', borderBottomWidth: 1, paddingBottom: 15, marginTop: 25 }}
					data={data}
					renderItem={({ item, index }) =>
						<Pressable onPress={() => { setClicked(data[index]); console.log(index) }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
							<Image source={item.img} style={{ width: 130, height: 130, marginBottom: 10, resizeMode: 'contain' }}></Image>
							<Text style={{ textAlign: 'center', color: '#333' }}>{item.name}</Text>
						</Pressable>}
				/>
			</View>
			<View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
				{clicked ? <Image source={clicked.img} style={{ width: 130, height: 130, marginBottom: 10, resizeMode: 'contain' }}></Image> :
					<Text style={{ color: '#666', fontSize: 16 }}> Kliknij element, aby zobaczyć szczegóły</Text>}
			</View>
		</View>
	)
}

export default Symbolika

const styles = StyleSheet.create({})