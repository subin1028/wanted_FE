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

export const callApi = async(page) => {
    try{
      const response = await instance.get(`${queryParam.organ}/${queryParam.repo}/issues?sort=${queryParam.sort}&page=${page}`);
      return await(response).data?[response.data] : [];
    }catch(e){
      console.log("error >> ", e)
    }
  }