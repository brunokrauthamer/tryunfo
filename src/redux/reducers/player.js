const INITIAL_STATE = {
  score: 0,
  assertions: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SUM_SCORE':
    return {
      ...state, score: action.payload,
    };
  case 'SUM_TOTAL_POINTS':
    return {
      ...state, assertions: state.assertions + 1,
    };
  default:
    return {
      ...state,
    };
  }
};

export default player;
