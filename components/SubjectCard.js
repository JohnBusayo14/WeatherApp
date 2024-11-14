import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SubjectCard = ({ subject, onRemove }) => {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.subjectName}>{subject.name}</Text>
        <Text style={styles.subjectTime}>{subject.time}</Text>
      </View>

      <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  infoContainer: {
    flex: 1,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subjectTime: {
    fontSize: 14,
    color: '#555',
  },
  deleteButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default SubjectCard;
