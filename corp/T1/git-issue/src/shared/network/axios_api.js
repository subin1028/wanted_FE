import axios from "axios";
import apiKey from "../../corp_api.json"; 

const APIKEY = apiKey.authorization;

export const queryParam = {
    "sort": "comments",
    "organ":"angular",
    "repo":"angular-cli"
  }

const instance = axios.create({
    baseURL: "https://api.github.com/repos",
    headers: {"Content-Type": "application/vnd.github.text+json"},
    auth: `Bearer ${APIKEY}` //제출 시 제거
});

instance.interceptors.response.use((config) => {
    console.log(config);
    return config;
})

export const callApi = async() => {
    try{
      instance.get(`${queryParam.organ}/${queryParam.repo}/issues?sort=${queryParam.sort}`);
    }catch(e){
      console.log("에러", e)
    }finally{
      console.log("무조건 실행")
    }
  }