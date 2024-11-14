import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import FiveDayForecast from '../components/FiveDayForecast';
import WeatherDisplay from '../components/WeatherDisplay';

const API_KEY = 'c82f50e17eca78e7cfe6ba01cc46b96f';










const Weather = () => {
  const [city, setCity] = useState('San Francisco');
  const [weather, setWeather] = useState(null);
  const [uniformSuggestion, setUniformSuggestion] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const temp = response.data.main.temp;
      setWeather(response.data);

      // Suggest uniform based on temperature
      setUniformSuggestion(temp < 20 ? 'sweater' : 'normal');
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* City Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={(text) => setCity(text)}
        onSubmitEditing={fetchWeather}
      />

      {/* Weather Info Display */}
      {weather ? (
        <WeatherDisplay cityName={city} weather={weather} uniformSuggestion={uniformSuggestion} />
      ) : (
        <Text style={styles.loadingText}>Loading forecast...</Text>
      )}

      {/* 5-Day Forecast */}
      <FiveDayForecast city={city} />
    </ScrollView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#deedfb',
    paddingTop: 40,
    padding: 20,
  },
  input: {
    width: '90%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  loadingText: {
    color: '#00796b',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Weather;
