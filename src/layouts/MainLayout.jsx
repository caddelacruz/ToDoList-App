// src/layouts/MainLayout.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {children} {/* This will render the screen content */}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite', // Background for the main content
  },
  content: {
    flex: 1,
    marginTop: 60, // Matches Header height
    marginBottom: 60, // Matches Footer height
  },
});

export default MainLayout;

