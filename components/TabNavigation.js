import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const TabNavigation = ({ navigation }) => {
  const tabs = [
    { icon: require('../assets/home.png'), label: 'Home', screen: 'Home' },
    { icon: require('../assets/kalender.png'), label: 'Calendar', screen: 'Calendar' },
    { icon: require('../assets/favorite.png'), label: 'Favorite', screen: 'Favorite' },
    { icon: require('../assets/profile.png'), label: 'Profile', screen: 'Profile' },
  ];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tabButton}
          onPress={() => navigation.navigate(tab.screen)} 
        >
          <Image source={tab.icon} style={styles.tabIcon} />
          <Text style={styles.tabText}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabButton: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabText: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
});

export default TabNavigation;
