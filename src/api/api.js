import axios from "axios";


export const currencyAPI = {
    currency() {
        return axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3`);
    },
    convert() {
        return axios.get(`https://api.apilayer.com/fixer/latest?apikey=VTwjuhzkgzjRZor1wOk2RnEfrkAjspJx`);
    }
}