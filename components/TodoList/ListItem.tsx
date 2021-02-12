import React, { ReactElement } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants/colors';

interface ListItemProps {
	children: any;
	id: number;
	onDeleteTodo: (id: number) => void;
}

const ListItem = (props: ListItemProps) => {
	return (
		<View style={styles.listItem}>
			<View style={styles.todo}>
				<Text style={styles.todoText}>{props.children}</Text>
			</View>
			<View style={styles.buttons}>
				<Button
					onPress={() => props.onDeleteTodo(props.id)}
					title='Delete'
					color={Colors.darkBrown}
				/>
			</View>
		</View>
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
		backgroundColor: Colors.beige,
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
		color: Colors.darkGreen,
	},
	buttons: {
		flexBasis: '25%',
	},
});
