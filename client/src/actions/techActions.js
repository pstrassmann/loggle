import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_SEARCH_TECH,
  CLEAR_SEARCH_TECH,
} from './types';

export const getTechs = () => async (dispatch) => {
  try {
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};
// Add new tech
export const addTech = (tech) => async (dispatch) => {
  try {
    const res = await fetch('/techs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(tech),
    });

    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};
// Delete
export const deleteTech = (id) => async (dispatch) => {
  try {
    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};
// Set tech as search value
export const setSearchTech = (techName) => (dispatch) => {
  try {
    dispatch({
      type: SET_SEARCH_TECH,
      payload: techName,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};
// Clear tech search value
export const clearSearchTech = () => (dispatch) => {
  dispatch({
    type: CLEAR_SEARCH_TECH,
  });
};
