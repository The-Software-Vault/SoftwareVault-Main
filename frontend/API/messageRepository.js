import axios from 'axios'

export class MessageRepository {

    // Leave this here
    url = false ? 'http://54.156.23.43:8000' : 'http://localhost:8000';

    // GET Returns chat history between a doctor and patient (UserIs, DoctorId) : http://CHANGE-ME:8000/message/getChat
    getChatHistory(userId, doctorId){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/message/getChat`, {userId, doctorId})
                .then(x => {
                    console.log("getChatHistory -->\tuserID:", userId, "\tDoctorID:", doctorId);
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        })
    }

    // POST Send message to a user : http://CHANGE-ME:8000/message/addMessage
    sendMessage(msgData){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/message/addMessage`, msgData)
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
