import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryNavigation = ({ selectedCategory, onCategoryPress }) => {
  const categories = ['News', 'Pendidikan', 'Prakiraan Cuaca']; // Tambahkan kategori baru

  return (
    <View style={styles.categoryContainer}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={
            selectedCategory === category
              ? styles.activeCategoryButton
              : styles.categoryButton
          }
          onPress={() => onCategoryPress(category)}
        >
          <Text
            style={
              selectedCategory === category
                ? styles.activeCategoryText
                : styles.categoryText
            }
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  categoryButton: {
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  activeCategoryButton: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#006400',
  },
  categoryText: {
    fontSize: 16,
    color: '#555',
  },
  activeCategoryText: {
    fontSize: 16,
    color: '#006400',
    fontWeight: 'bold',
  },
});

export default CategoryNavigation;
