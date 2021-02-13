import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Colors } from '../../constants/colors';

interface ListItemProps {
	children: any;
	id: number;
	onDeleteTodo: (id: number) => void;
}

const ListItem = (props: ListItemProps) => {
	const [isFinished, setIsFinished] = useState<boolean>(false);

	const onCheckTodo = () => {
		setIsFinished(!isFinished);
	};

	return (
		<TouchableOpacity onPress={onCheckTodo}>
			<View
				style={[
					styles.listItem,
					isFinished ? styles.finishedTodo : styles.unfinishedTodo,
				]}
			>
				<View style={styles.todo}>
					<Text
						style={[
							styles.todoText,
							isFinished
								? styles.finishedTodoText
								: styles.unfinishedTodoText,
						]}
					>
						{props.children}
					</Text>
				</View>
				<View style={styles.buttons}>
					<Button
						onPress={() => props.onDeleteTodo(props.id)}
						title='Delete'
						color={Colors.darkBrown}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	listItem: {
		width: '95%',
		alignSelf: 'center',
		padding: 10,
		borderRadius: 5,
		marginBottom: 15,
		marginHorizontal: 10,
		shadowColor: Colors.darkBrown,
		shadowOffset: { width: 5, height: 5 },
		shadowOpacity: 0.8,
		shadowRadius: 0,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	todo: {
		flexBasis: '75%',
	},
	todoText: {
		fontSize: 20,
	},
	buttons: {
		flexBasis: '25%',
	},
	finishedTodo: {
		backgroundColor: Colors.lightBrown,
	},
	unfinishedTodo: {
		backgroundColor: Colors.beige,
	},
	finishedTodoText: {
		color: Colors.darkBrown,
	},
	unfinishedTodoText: {
		color: Colors.darkGreen,
	},
});
