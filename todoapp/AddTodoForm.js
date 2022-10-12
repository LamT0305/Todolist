import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';

const AddTodoForm = () => {
  const addTodoSchema = yup.object().shape({
    addTodo: yup.string().required('You need to enter your todo list!'),
  });

  return (
    <View>
      <Formik
        initialValues={{addTodo: ''}}
        onSubmit={value => {
          console.log(value.addTodo);
        }}
        validationSchema={addTodoSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.container}>
            <TextInput
              placeholder="Enter your todos"
              placeholderTextColor={'#f99'}
              onChangeText={handleChange('addTodo')}
              onBlur={handleBlur('addTodo')}
              value={values.addTodo}
              autoCapitalize={false}
              style={styles.inputText}
            />
            <View style={styles.btn}>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={{color:'white'}}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    marginTop:10
  },
  btn: {
    borderLeftWidth: 1,
    paddingHorizontal:12,
    paddingVertical:15,
    borderRadius:12,
    backgroundColor:'blue',
    marginLeft:5
  },
  inputText: {
    width:'80%',
    borderWidth:1,
    borderRadius:12
  },
});
export default AddTodoForm;
