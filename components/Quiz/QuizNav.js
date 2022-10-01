import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizChoose from './QuizChoose';
import QuizInfo from './QuizInfo';
import MainDrawer from '../Drawer';


const Stack = createNativeStackNavigator();

const QuizNavigator = ({ navigation, route }) => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{ headerStyle: { backgroundColor: "#67b441" } }}>
                <Stack.Screen name="Lista" component={MainDrawer} options={{ headerShown: false }} />
                <Stack.Screen name="Quiz" component={QuizInfo} options={{
                    headerTitle: props => <Text {...props} />
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default QuizNavigator