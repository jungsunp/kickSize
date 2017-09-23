import axios from 'axios';

/**
 * ACTION TYPES
 */
const SET_SNEAKERS = 'SET_SNEAKERS';
const ADD_SNEAKER = 'ADD_SNEAKERT';

/**
 * ACTION CREATORS
 */
export const setSneakers = sneakers => ({
  type: SET_SNEAKERS,
  sneakers,
});

export const addSneaker = sneaker => ({
  type: ADD_SNEAKER,
  sneaker,
});

/**
 * THUNK CREATORS
 */
export const fetchSneakers = () => (dispatch) => {
  axios.get('/api/sneakers')
    .then(res => res.data)
    .then(sneakers => dispatch(setSneakers(sneakers)))
    .catch(console.error);
};

export const addSneakerThunk = ((sneaker, history) => (
  ((dispatch) => {
    axios.post('/api/sneakers', sneaker)
      .then(res => res.data)
      .then((newSneaker) => {
        dispatch(addSneaker(newSneaker));
        history.push(`/sneaker/${newSneaker.id}`);
      })
      .catch(console.error);
  })
));

/**
 * REDUCER
 */
export default function (sneakers = [], action) {
  switch (action.type) {
    case SET_SNEAKERS:
      return action.sneakers;
    case ADD_SNEAKER:
      return sneakers.concat(action.sneaker);
    default:
      return sneakers;
  }
}
