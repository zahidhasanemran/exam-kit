import * as acitonTypes from './actionConst'

const regState = {
    user: {
        name: '',
        email: '',
        profile: '',
        idcard: ''
    }
}


const RegReducer = (state = regState, action) => {
    switch (action.type) {
        case acitonTypes.REG_START:
            return{
                ...state,
            }
            
        case acitonTypes.SAVE_REG_DATA:
            // console.log(action.data);
            return{
                ...state,
                ...state.user,
                user: action.data
            }
            
    
        default:
            return state;
    }
}

export default RegReducer;