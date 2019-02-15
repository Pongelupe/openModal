import {  CHANGE_DATA, CHANGE_PTS_VARIABLES, CHANGE_SIGNATURE_VARIABLES } from './Constants';

export const changeData = (data) => {
    return{
        type: CHANGE_DATA,
        data
    }
}

export const changePTSVariables = (algorithm, {cluster, seed, iteractions}) => {
    return{
        type: CHANGE_PTS_VARIABLES,
        algorithm,
        cluster,
        seed,
        iteractions
    }
}

export const changeSignatureVariables = (algorithm, {test, unitArea}) => {
    return{
        type: CHANGE_SIGNATURE_VARIABLES,
        test,
        unitArea
    }
}