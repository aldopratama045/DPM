import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search news here"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 8,
  },
});

export default SearchBar;
