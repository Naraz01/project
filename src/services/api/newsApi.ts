import axios from "axios";

export const NewsApi = {
    fetchNews() {
        return axios.get('http://localhost:3001/news?_embed=comments').then(({data}) => data);
    },
    fetchArticle(id: string) {
        return axios.get(`http://localhost:3001/news/${id}?_embed=comments`).then(({data}) => data);
    },
    addNews(payload: any): Promise<any> {
        return axios.post('http://localhost:3001/news', payload.payload).then(({data}) => data);
    },
    deleteArticle(id: any): Promise<any> {
        return axios.delete('http://localhost:3001/news/'+id).then(({data}) => data);
    },
};
