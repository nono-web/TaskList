import React from 'react';
import { Pressable, Text, StyleSheet, View, Image } from 'react-native';
const TaskTile = ({ task, onUpdateTask, onDelete }) => {
  const onChangeStatus = () => {
    onUpdateTask(task.id);
  };

  const onDeleteTask = () => {
    onDelete(task.id);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={onChangeStatus} style={styles.subContainer}>
        <Image
          style={styles.check}
          source={
            task.isCompleted
              ? require('../../../assets/circle-black.png')
              : require('../../../assets/circle.png')
          }
        />
        <Text style={styles.title}>{task.title}</Text>
      </Pressable>
      <Pressable onPress={onDeleteTask}>
        <Image
          style={styles.check}
          source={require('../../../assets/delete.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    width: 26,
    height: 26,
  },
  title: {
    marginLeft: 20,
    fontSize: 16,
  },
});

export default TaskTile;
