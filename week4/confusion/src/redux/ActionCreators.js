import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { baseUrl } from '../shared/baseUrl';

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

    return fetch(baseUrl + 'dishes')
    // promise
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
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

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    // promise
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
}


export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    // promise
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
})

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
