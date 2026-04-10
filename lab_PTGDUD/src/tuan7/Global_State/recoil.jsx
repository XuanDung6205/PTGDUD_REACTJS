import { atom } from "recoil";

export const state_Bai1 = atom({
    key: "bai1",
    default: 0
})

export const theme = atom({
    key: "theme",
    default: "light"
})

export const user = atom({
    key: "user",
    default: {
        username: "",
        isLogin: false,
        role: "",
    }
})

export const ToDoList = atom({
    key: "todo",
    default: []
}) 