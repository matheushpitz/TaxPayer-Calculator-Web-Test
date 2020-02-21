export class PayerService {

    static async add(data) {
        try {
            return (await fetch(process.env.REACT_APP_API_HOST+'taxpayer/add', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}})).json();            
        } catch(e) {
            throw e;
        }        
    }

    static async has(cpf) {
        try {
            return (await fetch(process.env.REACT_APP_API_HOST+'taxpayer/has?cpf=' + cpf)).json();            
        } catch(e) {
            throw e;
        }        
    }

}