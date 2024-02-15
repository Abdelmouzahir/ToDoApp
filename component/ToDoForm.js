import React, { useState } from 'react';

import {
    View,
    TextInput,
    Button
  } from 'react-native';

import { styles } from '../App';

function ToDoForm( {addTask} ) {
  
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    addTask(taskText); // Add the task
    setTaskText(''); // Clear the input field
  };
  return (
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={text => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
  );
};

export default ToDoForm;