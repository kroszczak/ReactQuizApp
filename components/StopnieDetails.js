import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const StopnieDetails = ({ route, navigation }) => {
	const { data } = route.params;
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1, backgroundColor: '#333', paddingVertical: 45 }}>
				{/* <Image source={data.data.img} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} /> */}
			</View>
			<View style={{ flex: 2 }}>
				<Text>{data.mname}</Text>
				<Text>{data.fname}</Text>
			</View>
		</View>
	)
}

export default StopnieDetails

const styles = StyleSheet.create({})