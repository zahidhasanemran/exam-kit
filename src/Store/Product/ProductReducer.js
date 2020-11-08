import * as acitonTypes from './ProductConst'

const productState = {
    title: 'dummy title'
}


const ProductReducer = (state = productState, action) => {
    switch (action.type) {
            
        case acitonTypes.SAVE_TITLE:
            // console.log(action.data);
            return{
                ...state,
                ...state.title,
                title: action.data
            }
            
    
        default:
            return state;
    }
}

export default ProductReducer;