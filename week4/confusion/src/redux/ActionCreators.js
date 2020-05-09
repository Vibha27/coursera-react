import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
// fucntion creates action object
export const addComment = (dishId,rating,author,comment) => ({
    
    
    // every action object should contain 'type'
    type: ActionTypes.ADD_COMMENT,
    
    // data to be carried in action object to reducers
    payload:{
        dishId: dishId,
        rating : rating,
        author: author,
        comment: comment 
    }
});

//thunk - Actions that call manybseveral actions
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        // push dishes in store
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});