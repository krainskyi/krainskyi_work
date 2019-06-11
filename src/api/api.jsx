import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5431a17e-d94a-4289-b1e4-9fc730fb19a4"
    }
});

export const getUsers = (currentPage, pageSize) => {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}
// export const followAPI = (props, u) => {
//     return instance.then(`follow/${u.id}`)
//         .then(response => {
//             // if(response.data.resultCode == 0);
//             // props.follow(u.id);
//             return response.data;
//         });
// }
// export const unFollowAPI = (props, u) => {
//     return instance.delete(`follow/${u.id}`)
//         .then(response => {
//             if(response.data.resultCode == 0);
//             props.unfollow(u.id);
//             return response.data;
//         });
// }