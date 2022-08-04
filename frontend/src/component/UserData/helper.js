import { API } from "../../backend";

export const addUserData = (userData) => {
    return fetch(`${API}/data/add`, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
        .then((response) => response.json())
        .catch((err) => console.log(err));
}

export const getUserData = (userId) => {
    return fetch(`${API}/data/${userId}`, {
        method: "GET",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((err) => console.log(err));
}