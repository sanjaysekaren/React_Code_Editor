import Axios from 'axios';
import {CLIENT_SECRET,lang,RUN_URL} from '../util';

var headers ={
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials':'true' 
}

export const postCodeUrl = async (value) => {
    console.log(process.env.NODE_ENV);
    let source = value
    let formBody = new FormData();
    formBody.set("client_secret", CLIENT_SECRET);
    formBody.set("source", source);
    formBody.set("lang", lang);
    let response_value = await Axios.post('https://cors-anywhere.herokuapp.com/'+RUN_URL,formBody,{headers:headers});
    console.log(response_value.data,);
    console.log(response_value.data.run_status.output)
    return response_value.data.run_status.output;
    // return 'Sample answer';
}


