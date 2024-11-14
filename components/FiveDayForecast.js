import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const FiveDayForecast = ({ city }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    fetchForecastData();
  }, [city]);

  const fetchForecastData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          q: city,
          appid: 'c82f50e17eca78e7cfe6ba01cc46b96f',
          units: 'metric',
        },
      });
      const dailyData = response.data.list.filter((reading) => reading.dt_txt.includes("12:00:00"));
      setForecastData(dailyData.slice(0, 5));
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  const renderForecastItem = ({ item }) => {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });
    const temperature = Math.round(item.main.temp);
    const weatherDescription = item.weather[0].description;
    const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

    return (
      <View style={styles.card} className=" flex flex-row">
        <Text style={styles.dayText}>{day}</Text>
        <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />
        <Text style={styles.tempText}>{temperature}°C</Text>
        <Text style={styles.descriptionText}>{weatherDescription}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>5-Day Forecast</Text>
      <FlatList
        data={forecastData}
        renderItem={renderForecastItem}
        keyExtractor={(item) => item.dt.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContent: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#342564',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginHorizontal: 8,
    width: 120,
  },
  dayText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  weatherIcon: {
    width: 64,
    height: 64,
    marginVertical: 8,
  },
  tempText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  descriptionText: {
    fontSize: 14,
    color: '#d4d4d4',
    textAlign: 'center',
  },
});

export default FiveDayForecast;
