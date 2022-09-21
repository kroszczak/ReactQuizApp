import { Text, StyleSheet, View, FlatList, ActivityIndicator, Image, TextInput, Pressable } from 'react-native'
import React, { useState, useEffect } from "react";
// import Icon from 'react-native-vector-icons/Ionicons'

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

				<View style={styles.textContainer}>
					<Text style={styles.QuizListItemText}>{item.title}</Text>
					<Text style={styles.QuizListItemText}>
						{/* <Icon name="flame-sharp" size={24} color="#f84" /> */}
					</Text>
				</View>
			</Pressable>
		);
	}

	useEffect(() => getData(), [])

	return (
		<View style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
			{isLoading ? <ActivityIndicator style={{ flex: 1 }} /> : (
				<FlatList
					columnWrapperStyle={{ justifyContent: 'space-evenly' }}
					data={data}
					numColumns={2}
					renderItem={renderItem}
				/>)}
		</View>
	)
}


const styles = StyleSheet.create({
	QuizListItem: {
		flex: 1,
		maxWidth: '44%',
		borderWidth: 1,
		borderColor: '#f1f1f1',
		borderRadius: 15,
		marginVertical: 10,

	},

	QuizListImage: {
		height: 110,
		resizeMode: "stretch",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,

	},

	textContainer: {
		backgroundColor: '#454545',
		borderBottomEndRadius: 15,
		borderBottomLeftRadius: 15,
		height: 100,
		zIndex: 0,
		padding: 12,
		justifyContent: 'space-between'
	},

	QuizListItemText: {
		color: '#dfdfdf',
		fontSize: 14,
	},


})