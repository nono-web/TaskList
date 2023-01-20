import React, { useState } from 'react';
import Header from '../../components/Header';
import { StyleSheet, View, FlatList} from 'react-native';
import TaskTile from './TaskTile';
import TaskForm from './TaskForm';
import FloatingBtn from '../../components/FloatingBtn';
import Counter from '../../components/Counter';


const TaskScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  console.log(tasks)

  const renderItem = ({ item }) => {
    return (
      <TaskTile task={item} onUpdateTask={onUpdateTask} onDelete={onDelete} />
    );
  };

  const onAddTask = (title) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        isCompleted: false,
      },
    ]);
  };

  const onDelete = (id) => {
    let newTask = [];

    tasks.forEach((t) => {
      if (t.id !== id) {
        newTask.push(t);
        return;
      }
    });
    setTasks(newTask);
  };

  const onUpdateTask = (id) => {
    let newTask = [];

    tasks.forEach((t) => {
      if (t.id !== id) {
        newTask.push(t);
        return;
      }
      newTask.push({
        id,
        title: t.title,
        isCompleted: !t.isCompleted,
      });
    });
    setTasks(newTask);
  };

  const onPressBtn = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {isFormVisible && <TaskForm onAddTask={onAddTask} />}
            <View style={styles.containerCounter}>
            <Counter nb={tasks.length}  title="Tâches créées" />
            <Counter nb={tasks.filter(t=>t.isCompleted === true).length}  title="Tâches effectuées" />
            </View>
          </>
        }
        contentContainerStyle={{ flexGrow: 1 }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
     <FloatingBtn toggle={onPressBtn} isOpen={isFormVisible}/>
    </>
  );
};

const styles = StyleSheet.create({
  containerCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  marginTop: 10,
  paddingHorizontal:20,
  }
});

export default TaskScreen;
