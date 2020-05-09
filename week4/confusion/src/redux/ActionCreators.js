import * as ActionTypes from './ActionTypes';

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