import React from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import StopnieDetails from './StopnieDetails';

const StopnieStack = () => {
	Stack = createNativeStackNavigator();
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator
				screenOptions={{ headerStyle: { backgroundColor: "#67b441" } }}>
				<Stack.Screen name="Stopnie" component={Stopnie} options={{ headerShown: false }} />
				<Stack.Screen name="Details" component={StopnieDetails} options={{
					headerTitle: props => <Text {...props} />
				}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const Stopnie = ({ route, navigation }) => {

	stopnie = [
		{
			icon: ['minus'],
			img: require('../img/symbolika/krzyż.png'),
			mname: 'młodzik',
			fname: 'ochotniczka',
			icon_size: 25,
			data: {
				img: null
			}
		},
		{
			icon: ['equals'],
			img: require('../img/symbolika/krzyż.png'),
			mname: 'wywiadowca',
			fname: 'tropicielka',
			icon_size: 25,
			data: {
				img: krzyz1
			}
		},
		{
			icon: ['angle-up'],
			img: require('../img/symbolika/krzyż.png'),
			mname: 'odkrywca',
			fname: 'pionierka',
			icon_size: 25,
			data: {
				img: krzyz1
			}
		},
		{
			icon: ['angle-double-up'],
			img: require('../img/symbolika/krzyż.png'),
			mname: 'ćwik',
			fname: 'samarytanka',
			icon_size: 25,
			data: {
				img: krzyz2
			}
		},
		{
			icon: ['star'],
			img: require('../img/symbolika/krzyż.png'),
			mname: 'Harcerz Orli',
			fname: "Hercerka Orla",
			icon_size: 20,
			data: {
				img: krzyz3
			}
		},
		{
			icon: ['star', 'star'],
			img: require('../img/symbolika/krzyż.png'),
			mname: 'Hercerz RP',
			fname: 'Hercerka RP',
			icon_size: 20,
			data: {
				img: krzyz4
			}
		},
		{
			icon: ['star', 'star'],
			img: require('../img/symbolika/krzyż.png'),
			mname: 'gwiazdka zuchowa',
			fname: '',
			icon_size: 20,
			data: {
				img: krzyz4
			}
		},
		{
			icon: ['star', 'star'],
			img: require('../img/symbolika/krzyż.png'),
			mname: 'gwiazdka zuchowa',
			fname: '',
			icon_size: 20,
			data: {
				img: krzyz4
			}
		},
		{
			icon: ['star', 'star'],
			img: require('../img/symbolika/krzyż.png'),
			mname: 'gwiazdka zuchowa',
			fname: '',
			icon_size: 20,
			data: {
				img: krzyz4
			}
		},
		{
			icon: ['star', 'star'],
			img: require('../img/symbolika/krzyż.png'),
			mname: 'pagon wędrowniczy',
			fname: '',
			icon_size: 20,
			data: {
				img: krzyz4
			}
		},
		{
			icon: ['star', 'star'],
			img: require('../img/symbolika/krzyż.png'),
			mname: 'próba harcerza',
			fname: '',
			icon_size: 20,
			data: {
				img: krzyz4
			}
		}]


	return (
		// <View style={{ backgroundColor: '#fff', flex: 1, paddingTop: '3%' }}>

		// 	{
		// 		stopnie.map((e) => {
		// 			return (
		// 				<Pressable style={styles.item} onPress={() => { navigation.navigate('Details', { data: e }) }}>
		// 					<View style={styles.icon}>
		// 						{e.icon.map((i) => <Icon name={i} size={e.icon_size} color='#555' style={styles.icon}></Icon>)}
		// 					</View>
		// 					<View>
		// 						<Text style={styles.itemText}>{e.mname}</Text>
		// 						<Text style={styles.itemText}>{e.fname}</Text>
		// 					</View>

		// 					<Icon name='angle-right' size={20} color="#888" style={{ position: 'absolute', right: 20 }} />

		// 				</Pressable>
		// 			)
		// 		})
		// 	}

		// 	<View style={{ width: '80%', alignSelf: 'center', marginTop: '10%' }}>
		// 		<Text style={{ fontSize: 18, color: '#ccc', textAlign: 'center' }}>Organizację harcerską mozesz zmienić w ustawieniach </Text>
		// 	</View>

		// </View>
		<View style={{ backgroundColor: '#fff', flex: 1 }}>
			<FlatList
				columnWrapperStyle={{ justifyContent: 'space-evenly' }}
				numColumns={2}
				data={stopnie}
				renderItem={({ item, index }) =>
					<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '45%', height: 100, marginVertical: '2%', padding: 10, backgroundColor: '#ccc', borderRadius: 5 }}>
						<View style={{ flex: 3, display: 'flex', justifyContent: 'flex-end', }}>
							<Text style={styles.tileText}>{item.mname}</Text>
							<Text style={styles.tileText}>{item.fname}</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Image source={item.img} style={{ resizeMode: 'contain', width: '100%', height: '100%' }}></Image>
						</View>
					</View>}
			/>
		</View >
	)
}

export default StopnieStack

const styles = StyleSheet.create({

	item: {
		backgroundColor: '#fff',
		alignItems: 'center',
		// justifyContent: 'center',
		flexDirection: 'row',
		borderColor: '#ddd',
		borderRadius: 0,
		borderWidth: 1,
		height: 55,
		marginVertical: '2.5%',
		marginHorizontal: 10,
		padding: 5,
	},

	icon: {
		marginRight: 10,
		marginLeft: 5,
		width: 40
	},

	itemText: {
		color: '#666',
		fontSize: 16,
		letterSpacing: 2
	},
	tileText: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#333'

	}
})