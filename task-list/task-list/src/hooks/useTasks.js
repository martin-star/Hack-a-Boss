import { useReducer, useEffect } from "react";
import { getTasks, addTask, removeTask, updateTask } from "../http/taskService";

const SET_TASKS = "SET_TASKS";
const COMPLETE_TASK = "COMPLETE_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const ADD_TASK = "ADD_TASK";

function taskReducer(currentState, action) {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks;
    case COMPLETE_TASK:
      return currentState.map(task => {
        if (task.id === action.completedTask.id) {
          return action.completedTask;
        }
        return task;
      });
    case REMOVE_TASK:
      return currentState.filter(task => task.id !== action.id);
    case ADD_TASK:
      return [action.task, ...currentState];
    default:
      return currentState;
  }
}

export function useTasks() {
  const [state, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    getTasks().then(({ data }) => dispatch({ type: SET_TASKS, tasks: data }));
  }, []);

  const handleAddTask = async task => {
    const { data } = await addTask(task);

    dispatch({ type: ADD_TASK, task: data });
  };

  const handleCompleteTask = async id => {
    const completedTask = state.map(task => {
      if (task.id === id) {
        task.completed = true;
      }
      return task;
    });

    await updateTask(completedTask.find(task => task.id === id));

    dispatch({ type: COMPLETE_TASK, completedTask });
  };

  const handleRemoveTask = async id => {
    await removeTask(id);

    dispatch({ type: REMOVE_TASK, id });
  };

  return {
    tasks: state,
    handleAddTask,
    handleCompleteTask,
    handleRemoveTask
  };
}
