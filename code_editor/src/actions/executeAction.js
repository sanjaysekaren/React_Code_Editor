import {postCodeUrl} from '../services/services'
 
const fetchResultFromApi = (value) =>{
    return {
        type:'ExecuteCodeAction',
        payload : value
    }
}

export const ExecuteAction =(value,selectLang)=> {
    return async (dispatch)=>{
        const result = await postCodeUrl(value,selectLang)
        console.log(result)
        dispatch(fetchResultFromApi(result))
    }
}
