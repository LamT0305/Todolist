import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
const TodoItems = ({id, title, completed}) => {
  const [iscompleted, setCompleted] = useState(completed);

  return (
    <View style={styles.container}>
      <View>
        <CheckBox
          value={iscompleted}
          onValueChange={!iscompleted}
        />
        <Text>{title}</Text>
      </View>
      <TouchableOpacity>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default TodoItems;
