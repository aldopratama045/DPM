import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Pastikan ini diinstal

const CalendarScreen = ({ navigation }) => {
  const calendarImages = [
    require('../assets/calendar1.png'),
    require('../assets/calendar2.png'),
    require('../assets/calendar3.png'),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.header}>Kalender Akademik</Text>
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
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16, // Jarak horizontal sesuai permintaan
    paddingTop: 50, // Jarak dari atas layar
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1, // Jarak antara header dan konten
  },
  header: {
    fontSize: 24, // Ukuran teks header
    fontWeight: 'bold', // Teks tebal
    color: '#333', // Warna teks
    marginLeft: 12, // Jarak teks dari ikon
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
