// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/

import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TextInput, 
 FlatList,
 TouchableOpacity
} from 'react-native';

const TimeManagement = ({ route, navigation }) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (task.trim() !== '' && startTime.trim() !== '' && endTime.trim() !== '') {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = { task, startTime, endTime };
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, { task, startTime, endTime }]);
      }
      setTask('');
      setStartTime('');
      setEndTime('');
    }
  };

  const editTask = (index) => {
    const { task, startTime, endTime } = tasks[index];
    setTask(task);
    setStartTime(startTime);
    setEndTime(endTime);
    setEditIndex(index);
  };


  // const addTask = () => {
  //   if (task.trim() !== '') {
  //     setTasks([...tasks, task]);
  //     setTask('');
  //   }
  // };

  // const editTask = (index) => {
  //   // Set the task text to edit and update the editIndex
  //   setTask(tasks[index]);
  //   setEditIndex(index);
  // };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{marginHorizontal:12}}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Time Management App</Text>
      
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8 }}
        placeholder="Enter a task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      <Button title={editIndex !== null ? 'Edit Task' : 'Add Task'} onPress={addTask} />

      <Text style={{ fontSize: 18, marginTop: 20 }}>My Tasks:</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item,index }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, marginVertical: 5 }}>{item}</Text>
          <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => editTask(index)}>
            <Text style={{ color: 'blue', fontSize: 16, marginRight: 10 }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTask(index)}>
            <Text style={{ color: 'red', fontSize: 16 }}>Delete</Text>
          </TouchableOpacity>
        </View>
        </View>

        )}
      />
       
      </View>
    </SafeAreaView>
  );
}

export default TimeManagement;