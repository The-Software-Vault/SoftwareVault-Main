import axios from 'axios'

export class MessageRepository {

    // Leave this here
    url = true ? 'http://54.156.23.43:8000' : 'http://localhost:8000';

    // GET Returns chat history between a doctor and patient (UserIs, DoctorId) : http://CHANGE-ME:8000/message/getChat
    getChatHistory(convo){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/message/getChat`, {params: convo})
                .then(x => {
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
                    console.log(x.data);
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        })
    }
}
