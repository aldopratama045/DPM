import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [aboutModalVisible, setAboutModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Bahasa Indonesia');

  const toggleNotifications = () =>
    setNotificationsEnabled((previousState) => !previousState);
  const toggleDarkMode = () =>
    setDarkModeEnabled((previousState) => !previousState);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setLanguageModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
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
        <TouchableOpacity style={styles.settingRow} onPress={() => setLanguageModalVisible(true)}>
          <View style={styles.rowLeft}>
            <Ionicons name="language" size={24} color="#888" />
            <Text style={styles.settingText}>BAHASA: {selectedLanguage}</Text>
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
        <TouchableOpacity style={styles.settingRow} onPress={() => setAboutModalVisible(true)}>
          <View style={styles.rowLeft}>
            <Ionicons name="information-circle" size={24} color="#888" />
            <Text style={styles.settingText}>TENTANG APLIKASI</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Language Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={languageModalVisible}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.languageModalContent}>
            <Text style={styles.modalTitle}>Pilih Bahasa</Text>
            <TouchableOpacity
              style={[styles.languageOption, selectedLanguage === 'Bahasa Indonesia' && styles.selectedLanguage]}
              onPress={() => handleLanguageSelect('Bahasa Indonesia')}
            >
              <Text style={styles.languageText}>Bahasa Indonesia</Text>
              {selectedLanguage === 'Bahasa Indonesia' && (
                <Ionicons name="checkmark" size={24} color="white" />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.languageOption, selectedLanguage === 'English' && styles.selectedLanguage]}
              onPress={() => handleLanguageSelect('English')}
            >
              <Text style={styles.languageText}>English</Text>
              {selectedLanguage === 'English' && (
                <Ionicons name="checkmark" size={24} color="white" />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setLanguageModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* About App Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={aboutModalVisible}
        onRequestClose={() => setAboutModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.aboutContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setAboutModalVisible(false)}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.aboutTitle}>Tentang Aplikasi</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Text style={styles.aboutText}>
                UIR News adalah aplikasi berita terkini yang dirancang untuk memberikan informasi cepat, akurat, dan terpercaya kepada pengguna. Aplikasi ini menyajikan berbagai kategori berita seperti politik, ekonomi, teknologi, olahraga, hiburan, dan pendidikan, sehingga pengguna dapat menemukan informasi sesuai minat mereka.
              </Text>
              <Text style={styles.aboutText}>
                Salah satu keunggulan UIR News adalah fitur notifikasi real-time yang memungkinkan pengguna mendapatkan berita terbaru langsung di genggaman mereka. Aplikasi ini juga dilengkapi dengan sistem personalisasi.
              </Text>
              <Text style={styles.aboutText}>
                Melalui UIR News, pengguna tidak hanya menjadi konsumen informasi, tetapi juga dapat berpartisipasi dalam membagikan berita penting ke media sosial atau platform komunikasi lainnya.
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    top: 50,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  languageModalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  languageOption: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedLanguage: {
    backgroundColor: '#4caf50',
  },
  languageText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4caf50',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  aboutContent: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default ProfileScreen;