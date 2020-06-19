import {
  GET_LOGS,
  ADD_LOG,
  SET_LOADING,
  LOGS_ERROR,
  DELETE_LOG,
  SET_CURRENT,
  UPDATE_LOG,
  CLEAR_CURRENT, SEARCH_LOGS, CLEAR_LOGS,
} from './types';

export const setLoading = () => ({
  type: SET_LOADING,
});

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};
// Add new log
export const addLog = (logContent) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(logContent),
    });

    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};
// Delete
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};
// Set current log
export const setCurrent = (log) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: log,
  });
};
// Clear current log
export const clearCurrent = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};

// Update log
export const updateLog = (logContent) => async (dispatch) => {
  try {
    // console.log(logContent);
    setLoading();
    const res = await fetch(`/logs/${logContent.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(logContent),
    });

    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Search logs
export const searchLogs = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_LOGS,
    payload: text,
  });
};

// Clear searched logs
export const clearLogs = () => (dispatch) => {
  dispatch({
    type: CLEAR_LOGS,
  });
};