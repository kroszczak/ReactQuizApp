import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const StopnieDetails = ({ route, navigation }) => {
	const { data } = route.params;
	console.log(data)
	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<View style={{ flex: 1, paddingVertical: 45 }}>
				<Image source={data.img} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
			</View>
			<View style={{ flex: 2, width: '90%', marginHorizontal: '5%' }}>
				<View>
					<Text style={styles.elementHeader}>{data.fname}</Text>
					<Text style={styles.elementHeader}>{data.mname}</Text>
					<Text style={styles.elementContent}> {data.content}</Text>
				</View>
			</View>
		</View>
	)
}

export default StopnieDetails

const styles = StyleSheet.create({
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