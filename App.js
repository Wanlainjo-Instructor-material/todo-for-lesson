import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, FlatList, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

let { width, height } = Dimensions.get('window');

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView style={styles.container}>
        <FlatList
          data={todos}
          style={styles.containerView}
          renderItem={({ item }) => (
            <View style={styles.todoContainer}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={item => item}
        />
        {/* <View style={styles.containerView}>
          <View style={styles.todoContainer}>
            <Text>Todo List</Text>
          </View>
        </View> */}
        <View style={styles.inputContainer}>
          <TextInput placeholder='Enter Todo' style={styles.input} value={input} onChangeText={setInput} />
          <TouchableOpacity onPress={addTodo} style={styles.addTodoButton}>
            <Text style={styles.addTodoButtonText}>Add Todo</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },

  containerView: {
    width: width,
    flex: 1,
    // flexGrow: 1,
  },

  inputContainer: {
    width: width,
    paddingHorizontal: 10,
    // height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },

  input: {
    backgroundColor: 'white',
    width: width - 130,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },

  addTodoButton: {
    backgroundColor: '#4169E1',
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addTodoButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  todoContainer: {
    width: width - 20,
    height: 50,
    backgroundColor: '#4169E110',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRightWidth: 5,
    borderRightColor: '#4169E1',
  }
});
