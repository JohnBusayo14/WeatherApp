import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const AddSubjectModal = ({ visible, onClose, onAddSubject }) => {
  const [subjectName, setSubjectName] = useState('');
  const [subjectTime, setSubjectTime] = useState('');

  const handleAddSubject = () => {
    // Call onAddSubject if it is defined
    if (onAddSubject) {
      onAddSubject(subjectName, subjectTime);
      setSubjectName('');
      setSubjectTime('');
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Subject</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Subject Name"
            value={subjectName}
            onChangeText={setSubjectName}
          />

          <TextInput
            style={styles.input}
            placeholder="Time (e.g., 10:00 AM - 11:00 AM)"
            value={subjectTime}
            onChangeText={setSubjectTime}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddSubject}>
            <Text style={styles.addButtonText}>Add Subject</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FF5733',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddSubjectModal;
