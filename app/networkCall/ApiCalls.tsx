import axios, { AxiosInstance } from "axios";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import  {auth}  from '../fireBase/firebaseConfig'

const baseURL_list_item = "https://dummyjson.com/"



const axiosInstance_item_list: AxiosInstance = axios.create({
    baseURL: baseURL_list_item,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
})


export const getItemList = async (
    url: string
): Promise<any> => {
    try {
        const response = await axiosInstance_item_list.get(url)
        return response;
    } catch (error) {
        alert(error)
    }
}

export const LoginApi = async(email:string,password: string) : Promise<any> => {
signInWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{
    const user = userCredential.user;
    console.log("user "+ user.uid)
    return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        // Any other user properties you need
      };
}
).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Login failed: ${errorCode} - ${errorMessage}`);
        throw error;
})
}

 export const loginAPIS= ((email :string , password :string)=>{
    return signInWithEmailAndPassword(auth,email,password)
 }) 
//  .then((userCredential)=>{
//      const user = userCredential.user;
//      console.log("user "+ user.uid)
//      return {
//          uid: user.uid,
//          email: user.email,
//          displayName: user.displayName,
//          photoURL: user.photoURL,
//          emailVerified: user.emailVerified,
//          // Any other user properties you need
//        };
//  })