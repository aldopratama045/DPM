import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const CalendarScreen = ({ navigation }) => {
  const calendarImages = [
    require('../assets/calendar1.png'),
    require('../assets/calendar2.png'),
    require('../assets/calendar3.png'),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Kalender Akademik 2024/2025</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {calendarImages.map((image, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={image} style={styles.image} resizeMode="contain" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 60,
    maxHeight: 80, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  backButton: {
    marginRight: 10,
    padding: 5, 
  },
  headerText: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#333',
    flex: 1, 
    textAlign: 'center',
  },
  scrollContainer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  imageWrapper: {
    width: '95%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 400,
  },
});

export default CalendarScreen;
