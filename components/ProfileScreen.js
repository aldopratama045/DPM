import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Pastikan Anda menginstal @expo/vector-icons

const ProfileScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () =>
    setNotificationsEnabled((previousState) => !previousState);
  const toggleDarkMode = () =>
    setDarkModeEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Navigasi kembali
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>My Profile</Text>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.avatar} />
        <Text style={styles.name}>Nino Rizqi Anandra</Text>
        <Text style={styles.email}>Ninokiks2@gmail.com</Text>
      </View>

      {/* Settings Section */}
      <View style={styles.settingsContainer}>
        {/* Notifications */}
        <View style={styles.settingRow}>
          <View style={styles.rowLeft}>
            <MaterialIcons name="notifications" size={24} color="#4caf50" />
            <Text style={styles.settingText}>NOTIFIKASI</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: '#ccc', true: '#4caf50' }}
            thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>

        {/* Language */}
        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.rowLeft}>
            <Ionicons name="language" size={24} color="#888" />
            <Text style={styles.settingText}>BAHASA</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>

        {/* Dark Mode */}
        <View style={styles.settingRow}>
          <View style={styles.rowLeft}>
            <Ionicons name="moon" size={24} color="#ffeb3b" />
            <Text style={styles.settingText}>MODE GELAP</Text>
          </View>
          <Switch
            value={darkModeEnabled}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#ccc', true: '#ffeb3b' }}
            thumbColor={darkModeEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>

        {/* About App */}
        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.rowLeft}>
            <Ionicons name="information-circle" size={24} color="#888" />
            <Text style={styles.settingText}>TENTANG APLIKASI</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
  settingsContainer: {
    flex: 1,
    marginTop: 10,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ProfileScreen;
