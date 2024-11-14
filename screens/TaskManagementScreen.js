import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const TaskManagementScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const renderTask = ({ item }) => (
    <View
      style={[
        styles.taskItem,
        { backgroundColor: item.completed ? '#DFF0D8' : '#D0E6FF' }
      ]}
    >
      <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
        <Feather
          name={item.completed ? 'check-circle' : 'circle'}
          size={24}
          color={item.completed ? 'green' : 'gray'}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.taskText,
          { textDecorationLine: item.completed ? 'line-through' : 'none', color: item.completed ? 'gray' : 'black' }
        ]}
      >
        {item.text}
      </Text>
      {item.completed && (
        <TouchableOpacity onPress={() => deleteTask(item.id)}>
          <Feather name="trash-2" size={24} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Back Arrow and Title */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="black" style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Task Management</Text>
      </View>

      {/* Add Task Section */}
      <View style={styles.addTaskContainer}>
        <TextInput
          value={newTask}
          onChangeText={setNewTask}
          placeholder="Enter a new task"
          style={styles.input}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet. Add some tasks!</Text>}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {tasks.filter((task) => !task.completed).length} Pending Tasks
        </Text>
        <Text style={styles.footerText}>
          {tasks.filter((task) => task.completed).length} Completed Tasks
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    backgroundColor: '#F3F4F6',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backArrow: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  addTaskContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#D1D5DB',
    borderWidth: 1,
  },
  addButton: {
    marginLeft: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ff6347',
    borderRadius: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  emptyText: {
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 20,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#D1D5DB',
    paddingTop: 20,
    marginTop: 20,
  },
  footerText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TaskManagementScreen;
