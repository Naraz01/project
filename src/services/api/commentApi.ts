import axios from "axios";

export const CommentApi = {
    fetchComment(payload: any) {
        return axios.post('http://localhost:3001/comments/',  payload).then(({data}) => data);
    }
};
