import * as actions from './actionConst';

export const RegStart  = () => {
    return {
        type: actions.REG_START
    }
}

export const SaveRegData  = (data) => {
    console.log(data);

    return {
        type: actions.SAVE_REG_DATA,
        data: {
            name: data.oname,
            email: data.oemail,
            profile: data.oprofile,
            idcard: data.oidcard
        }
    }
}