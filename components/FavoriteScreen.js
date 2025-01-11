import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const FavoriteScreen = () => {
  const navigation = useNavigation();

  const [favoriteNews, setFavoriteNews] = useState([
    {
      id: '1',
      title: 'UIR Raih Akreditasi A',
      description: 'Prestasi luar biasa dari Perpustakaan Universitas Islam Riau.',
      image: require('../assets/gambarNews1.jpg'),
      date: '3 Desember 2024',
    },
    {
      id: '2',
      title: 'Dosen UIR Gelar Sosialisasi',
      description: 'Integrasi sains dan nilai Islam di Pekanbaru.',
      image: require('../assets/gambarNews2.jpg'),
      date: '5 Desember 2024',
    },
  ]);

  const removeFavorite = (id) => {
    Alert.alert(
      'Hapus Favorit',
      'Apakah Anda yakin ingin menghapus berita ini dari favorit?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () => {
            setFavoriteNews((prevNews) => prevNews.filter((news) => news.id !== id));
          },
        },
      ]
    );
  };

  const renderNewsCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeFavorite(item.id)}
        >
          <Text style={styles.removeButtonText}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.header}>Berita Favorit</Text>
      </View>
      {favoriteNews.length > 0 ? (
        <FlatList
          data={favoriteNews}
          renderItem={renderNewsCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.emptyText}>Belum ada berita favorit.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 12,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: '#aaa',
    marginBottom: 12,
  },
  removeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#ff5757',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 40,
  },
});

export default FavoriteScreen;
