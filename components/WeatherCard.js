import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WeatherCard = ({ weather }) => {
  return (
    <View style={styles.card}>
      <Icon name="sun-o" size={50} color="#ffb300" style={styles.icon} />
      <Text style={styles.title}>{weather.name}</Text>
      <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
      <Text style={styles.description}>{weather.weather[0].description}</Text>
    </View>
  );
};

const App = () => {
  const weatherData = {
    name: "Cuaca",
    main: { temp: 28 },
    weather: [{ description: "Sangat Cerah", icon: "01d" }],
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>UIRA NEWS</Text>
        <Text style={styles.subHeader}>News Pendidikan Cuaca</Text>
      </View>
      <WeatherCard weather={weatherData} />
      <Text style={styles.todayTitle}>Cuaca Hari Ini</Text>
      <ScrollView horizontal style={styles.todayContainer}>
        {Array.from({ length: 5 }, (_, index) => (
          <View key={index} style={styles.todayCard}>
            <Text style={styles.time}>{`${13 + index}:00`}</Text>
            <Icon name="cloud" size={30} color="#4fc3f7" style={styles.iconSmall} />
            <Text style={styles.tempSmall}>{25 + index}°</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#4fc3f7',
    paddingBottom: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0277bd',
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0277bd',
  },
  temp: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff8f00',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  icon: {
    marginBottom: 10,
  },
  todayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0277bd',
    marginBottom: 10,
  },
  todayContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  todayCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  tempSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff8f00',
    marginTop: 5,
  },
  iconSmall: {
    marginTop: 10,
  },
});

export default App;
