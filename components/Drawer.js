import { Text, View, Pressable } from "react-native"
import React, { useState } from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconAD from 'react-native-vector-icons/AntDesign'
import IconIon from 'react-native-vector-icons/Ionicons'
import Prawo from './Prawo'
import About from "./About"
// import Pomoc from './Pomoc'
// import Start from './Start' 
// import Stopnie from "./Stopnie"
import Settings from './Settings'
import QuizChoose from "./Quiz/QuizChoose"
import Ogniska from "./Ogniska"
import Symbolika from './Symbolika'
import StopnieStack from "./Stopnie"

const Dummy = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Zupa</Text>
		</View>
	);
}


const Drawer = createDrawerNavigator();

const MainDrawer = () => {

	return (
		<Drawer.Navigator
			screenOptions={{
				drawerType: "front",
				headerStyle: { backgroundColor: "#67b441" }
			}}>

			{/* maybe map that? */}

			<Drawer.Screen
				name="Quizy"
				component={QuizChoose}
				options={({ route }) => ({
					drawerIcon: ({ focused, size }) =>
						<View style={{ width: '10%', alignItems: 'center' }}>
							<IconAD name="questioncircle" size={size} color={focused ? '#7cc' : '#ccc'} />
						</View>,
					headerTitle: props => <Text {...props} />,
				})}
				headerShown={true}
			/>

			<Drawer.Screen
				name="prawo i przyrzeczenie"
				component={Prawo}
				options={{
					drawerIcon: ({ focused, size }) =>
						<View style={{ width: '10%', alignItems: 'center' }}>
							<IconFA5 name="rocket" size={size} color={focused ? '#7cc' : '#ccc'} />
						</View>
				}} />

			<Drawer.Screen
				name="ogniska"
				component={Ogniska}
				options={{
					drawerIcon: ({ focused, size }) =>
						<View style={{ width: '10%', alignItems: 'center' }}>
							<IconIon name="bonfire" size={size} color={focused ? '#7cc' : '#ccc'} />
						</View>
				}} />

			<Drawer.Screen
				name="stopnie"
				component={StopnieStack}
				options={{
					drawerIcon: ({ focused, size }) => (
						<View style={{ width: '10%', alignItems: 'center' }}>
							<IconFA5 name='angle-double-up' size={size} color={focused ? '#7cc' : '#ccc'} />
						</View>)
				}} />

			<Drawer.Screen
				name="symbolika"
				component={Symbolika}
				options={{
					drawerIcon: ({ focused, size }) =>
						<View style={{ width: '10%', alignItems: 'center' }}>
							<IconFA5 name="rocket" size={size} color={focused ? '#7cc' : '#ccc'} />
						</View>
				}} />

			{/* <Drawer.Screen
				name="pierwsza pomoc"
				component={Dummy}
				options={{
					drawerIcon: ({ focused, size }) =>
						<View style={{ width: '10%', alignItems: 'center' }}>
							<IconFA5 name="plus" size={size} color={focused ? '#7cc' : '#ccc'} />
						</View>
				}} /> */}

			{/* <Drawer.Screen
				name="historia"
				component={Dummy}
				options={{
					drawerIcon: ({ focused, size }) =>
						<View style={{ width: '10%', alignItems: 'center' }}>
							<IconFA5 name="quote-left" size={size} color={focused ? '#7cc' : '#ccc'} />
						</View>
				}} /> */}

			<Drawer.Screen
				name="o nas"
				component={About}
				options={{
					drawerIcon: ({ focused, size }) =>
						<View style={{ width: '10%', alignItems: 'center' }}>
							<IconFA5 name="info" size={size} color={focused ? '#7cc' : '#ccc'} />
						</View>
				}} />

			{/* <Drawer.Screen
				name="ustawienia"
				component={Settings}
				options={{
					drawerIcon: ({ focused, size }) =>
						<View style={{ width: '10%', alignItems: 'center' }}>
							<IconIon name="settings-sharp" size={size} color={focused ? '#7cc' : '#ccc'} />
						</View>
				}} /> */}

		</Drawer.Navigator>
	)
}

export default MainDrawer