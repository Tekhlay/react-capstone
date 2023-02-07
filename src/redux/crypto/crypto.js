// Action Types
const FETCH_CRYPTO_DATA = 'react-capstone-project/crypto/FETCH_CRYPTO_DATA';

// Action Creators

const fetchCryptoData = (data) => ({
  type: FETCH_CRYPTO_DATA,
  payload: data,
});

// Thunk Creators
const fetchCryptoDataThunk = () => async (dispatch) => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins');
  const data = await response.json();
  dispatch(fetchCryptoData(data.data));
};

// Reducer
const initialState = [];

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO_DATA:
      return action.payload;
    default:
      return state;
  }
};

// Export
export { fetchCryptoDataThunk };
export default cryptoReducer;
