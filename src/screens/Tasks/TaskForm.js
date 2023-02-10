import React, { useState } from 'react';
import {StyleSheet, View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/store';


const TaskForm = () => {
  const [newTitle, setNewTitle] = useState(null);
  const dispatch = useDispatch()



  const onChangeText = (val) => {
    setNewTitle(val);
  };

  const onAddNewTask = () => {
    if(newTitle === null) return
    dispatch(addTask(newTitle))
    setNewTitle(null)
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={newTitle}
        placeholder="Nouvelle tâche"
        
      />
      <Button title="Ajouter" onPress={onAddNewTask} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft : 20,
    paddingHorizontal : 20,
    marginTop : 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius : 5,
    width : "70%",
    height : 40,
  },
  
});

export default TaskForm;
