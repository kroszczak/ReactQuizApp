import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import QuizFetch from './QuizFetch';

const QuizInfo = ({ route, navigation }) => {
	const { quiz } = route.params;
	const [started, setStarted] = useState(false);

	if (!started) {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<View style={{ flex: 5, shadowColor: '#000', marginHorizontal: 25, marginTop: 35, shadowOffset: { height: 7, width: -7 }, shadowOpacity: 0.14, shadowRadius: 3, elevation: 10 }}>
					<Image
						style={{ flex: 1, borderRadius: 15 }}
						source={{
							uri: `https://5szczep.pl/images/${quiz.src}`
						}}
					/>
				</View>

				<View style={{ flex: 6, marginBottom: 30, justifyContent: 'space-between', backgroundColor: '#fff', borderWidth: 1, borderColor: '#f7f7f7', marginHorizontal: 25, marginTop: 35, borderRadius: 15, shadowColor: '#000', shadowOffset: { height: 7, width: -5 }, shadowOpacity: 0.2, shadowRadius: 5, elevation: 15 }}>
					<View style={{ alignItems: 'center' }}>
						<Text style={styles.question_text}>{quiz.title}</Text>
						<Text style={styles.question_text}>{quiz.opis}</Text>
						<Text>autor: {quiz.autor}</Text>
						<Text>rozegrano: {quiz.graj}</Text>
						<Text>ilość pytań: {quiz.ilo}</Text>
						<Text>Trudność: {quiz.poziom}</Text>
					</View>
					<Pressable style={{ alignSelf: 'center', backgroundColor: '#67B441', padding: 10, borderRadius: 10 }} onPress={() => setStarted(true)}>
						<Text style={{ color: '#eee', fontWeight: 'bold', fontSize: 18 }}>Start</Text>
					</Pressable>
				</View>

				<View style={{ flex: 1, paddingLeft: 20, paddingTop: 15, borderTopColor: '#ccc', borderTopWidth: 1 }}>
					<Text>utworzono: {quiz.data}</Text>
					<Text>zaktualizowano: {quiz.aktualizacja}</Text>
				</View>
			</View>

		)
	} else {
		return (
			<QuizFetch id={quiz.id} nav={navigation}></QuizFetch>
		)
	}
}

export default QuizInfo

const styles = StyleSheet.create({
	question_text: {
		fontSize: 20,
		padding: 15,
		color: '#4f4f4f'
	},
})