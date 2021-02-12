import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import TodoList from './components/TodoList/TodoList';
import { Colors } from './constants/colors';

export default function App() {
	// return (
	// 	<View style={styles.container}>
	// 		<Text>Hello, world!</Text>
	// 		<StatusBar style='auto' />
	// 	</View>
	// );
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle='light-content' />
			<TodoList />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.darkGreen,
	},
});
