import { StyleSheet, Text, View, FlatList, Image, Pressable, Animated, ScrollView } from 'react-native'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useRef, useState } from 'react'
import IconIon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import OgniskaDetalis from './OgniskaDetalis';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator();

ogniskaData = [
	{
		id: 0,
		desc: 'ognisko długie',
		description: `Ognisko rozpala się w rowku wykopanym dla ochrony przed wiatrem. Można je także przygotować na ziemi, przy użyciu dwóch świeżych kłód utrzymujących żar w jednym miejscu. Kłody muszą mieć średnicę co najmniej 15 cm (im grubsze, tym lepiej) i być ułożone tak, aby można było stawiać na nich naczynia do gotowania. Pod kłody można podłożyć dwa patyki o średnicy 2,5 cm, aby zapewnić lepszy dopływ powietrza do ognia.`,
		img: require('../img/ogniska_dlugo.jpg')
	},
	{
		id: 1,
		desc: 'gwiazda',
		description: `Przydatne, jeśli zależy nam na oszczędnym zużyciu opału lub na niewielkim ogniu. Ogień pali się pośrodku gwiazdy, stosownie do potrzeb podsuwa się kłody do środka. Wszystkie grubsze patyki układamy promieniście, tak żeby stykały się w centrum. Tam pali się ogień. Gdy płomień staje się zbyt wielki nieco odsuwamy gałęzie na zewnątrz. Gdy przygasa przeciwnie podsuwamy je do centrum, nawet by zachodziły tam jedna na drugą. Przy takim ognisku najlepiej spisuje się opał z twardego drewna drzew liściastych. Można je odciągnąć na bok, jeśli chcemy gotować nad żarem. Ognisko takie jest szczególnie warte polecenia, gdy gotujemy coś podczas wielkich upałów, bo nie wydziela za dużo ciepła.`,
		img: require('../img/ogniska_gwiazda.jpg')
	},
	{
		id: 2,
		desc: 'klucz',
		description: `Należy wykopać w ziemi dołek w kształcie dziurki od klucza, odpowiednio usytuowanej względem wiatru.Ognisko to ma podobne zalety jak ognisko długotrwałe.`,
		img: require('../img/ogniska_klucz.jpg')
	},
	{
		id: 3,
		desc: 'ognisko nocne',
		description: `Ognisko to umożliwia sen przy ogniu bez niebezpieczeństwa, że płonące kłody stoczą się na śpiącego. Należy położyć dwie duże świeże kłody na ognisku w taki sposób, że będą chronić ciebie i twoje schronienie w miarę, jak ognisko będzie się wypalać. Zwróć uwagę na położenie ściany odbijającej ciepło.`,
		img: require('../img/ogniska_nocne.jpg')
	},
	{
		id: 4,
		desc: 'pagoda',
		description: `Pierwsze dwie, trzy warstwy układamy jak przy budowie piramidy. Każde kolejne „piętro" jest układane nie tylko poprzecznie na brzegach (dwa kawałki drewna oparte o poprzednie), ale na całej powierzchni „piętra".`,
		img: require('../img/ogniska_pagoda.jpg')
	},
	{
		id: 5,
		desc: 'piramida',
		description: `Budowana jest podobnie jak studnia z tą różnicą, że każde „piętro" układamy z coraz krótszych kłód (pełnych warstw drewna, a nie z ażurowej konstrukcji). Takie ognisko pali się długo i można je wykorzystać jako ogień na całą noc.`,
		img: require('../img/ogniska_piramida.jpg')
	},
	{
		id: 6,
		desc: 'stoek',
		description: `O wbity w środek pal opiera się ze wszystkich stron drobniejsze patyki, pamiętając jednak, by od strony nawietrznej zapewnić przestrzeń, przez którą dopływać będzie tlen. Ten typ ogniska zużywa wiele opału, jest jednak doskonały do ogrzewania się i suszenia obuwia oraz odzienia. Uwaga! Ognisko takie, prędzej czy później zawala się (po przepaleniu owego pala)
`,
		img: require('../img/ogniska_stozek.jpg')
	},
	{
		id: 7,
		desc: 'studnia',
		description: `Sam rdzeń stosu pozostaje bez zmian, czyli musi być tam coś, co się zapali (byle nie benzyna, papiery). Natomiast boki układamy z równej długości polan. Zapewnia dużo ciepła i światła dzięki dużemu dopływowi powietrza. Dlatego może ono służyć do gotowania i sygnalizacji. Polana okłada się tak, by tworzyły ażurową konstrukcję, podobną do kraty, która zapewnia dostęp tlenu i wytwarza efekt komina, przez co ogień bucha z wielką werwą.`,
		img: require('../img/ogniska_studnia.jpg')
	},
	{
		id: 8,
		desc: 'ognisko syberyjskie',
		description: `Z trzech stron ustawia się dość wysokie i szczelne ścianki z grubszych kłód, zostawiając czwartą stronę otwartą tę, od której będzie wejście do naszego miejsca odpoczynku. Wysokie ściany są po to, aby wiatr nie rozwiewał płomieni i nie zabierał ciepła. Z tyłu stawiamy ścianę z kłód lub mocujemy płachtę osłaniającą od wiatru. Ogień z płonących kłód daje wiele energii cieplnej w jej odmianie promienistej, więc ogrzewa te jedynie strony przedmiotów i ludzi, które do niego zostały skierowane. Spora część owego ciepła leci w przestrzeń na próżno. Aby tę przeciekającą energię pochwycić i dogrzać również te partie naszego ciała, które skierowane są w stronę przeciwną od ogniska`,
		img: require('../img/ogniska_syberyjskie.jpg')
	},
	{
		id: 9,
		desc: 'ognisko T',
		description: `Najpierw kopiemy dwa dołki, które połączone przypominają literę T. W dołku będącym górną belką litery T zapalamy ognisko, zaś do części dolnej zbieramy żar, nad którym możemy przypiekać mięsiwo lub postawić garnek, by ogrzać jego zawartość. Ognisko zapalone w dołku jest mniej wrażliwe na silny wiatr. Oczywiście trzeba mieć saperkę, by wykopać dołek w przesuszonej i ubitej ziemi. W sypkim piasku z powodzeniem wystarczą nam do kopania dłonie i nóż, którym wytniemy wpierw dań. Nie ma sensu tworzenie takiego ogniska, gdy jesteśmy w drodze i tylko na chwilę robimy popas. Jest to ognisko dogodne do gotowania. Ogień utrzymuje się w górnej części litery T, skąd pobiera się żar do gotowania w części dolnej.`,
		img: require('../img/ogniska_T.jpg')
	},
	{
		id: 10,
		desc: 'tratwa',
		description: `Bardzo użyteczny model do wilgotnego drewna. Pożyteczny również przy mokrym lub zaśnieżonym podłożu. Należy ułożyć na podłożu kadrałowe „łoże" z większych kawałków drewna. Następną warstwę układać poprzecznie. Na wierzchu buduje się piramidę. Wraz ze spaleniem żar przechodzi niżej osuszając i rozpalając dwie zasadnicze warstwy tratwy.`,
		img: require('../img/ogniska_tratwa.jpg')
	},
]

// const RenderItem = ({ item }) => {
// 	const fadeAnim = useRef(new Animated.Value(0)).current;
// 	const [opened, setOpened] = useState(false)
// 	const open = () => {
// 		Animated.timing(fadeAnim, {
// 			useNativeDriver: false,
// 			toValue: 1000,
// 			duration: 450
// 		}).start();
// 	};

// 	const close = () => {
// 		Animated.timing(fadeAnim, {
// 			useNativeDriver: false,
// 			toValue: 0,
// 			duration: 300
// 		}).start();
// 	};

// 	const handlePress = () => {
// 		setOpened(!opened)
// 		return opened ? open() : close()

// 	}

// 	return (
// 		<Pressable onPress={() => { handlePress() }} style={{ borderRadius: 5, borderWidth: 1, borderColor: '#e7e7e7', overflow: 'hidden', marginHorizontal: 20, marginVertical: 5 }}>
// 			<Animated.View style={{
// 				minHeight: fadeAnim.interpolate({
// 					inputRange: [0, 1000],
// 					outputRange: [50, 120]
// 				}), flexDirection: opened ? 'row' : 'row', alignItems: 'center'
// 			}}>

// 				<Animated.Image style={[styles.fireImg, {
// 					width: fadeAnim.interpolate({
// 						inputRange: [0, 1000],
// 						outputRange: ['25%', '49%']
// 					})
// 				}]} source={item.img}></Animated.Image>

// 				<View style={[styles.textView]}>
// 					<Text style={styles.fireText}>
// 						{item.desc}
// 					</Text>
// 				</View>

// 			</Animated.View>

// 			<Animated.View style={[
// 				styles.fadingContainer, { maxHeight: fadeAnim, marginHorizontal: 20 }]}>
// 				<Text style={{ maxWidth: '100%', position: 'absolute', marginBottom: 10, top: 10, fontSize: 17, lineHeight: 32, color: '#666', fontSize: 17 }}>{item.description}</Text>
// 				<Text style={{ maxWidth: '100%', opacity: 0, marginBottom: 10, fontSize: 17, lineHeight: 32 }}>{item.description}</Text>
// 			</Animated.View>
// 		</Pressable>)
// }

const OgniskaMain = () => {
	const [active, setActive] = useState(null)
	const handlePress = (e) => {
		setActive(e)

	}

	return (
		<View style={{ flex: 1 }}>
			{active != null ?
				<View style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 9, backgroundColor: 'rgba(0,0,0,0.5)' }}>
					<View style={{ position: 'static', display: 'flex', width: '96%', marginHorizontal: '2%', height: '95%', marginVertical: '5%', backgroundColor: '#fff', borderRadius: 15, zIndex: 10, alignItems: 'center', justifyContent: 'flex-start' }}>
						<Pressable onPress={() => handlePress(null)} style={{ position: 'absolute', zIndex: 12, right: 10, top: 10 }}>
							<Icon name={'cross'} size={32} color={'#666'}></Icon>
						</Pressable>
						<View style={{ width: '80%', margin: 20, height: 200, marginBottom: 25 }}>
							<Image source={ogniskaData[active].img} style={{ resizeMode: 'stretch', width: '100%', height: '100%' }}></Image>
						</View>
						<ScrollView
							contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}
							showsVerticalScrollIndicator={false}
						>
							<View style={{ marginBottom: 100, marginHorizontal: 30 }}>
								<Text style={[styles.elementHeader, { marginBottom: 20 }]}>{ogniskaData[active].desc}</Text>
								<Text style={styles.elementContent}>{ogniskaData[active].description}</Text>
							</View>

						</ScrollView>
					</View>
				</View> : null}
			<LinearGradient colors={['rgba(255, 255,255, 1)', 'rgba(255, 255,255, 1)', 'rgba(255, 255,255, 1)', 'rgba(255, 255,255, 1)', 'rgba(103, 180, 65, 1)']} style={{ position: 'absolute', flex: 1, width: '100%', height: '100%' }}></LinearGradient>
			<FlatList
				columnWrapperStyle={{ justifyContent: 'space-evenly' }}
				style={{ flex: 1 }}
				numColumns={2}
				data={ogniskaData}
				renderItem={({ item }) =>
					<Pressable onPress={() => { handlePress(item.id) }} style={{ backgroundColor: '#fff', width: '43%', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginVertical: 10, borderColor: '#eee', borderRadius: 8, padding: 15, shadowColor: '#000', shadowOffset: { height: 2 }, shadowOpacity: 0.23, shadowRadius: 2, elevation: 6 }}>
						<Image style={styles.fireImg} source={item.img}></Image>
						<Text style={{ color: '#333', letterSpacing: 2 }}>{item.desc}</Text>
					</Pressable>}
				keyExtractor={item => item.id}
			/>
		</View>
	)
}

const Ogniska = () => {
	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {

						if (route.name === 'Ogniska') {
							return <IconIon name={'bonfire'} size={size} color={color} />;
						} else if (route.name === 'Technika') {
							return <Entypo name={'tools'} size={size} color={color} />


						}

						// You can return any component that you like here!

					},
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray',
				})}>
				<Tab.Screen name="Ogniska" component={OgniskaMain} options={{ headerShown: false }} />
				<Tab.Screen name="Technika" component={OgniskaDetalis} options={{ headerShown: false }} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}


export default Ogniska

const styles = StyleSheet.create({

	fireImg: {
		width: '100%',
		flex: 1,
		resizeMode: 'contain'
	},

	textView: {
		flex: 1,
		paddingVertical: 20,
		paddingHorizontal: 35
	},

	fireText: {
		color: '#505050',
		letterSpacing: 3,
		fontSize: 16
	},
	elementHeader: {
		textAlign: 'center',
		color: '#666',
		fontSize: 32,
		fontWeight: '200',
		letterSpacing: 8,
		marginBottom: 5
	},
	elementContent: {
		fontWeight: '200',
		textAlign: 'center',
		color: '#888',
		fontSize: 20,
		lineHeight: 24,
	}
})