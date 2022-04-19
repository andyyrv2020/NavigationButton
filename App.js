import { StatusBar } from 'expo-status-bar';
import React from 'react';
import EventList from './EventList';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <EventList />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
