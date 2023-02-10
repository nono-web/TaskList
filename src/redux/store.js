import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const getTasks = store => store.tacksList;

export const getCompletedTasks = (store) =>
  store.tacksList.filter((task) => task.isCompleted);

const ADD_TASK = 'ADD_TASK';

export const addTask = (title) => {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
};

const TOGGLE_TASK = 'TOGGLE_TASK';

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

const DELETE_TASK = 'DELETE_TASK';

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});
const initialState = [{id:1, title:"Init Task", isCompleted:false}];
const tacksList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          isCompleted: false,
        },
      ];
    case TOGGLE_TASK:
      let newState = [];
      state.forEach((task) => {
        if (task.id === action.payload.id) {
          newState.push({
            ...task,
            isCompleted: !task.isCompleted,
          });
          return;
        }
        newState.push(task);
      });
      return newState;

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }   
};

const reducers = combineReducers({tacksList})

export const store = configureStore({ reducer : reducers });
