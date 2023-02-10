import React, { useState } from 'react';
import Header from '../../components/Header';
import { StyleSheet, View, FlatList} from 'react-native';
import TaskTile from './TaskTile';
import TaskForm from './TaskForm';
import FloatingBtn from '../../components/FloatingBtn';
import Counter from '../../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getTasks, toggleTask } from '../../redux/store';


const TaskScreen = () => {

  const [isFormVisible, setIsFormVisible] = useState(false);


  const tasks = useSelector(getTasks)
  console.log("Couou",tasks)
const dispatch = useDispatch()

  const renderItem = ({ item }) => {
    return (
      <TaskTile task={item} onUpdateTask={onUpdateTask} onDelete={onDelete} />
    );
  };

  const onDelete = (id) => {
   dispatch(deleteTask(id))
  };

  const onUpdateTask = (id) => {
   dispatch(toggleTask(id))
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
            {isFormVisible && <TaskForm />}
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
