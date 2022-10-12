import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AddTodoForm from './todoapp/AddTodoForm'
import TodoList from './todoapp/TodoList'
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Todo list</Text>
      <AddTodoForm/>
      <TodoList/>
    </View>
  )
}
const styles = StyleSheet.create({
  headerText:{
    fontSize:20,
    fontWeight:'500',
    color:'black'
  },
  container:{
    margin:20
  }
})
export default App