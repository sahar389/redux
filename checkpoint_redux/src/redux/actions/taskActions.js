import { ADD_TASK ,DELETE_TASK,EDIT_TASK,UPDEAT,FILTER, TOGGEL} from "./types";

export const addTask = (payload) => {
    return { type: ADD_TASK, payload };
  };
  export const deleteTask = (payload) => {
    return { type: DELETE_TASK, payload };
  };
  export const editTask = (payload) => {
    return { type: EDIT_TASK, payload };
  };
  export const updateTask = (payload) => {
    return { type: UPDEAT, payload };
  };
  export const toggle = (payload) => {
    return { type: TOGGEL, payload };
  };
  export const filter = (payload) => {
    return { type: FILTER, payload };
  };
  