import Axios from 'axios';
import {CLIENT_SECRET,LANGUAGE,RUN_URL,EDITOR_MODE} from '../util';

var headers ={
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials':'true',
    'Client-Secret':CLIENT_SECRET
}

export const postCodeUrl = async (value,selectLang) => {
    // console.log(process.env.NODE_ENV,process.env.REACT_APP_HackerearthApiKey);
    let langKey= Object.keys(EDITOR_MODE)[Object.values(EDITOR_MODE).indexOf(selectLang)];
    console.log(langKey,LANGUAGE[langKey])
    let response_value = await Axios.post('https://cors-anywhere.herokuapp.com/'+RUN_URL,value,{headers:headers})
    console.log(response_value.data.run_status.output);
    return response_value.data.run_status.output;
}


