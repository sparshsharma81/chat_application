///here we are creating instance that we can use in the app.jsx file
import axios from "axios";

export const axiosInstance = axios.create({ ///this will take an object..
    baseURL: "http://localhost:5001/api/v1",  //this will create an object
    //ye vo backend ka url hai.. jisme ham use karege...
    //we are using the port number 5001..

    //we will send the cookies with every single credental requests 
    withCredentials: true, //this will send the cookies with every single credential request 
});






