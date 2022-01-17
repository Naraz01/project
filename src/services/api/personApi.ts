import axios from "axios";

export const PersonApi = {
    fetchPerson() {
        return axios.get('http://localhost:3001/persons').then(({data}) => data);
    }
};
