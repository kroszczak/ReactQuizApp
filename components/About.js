import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
	return (
		<View style={styles.container}>
			{/* <Text style={styles.header}>O nas</Text> */}
			<View style={styles.wrapper}>
				<Text style={styles.text}>Projekt powstał jako rozwinięcie strony Harc-Quiz.pl oraz przy wsparciu zespołu ds. IT GK ZHP{"\n"}
					Aplikacja została stworzona jako część próby na sprawność "Webmaster"
				</Text>
			</View>
			<View style={styles.wrapper}>
				<Text style={styles.text}>
					Naszym celem jest dostarczanie przydatnych oraz oprcowanych materiałów do nauki wiedzy harcerskiej oraz przekazanie jej w jak najbardziej przyjazny sposób. {'\n\n'}
					Mamy nadzieję, że przygotowane materiały będą pomocne w nauce oraz prowadzeniu zbiórek
				</Text>
			</View>
			<View style={styles.wrapper}>
				<Text style={styles.header}>Kontakt:</Text>
				<Text style={[styles.text, { color: "#777" }]}>
					Pomysły, zgłoszenia błędów oraz propozycje współpracy: {"\n"}
					email: harcquiz@mail.pl {"\n"}
					telefon: 999 999 999{"\n\n"}
					Twórca Harc-Quiz {"\n"}
					Pawel Cyngot {"\n"}
					email@emial.com {"\n"}
					999 999 999 {"\n\n"}
					Twórca aplikacji {"\n"}
					Kacper Roszczak {"\n"}
					email@emial.com {"\n"}
					999 999 999</Text>
			</View>
		</View>
	)
}

export default About

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginHorizontal: 15
	},
	wrapper: {
		padding: 15,
		backgroundColor: '#e7e7e7',
		borderRadius: 15,
		marginBottom: 20

	},
	header: {
		fontSize: 24,
		fontWeight: '200',
		color: '#777',
		marginBottom: 10
	},
	text: {
		color: '#727272',
		fontSize: 16,
		textAlign: 'justify'
	}
})