// src/screens/HomeScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainLayout from '../layouts/MainLayout'; // Import the MainLayout component
import ToDoList from '../components/ToDoList'; // Import ToDoList
import ToDoForm from '../components/ToDoForm'; // Import ToDoForm

const HomeScreen = ({ navigation }) => {
  // State to manage tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // Function to add a task
  const addTask = (task) => {
    if (!task.trim()) return; // Ensure task is not empty
    if (tasks.includes(task)) {
      alert(`${task} already exists!`);
    } else {
      setTasks([...tasks, task]); // Add new task to the list
    }
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <ToDoList tasks={tasks} /> {/* Display the task list */}
        <ToDoForm addTask={addTask} /> {/* Add new tasks */}

        {/* Replace Button with TouchableOpacity for underlined text */}
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.link}>Go to About</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
  link: {
    color: 'blue', // Color of the link
    textDecorationLine: 'underline', // Underline the text
    fontSize: 16, // Font size for the link
    textAlign: 'center', // Center align the link
    marginTop: 10, // Adjust spacing if needed
  },
});

export default HomeScreen;



