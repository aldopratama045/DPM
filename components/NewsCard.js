import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NewsCard = ({ news, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={news.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{news.title}</Text>
      <Text style={styles.cardDescription}>{news.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default NewsCard;
