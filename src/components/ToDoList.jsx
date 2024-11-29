// src/components/ToDoList.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <View style={styles.list}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  task: {
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default ToDoList;
