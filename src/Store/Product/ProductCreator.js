import * as actions from './ProductConst';

export const SaveTitle  = (data) => {

    return {
        type: actions.SAVE_TITLE,
        data
    }
}