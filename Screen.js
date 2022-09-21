import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainDrawer from './components/Drawer'
import QuizNavigator from './components/Quiz/QuizNav';

const App = () =>
<NavigationContainer>
	<QuizNavigator/>
</NavigationContainer>

export default App