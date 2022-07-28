import{API_HOST} from "../../utils/constants";

export async function getRoomsApi(){
    try {
        const url=`${API_HOST}/rooms`;
        const response=await fetch(url);
        const result=await response.json();
        console.log(result)
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
        console.log(result)
        return result;
    } catch (e){
        throw(e)
    }
}

export async function getRoomDetailsApi(id) {
    try {
        const url = `${API_HOST}/rooms/${id}`;
        const response = await fetch(url)
        const result = await response.json();
        return result;
    } catch (e) {
        throw e;
    }
}

export async function getRoomServicesApi(url) {
    try {
        const response = await fetch(url);
        const result = await  response.json()
        return result;
    } catch (e){
        throw(e)
    }
}