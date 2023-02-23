import axios from "axios"
import { useEffect } from "react";

const repositoriesApi = axios.create({
    baseURL: "https://api.github.com/users/RodrigoCSoares-fs"
})


export default repositoriesApi