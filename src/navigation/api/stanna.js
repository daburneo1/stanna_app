import{API_HOST} from "../../utils/constants";

export async function getRoomsApi(){
    try {
        const url=`${API_HOST}/rooms`;
        console.log(url)
        const response=await fetch(url);
        const result=await response.json();
        console.log('ok')
        return result;
    }
    catch(error){
        throw error;
    }
}

export async function getRoomDetailsByUrlApi(url) {
    try {
        const response = await fetch(url);
        const result = await  response.json()
        return result;
    } catch (e){
        throw(e)
    }
}