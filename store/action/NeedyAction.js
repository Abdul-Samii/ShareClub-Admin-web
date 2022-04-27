
import {types} from '../actionTypes';
import {httpRequest} from '../../config';
import qs from 'qs';



//Get Donor
export const GetNeedyRequests = (data) => async dispatch=>{
    try{
        dispatch({type:types.GET_NEEDY_REQ_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('Admin/needyrequests',queryData);
        const result = response.data;
        console.log("*********jjj*** ",result)
        dispatch({type:types.GET_NEEDY_REQ_SUCCESS,payload:result});

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.GET_DONOR_REQ_FAILED});
    }
}