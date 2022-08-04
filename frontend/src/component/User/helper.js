import { API } from "../../backend";


export const addUser = (user) => {
    return fetch(`${API}/user/add`, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => response.json())
        .catch((err) => console.log(err));
}

export const getAllUsers = () => {
    return fetch(`${API}/users`, {
        method: "GET",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((err) => console.log(err));
}