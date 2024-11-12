import {URLS} from "../constants/urls"
import axios from "axios"

const getDashboard = (setData) => {
    const reqUrl = URLS.baseUrl + "/stats/dashboard";
    
    axios.get(reqUrl)
      .then(response => {
          console.log(response.data)
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  export {getDashboard}