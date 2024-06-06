import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const fetchProdutos = () => {
    return axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC');
}

export const GetProdutos = () => {
    const {data: produtos, isLoading} = useQuery({ queryKey: ['produtos'], queryFn: fetchProdutos })

    return { produtos, isLoading }
}