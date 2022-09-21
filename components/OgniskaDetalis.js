import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'





const OgniskaDetalis = ({ route, navigation }) => {

	data = [
		{
			id: 0,
			stats: [4, 3, 2, 2],
			name: 'wierzba',
			img: require('./../img/wierzba.jpg')
		},
		{
			id: 1,
			stats: [2, 1, 4, 1],
			name: 'wierzba',
			img: require('./../img/swierk.jpg')
		},
		{
			id: 1,
			stats: [3, 1, 2, 1],
			name: 'kasztan',
			img: require('./../img/kasztan.jpg')
		},
	]
	dostuff = ({ item }) => {
		range = ['green', 'forestgreen', 'orange', 'red']
		categories = ['ciepło', 'ilość żaru', 'płonień', 'czas']
		return (
			<View style={{ maxWidth: '50%', flex: 1, margin: 5, borderRadius: 15, marginVertical: 20, padding: 0, borderWidth: 1, borderColor: '#ccc', overflow: 'hidden' }}>
				<Image source={item.img} style={styles.tile_img} />
				<View style={{ flex: 4, paddingLeft: 10, paddingVertical: 10 }}>
					{item.stats.map((value, index) =>
						<View key={index} style={{ marginVertical: 3 }}>
							<Text style={{ color: '#333', fontSize: 15, letterSpacing: 2, marginBottom: 2 }}>{categories[index]}</Text>
							<View style={styles.bar}>
								<View style={[styles.bar_fill, { backgroundColor: range[value - 1], width: `${25 * value}%` }]}></View>
							</View>
						</View>)}
				</View>

			</View>
		)
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<FlatList
				data={data}
				renderItem={dostuff}
				keyExtractor={item => item.id}
				numColumns={2}
			/>
		</View>
	)
}

export default OgniskaDetalis

const styles = StyleSheet.create({
	bar: {
		width: '90%',
		height: 18,
		backgroundColor: '#ddd',
		borderRadius: 15,
		position: 'relative',
		overflow: 'hidden',
		borderWidth: 2,
		borderColor: '#ddd'

	},
	bar_fill: {
		position: 'absolute',
		height: '100%',
		borderRadius: 15
	},

	tile_img: {
		alignSelf: 'center',
		resizeMode: 'contain',
		padding: 0,
		flex: 4,
		height: 100,
		borderWidth: 0,
		borderColor: '#ccc'
	}

})