import axios from "axios";

export const UserApi = {
    fetchPerson(id: string) {
        return axios.get(`http://localhost:3001/persons/${id}?_embed=news`).then(({data}) => data);
    },
    setNewsUser(payload:any):Promise<any> {
        return axios.patch('http://localhost:3001/news/'+ payload.newsId, {
            saved: payload.saved
        }).then(({data}) => data);
    },
    setNewsUserLike(payload:any):Promise<any> {
        return axios.patch('http://localhost:3001/news/'+ payload.newsId, {
            likes: payload.likes
        }).then(({data}) => data);
    }
};
