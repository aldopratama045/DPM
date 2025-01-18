import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/UniversitasNews.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.notificationIcon}>
        <Image
          source={require('../assets/notifikasi.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
    backgroundColor: '#006400',
  },
  logo: {
    width: 120,
    height: 60,
  },
  notificationIcon: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Header;