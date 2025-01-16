import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Button, 
  TextInput, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  Linking, 
  Pressable, 
  Alert, 
  StyleSheet 
} from 'react-native';

const App = () => {

  const [inputText, setInputText] = useState('');

  const [selectedOption, setSelectedOption] = useState(''); // State untuk menyimpan pilihan

  const options = ['Opsi 1', 'Opsi 2', 'Opsi 3'];

  return (
    <ScrollView style={styles.container}>
      {/* Judul Aplikasi */}
      <Text style={styles.title}>Aplikasi React Native</Text>
      
      {/* Teks Deskripsi */}
      <Text style={styles.description}>Contoh komponen React Native dasar dalam satu halaman.</Text>
      
      {/* Input Teks */}
      <TextInput 
        placeholder="Ketik sesuatu..." 
        style={styles.input} 
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      
      {/* Tombol */}
      <View style={styles.buttonContainer}>
        <Button 
          title="Klik Saya" 
          onPress={() => Alert.alert('Teks yang Dimasukkan:', inputText)} 
          color="#4CAF50"
        />
      </View>

      {/* Gambar */}
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />

      {/* TouchableOpacity */}
      <Text style={styles.sectionTitle}>Contoh TouchableOpacity:</Text>
      <TouchableOpacity onPress={() => Alert.alert('TouchableOpacity ditekan!')}>
        <Text style={styles.linkText}>Klik dengan TouchableOpacity</Text>
      </TouchableOpacity>

      {/* Linking */}
      <Text style={styles.sectionTitle}>Contoh Linking ke URL:</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://reactnative.dev')}>
        <Text style={styles.linkText}>Buka Dokumentasi React Native</Text>
      </TouchableOpacity>

      {/* Pressable */}
      <Text style={styles.sectionTitle}>Contoh Pressable:</Text>
      <Pressable onPress={() => Alert.alert('Pressable ditekan!')}>
        <Text style={styles.linkText}>Klik dengan Pressable</Text>
      </Pressable>

      {/* Card */}
      <Text style={styles.sectionTitle}>Contoh Card:</Text>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Judul Card</Text>
          <Text style={styles.cardDescription}>
            Ini adalah contoh deskripsi untuk sebuah Card. Kamu bisa menambahkan informasi lebih lanjut di sini.
          </Text>
          <TouchableOpacity onPress={() => Alert.alert('Tombol Card ditekan!')} style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Lihat Detail</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Grid Layout */}
      <Text style={styles.sectionTitle}>Contoh Grid Layout:</Text>
      <View style={styles.gridContainer}>
        {/* Baris Pertama */}
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>1</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>2</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>3</Text>
        </View>
        
        {/* Baris Kedua */}
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>4</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>5</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>6</Text>
        </View>
      </View>

      {/* Radio Button */}
      <Text style={styles.sectionTitle}>Contoh Radio Button</Text>
      
      {options.map((option, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.radioContainer} 
          onPress={() => setSelectedOption(option)}
        >
          <View style={styles.radioCircle}>
            {selectedOption === option && <View style={styles.radioSelected} />}
          </View>
          <Text style={styles.radioText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity 
        style={styles.submitButton} 
        onPress={() => Alert.alert('Kamu memilih:', selectedOption)}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
    color: '#444',
  },
  linkText: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginBottom: 10,
  },

  // Styles untuk Card
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 20,
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  cardButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  // Grid Container
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  gridItem: {
    width: '30%',
    height: 100,
    backgroundColor: '#4CAF50',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  gridText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
  },
  radioText: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 40,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
