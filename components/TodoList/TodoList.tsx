import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ListRenderItem,
	TextInput,
	NativeSyntheticEvent,
	TextInputSubmitEditingEventData,
} from 'react-native';

import List from './List';
import ListItem from './ListItem';
import { Todo } from '../../types/todo';
import { Colors } from '../../constants/colors';

const TodoList = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [newTodo, setNewTodo] = useState<string>('');

	const renderTodo: ListRenderItem<Todo> = ({ item }) => (
		<ListItem id={item.id} onDeleteTodo={onDeleteTodo}>
			{item.title}
		</ListItem>
	);

	const onSubmit = (
		e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	) => {
		const input = e.nativeEvent.text;

		if (!input.trim()) {
			setNewTodo('');
			return;
		}

		const newTodo = { title: input, id: todos.length };
		setTodos([...todos, newTodo]);
		setNewTodo('');
	};

	const onDeleteTodo = (id: number) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);
		todos.splice(todoIndex, 1);
		setTodos([...todos]);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Princh's TodoList</Text>
			<TextInput
				style={styles.textInput}
				onChangeText={(newTodo) => setNewTodo(newTodo)}
				value={newTodo}
				onSubmitEditing={onSubmit}
				placeholder={'Add a Todo'}
				placeholderTextColor={Colors.lightGreen}
			/>
			<List data={todos} renderItem={renderTodo} />
		</View>
	);
};

export default TodoList;

const styles = StyleSheet.create({
	header: {
		fontWeight: 'bold',
		fontSize: 40,
		fontStyle: 'italic',
		marginTop: 20,
		color: Colors.darkBrown,
	},
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		backgroundColor: Colors.darkGreen,
	},
	textInput: {
		height: 50,
		width: '90%',
		borderColor: 'transparent',
		borderBottomColor: Colors.green,
		borderWidth: 1,
		fontSize: 30,
		textAlign: 'center',
		marginTop: 30,
		color: Colors.darkBrown,
	},
});
