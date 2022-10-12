import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TodoItems from './TodoItems';

const TodoList = () => {
  const todos = [
    {id: 1, title: 'todo1', completed: false},
    {id: 2, title: 'todo1', completed: true},
    {id: 3, title: 'todo1', completed: false},
    {id: 4, title: 'todo1', completed: true},
  ];
  return (
    <View style={styles.container}>
      {todos.map(list => (
        <TodoItems id={list.id} title={list.title} completed={list.completed} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
export default TodoList;
