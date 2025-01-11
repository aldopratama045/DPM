import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Bahasa Indonesia');

  const languages = [
    { label: 'Bahasa Indonesia' },
    { label: 'Bahasa Inggris' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Language</Text>
      {languages.map((language, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.languageOption,
            selectedLanguage === language.label && styles.selectedOption,
          ]}
          onPress={() => setSelectedLanguage(language.label)}
        >
          <Text style={styles.languageText}>{language.label}</Text>
          {selectedLanguage === language.label && (
            <Text style={styles.checkmark}>✔️</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  languageOption: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#00bcd4',
    borderColor: '#00bcd4',
  },
  languageText: {
    fontSize: 16,
  },
  checkmark: {
    fontSize: 16,
    color: '#fff',
  },
});

export default LanguageScreen;
