import React from 'react';
import { StyleSheet, View, FlatList, ListRenderItem } from 'react-native';

import { Todo } from '../../types/todo';

interface ListProps<T> {
	data: T[];
	renderItem: ListRenderItem<T>;
}

const List = (props: ListProps<Todo>) => {
	return (
		<View style={styles.list}>
			<FlatList
				data={props.data}
				renderItem={props.renderItem}
				keyExtractor={(todo) => todo.id.toString()}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default List;

const styles = StyleSheet.create({
	list: {
		flex: 1,
		width: '90%',
		marginTop: 30,
		display: 'flex',
	},
});
