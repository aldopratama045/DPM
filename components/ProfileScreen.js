import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const [aboutModalVisible, setAboutModalVisible] = useState(false);

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
        {/* About App */}
        <TouchableOpacity style={styles.settingRow} onPress={() => setAboutModalVisible(true)}>
          <View style={styles.rowLeft}>
            <Ionicons name="information-circle" size={24} color="#888" />
            <Text style={styles.settingText}>TENTANG APLIKASI</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* About App Modal - Fullscreen */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={aboutModalVisible}
        onRequestClose={() => setAboutModalVisible(false)}
      >
        <View style={styles.fullScreenContainer}>
          <View style={styles.modalHeaderFullScreen}>
            <TouchableOpacity onPress={() => setAboutModalVisible(false)}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.aboutTitle}>Tentang Aplikasi</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollViewContentFullScreen}>
            <Text style={styles.aboutTextFullScreen}>
              UIR News adalah aplikasi berita terkini yang dirancang untuk memberikan informasi cepat, akurat, dan terpercaya kepada pengguna. Aplikasi ini menyajikan berbagai kategori berita seperti politik, ekonomi, teknologi, olahraga, hiburan, dan pendidikan, sehingga pengguna dapat menemukan informasi sesuai minat mereka.
            </Text>
            <Text style={styles.aboutTextFullScreen}>
              Salah satu keunggulan UIR News adalah fitur notifikasi real-time yang memungkinkan pengguna mendapatkan berita terbaru langsung di genggaman mereka. Aplikasi ini juga dilengkapi dengan sistem personalisasi.
            </Text>
            <Text style={styles.aboutTextFullScreen}>
              Melalui UIR News, pengguna tidak hanya menjadi konsumen informasi, tetapi juga dapat berpartisipasi dalam membagikan berita penting ke media sosial atau platform komunikasi lainnya.
            </Text>
          </ScrollView>
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
  fullScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  modalHeaderFullScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  scrollViewContentFullScreen: {
    paddingBottom: 20,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  aboutTextFullScreen: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default ProfileScreen;