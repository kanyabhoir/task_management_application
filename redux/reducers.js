import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
const rootReducer = combineReducers({
  tasks: tasksReducer,

  // Add other reducers here
});

export default rootReducer;