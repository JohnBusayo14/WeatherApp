import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import icon library
import { useNavigation } from '@react-navigation/native';

const WeatherDisplay = ({ cityName, weather, uniformSuggestion }) => {
  const navigation = useNavigation();
  const temperature = Math.round(weather.main.temp);
  const tempMax = Math.round(weather.main.temp_max);
  const tempMin = Math.round(weather.main.temp_min);
  const description = weather.weather[0].description;
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <View style={styles.weatherContainer}>
      {/* Task Icon (Top Left) */}
      <TouchableOpacity style={styles.taskButton} onPress={() => navigation.navigate('task')}>
        <FontAwesome name="tasks" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Timetable Icon (Top Right) */}
      <TouchableOpacity style={styles.timetableButton} onPress={() => navigation.navigate('timetable')}>
        <FontAwesome name="calendar" size={24} color="#fff" />
      </TouchableOpacity>

      {/* City Name */}
      <Text style={styles.cityName}>{cityName}</Text>

      {/* Weather Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Weather Icon */}
      <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />

      {/* Uniform Suggestion */}
      <View style={styles.uniformContainer}>
        {uniformSuggestion === 'sweater' ? (
          <View style={styles.uniform}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/150/jumper.png' }}
              style={styles.uniformIcon}
            />
            <Text style={styles.uniformText}>Wear a sweater to school!</Text>
          </View>
        ) : (
          <View style={styles.uniform}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/150/t-shirt.png' }}
              style={styles.uniformIcon}
            />
            <Text style={styles.uniformText}>Normal uniform is fine!</Text>
          </View>
        )}
      </View>

      {/* Temperature and Range */}
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.tempRange}>
        High: {tempMax}°C | Low: {tempMin}°C
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    backgroundColor: '#342564',
    borderRadius: 20,
    paddingTop: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    position: 'relative',
    height: '70%', // Make component 80% of screen height
  },
  taskButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ff6347',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timetableButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#008080',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 40, // Add top margin to position text below icons
  },
  temperature: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    color: 'white',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginVertical: 0,
  },
  uniformContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  uniform: {
    alignItems: 'center',
  },
  uniformIcon: {
    width: 350,
    height: 350,
  },
  uniformText: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  tempRange: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
  },
});

export default WeatherDisplay;
