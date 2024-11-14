import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { groupSubjectsByDay } from '../components/groupSubjectsByDay';
import SubjectCard from '../components/SubjectCard';
import { Ionicons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';

const TimeTableScreen = ({ navigation }) => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Math', time: '09:00', day: 'Monday', icon: 'ios-calculator' },
    { id: 2, name: 'Science', time: '10:00', day: 'Tuesday', icon: 'ios-planet' },
  ]);

  const [newSubject, setNewSubject] = useState({
    name: '',
    time: '',
    day: '',
  });

  const [showForm, setShowForm] = useState(false);  // Track form visibility

  const handleAddSubject = () => {
    if (newSubject.name && newSubject.time && newSubject.day) {
      setSubjects([...subjects, { ...newSubject, id: Date.now(), icon: 'ios-book' }]);
      setNewSubject({ name: '', time: '', day: '' });
      setShowForm(false); // Hide form after adding subject
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleRemoveSubject = (id) => {
    setSubjects(subjects.filter(subject => subject.id !== id));
  };

  const groupedSubjects = groupSubjectsByDay(subjects);

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}> 
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="black" style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.title}>Weekly Time Table</Text>
      </View>

      {/* Add Button - Icon to Show Input Form */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowForm(!showForm)} // Toggle form visibility
      >
        <Ionicons name="add-circle" size={30} color="white" />
      </TouchableOpacity>

      {/* Conditionally Show Form */}
      {showForm && (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Subject Name"
            value={newSubject.name}
            onChangeText={(text) => setNewSubject({ ...newSubject, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Time (e.g., 09:00)"
            value={newSubject.time}
            onChangeText={(text) => setNewSubject({ ...newSubject, time: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Day (e.g., Monday)"
            value={newSubject.day}
            onChangeText={(text) => setNewSubject({ ...newSubject, day: text })}
          />
          <TouchableOpacity style={styles.addButtonText} onPress={handleAddSubject}>
            <Text style={styles.addButtonText}>Add Subject</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Display Subjects Grouped by Day */}
      <FlatList
        data={groupedSubjects}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.dayTitle}>{item.title}</Text>
            <FlatList
              data={item.data}
              keyExtractor={(subject) => subject.id.toString()}
              renderItem={({ item: subject }) => (
                <SubjectCard
                  subject={subject}
                  onRemove={() => handleRemoveSubject(subject.id)}
                />
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f3f4f6',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'start',
  },
  
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 1,
    color: '#342564',
    paddingLeft: 10,
  },

  addButton: {
    backgroundColor: '#342564',
    padding: 10,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
  },

  formContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#342564',
    borderRadius: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#00796b',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: 'white',
  },

  addButtonText: {
    backgroundColor: '#342564',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  addButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  dayTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#342564',
    marginTop: 15,
  },
});

export default TimeTableScreen;
