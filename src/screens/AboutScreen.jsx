import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout'; // Import the MainLayout component

const AboutScreen = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About the App</Text>
        <Text style={styles.description}>
          This To-Do List App helps you stay organized and manage your tasks easily. 
          You can add tasks, mark them as complete, edit, or delete them anytime. 
          With its simple design, staying on top of your to-do list has never been easier!
        </Text>
        
        {/* Footer content */}
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>Catherine</Text>
          <Text style={styles.footer}>Date: {new Date().toLocaleDateString()}</Text>
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // This ensures the content fills the screen
    justifyContent: 'center', // Center content vertically (above footer)
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 150, // Adjust this to control the spacing before the footer
  },
  footerContainer: {
    position: 'absolute', // Fix footer content at the bottom
    bottom: 10, // Push footer content to the bottom of the screen
    left: 0,
    right: 0,
    alignItems: 'center', // Center footer text horizontally
  },
  footer: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});

export default AboutScreen;




