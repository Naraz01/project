import axios from "axios";

export const BloggerApi = {
    fetchBlogger(id: string) {
        return axios.get('http://localhost:3001/persons/' + id).then(({data}) => data);
    }
};
