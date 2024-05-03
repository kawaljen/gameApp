import axios from "axios"


const api ="http://localhost:5190/api/play/" 
type userInput = {
    guess : string;
    message:string;
}

export const playAPI = async (guess:string)=>{
    try{
        const data = await axios.get<userInput>(api+guess)
        return data;
    }
    catch (error){
        if(axios.isAxiosError(error)){
            console.log("error message " , error.message);
            return error.message;
        }
        else{
            console.log("unexpected error ", error)
            return "an unexpected error has occured";
        }
    }

}