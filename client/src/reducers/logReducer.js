import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
  CLEAR_LOGS,
} from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
  filteredLogs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log._id !== action.payload),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) => {
          if (log._id === action.payload._id) {
            return action.payload;
          }
          return log;
        }),
      };
    case SEARCH_LOGS:
      return {
        ...state,
        filteredLogs: state.logs.filter((log) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return log.message.match(regex) || log.tech.match(regex);
        }),
      };
    case CLEAR_LOGS:
      return {
        ...state,
        filteredLogs: [],
      };
    default:
      return state;
  }
};
