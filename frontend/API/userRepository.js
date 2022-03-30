import axios from 'axios'

export class UserRepository {

    // Leave this here
    url = false ? 'http://CHANGE-ME:8000' : 'http://localhost:8000';


    // POST Create User : http://CHANGE-ME:8000/user/register
    registerUser(loginData){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/user/register`, loginData)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        })
    }

    // POST Verify User : http://CHANGE-ME:8000/user/login
    verifyUser(loginData){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/user/login`, loginData)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        })
    }

    // GET Returns all information depending on username (passed into the BODY) : http://CHANGE-ME:8000/user/
    userDetailsBody(username){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/user/`, {params: username})
                .then(x => {
                    console.log(x);
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        })
    }

    // GET Returns all information depending on userID (passed as request parameter): http://CHANGE-ME:8000/user/:userID
    userDetailsParam(userID){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/user/${userID}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        })
    }

}