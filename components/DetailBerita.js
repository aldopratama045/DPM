import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DetailBerita = ({ route, navigation }) => {
  const { news } = route.params;

  return (
    <View style={{ flex: 1 }}>
      {/* Header dengan Tombol Kembali */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail Berita</Text>
      </View>

      {/* Konten Berita */}
      <ScrollView style={styles.container}>
        <Image source={news.image} style={styles.image} />
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.date}>Tanggal: {news.date}</Text>
        <Text style={styles.author}>Penulis: {news.author}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <Text style={styles.content}>{news.content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 3, // Memberikan bayangan untuk header
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 10,
  },
  author: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    margin: 10,
  },
  content: {
    fontSize: 16,
    color: '#333',
    margin: 10,
    lineHeight: 24,
  },
});

export default DetailBerita;
