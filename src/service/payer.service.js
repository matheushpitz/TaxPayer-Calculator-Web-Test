export class PayerService {

    static add(data) {
        return fetch(process.env.REACT_APP_API_HOST+'taxpayer/add', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}}).then((response) => response.json());
    }

    static has(cpf) {
        return fetch(process.env.REACT_APP_API_HOST+'taxpayer/has?cpf=' + cpf).then((response) => response.json());
    }

}