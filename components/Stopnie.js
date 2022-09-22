import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
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
	krzyz1 = require('./../img/krzyze/krzyz_1.png')
	krzyz2 = require('./../img/krzyze/krzyz_2.png')
	krzyz3 = require('./../img/krzyze/krzyz_3.png')
	krzyz4 = require('./../img/krzyze/krzyz_4.png')




	stopnie = [
		{
			icon: ['minus'],
			mname: 'młodzik',
			fname: 'ochotniczka',
			icon_size: 25,
			data: {
				img: null
			}
		},
		{
			icon: ['equals'],
			mname: 'wywiadowca',
			fname: 'tropicielka',
			icon_size: 25,
			data: {
				img: krzyz1
			}
		},
		{
			icon: ['angle-up'],
			mname: 'odkrywca',
			fname: 'pionierka',
			icon_size: 25,
			data: {
				img: krzyz1
			}
		},
		{
			icon: ['angle-double-up'],
			mname: 'ćwik',
			fname: 'samarytanka',
			icon_size: 25,
			data: {
				img: krzyz2
			}
		},
		{
			icon: ['star'],
			mname: 'Harcerz Orli',
			fname: "Hercerka Orla",
			icon_size: 20,
			data: {
				img: krzyz3
			}
		},
		{
			icon: ['star', 'star'],
			mname: 'Hercerz Rzeczypospolitej',
			fname: 'Hercerka Rzeczypospolitej',
			icon_size: 20,
			data: {
				img: krzyz4
			}

		}]


	return (
		<View style={{ backgroundColor: '#fff', flex: 1, paddingTop: '3%' }}>

			{
				stopnie.map((e) => {
					return (
						<Pressable style={styles.item} onPress={() => { navigation.navigate('Details', { data: e }) }}>
							<View style={styles.icon}>
								{e.icon.map((i) => <Icon name={i} size={e.icon_size} color='#555' style={styles.icon}></Icon>)}
							</View>
							<View>
								<Text style={styles.itemText}>{e.mname}</Text>
								<Text style={styles.itemText}>{e.fname}</Text>
							</View>

							<Icon name='angle-right' size={20} color="#888" style={{ position: 'absolute', right: 20 }} />

						</Pressable>
					)
				})
			}
			<View style={{ width: '80%', alignSelf: 'center', marginTop: '10%' }}>
				<Text style={{ fontSize: 18, color: '#ccc', textAlign: 'center' }}>Organizację harcerską mozesz zmienić w ustawieniach </Text>
			</View>

		</View>
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
		borderRadius: 15,
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
	}
})