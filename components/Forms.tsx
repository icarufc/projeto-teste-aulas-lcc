'use client'
import axios from "axios"
// se nao tier o axios:
// npm install axios
import { ChangeEvent, FormEvent, useState } from "react"

const api = axios.create({
    baseURL: "https://viacep.com.br/ws",
    timeout: 1000,
})

export const Forms = () => {

    const [cep, setCep] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setEstado] = useState("")
    const [estado, setCidade] = useState("")

    const handleSubmit = async (event: FormEvent) => {

        event.preventDefault()

        try {

            const { data } = await api.get(`/${cep}/json`);
            setRua(data.logradouro)
            setBairro(data.bairro)
            setEstado(data.uf)
            setCidade(data.localidade)

        } catch (error) {
            alert("ERRO AO OBTER OS DADOS DO CEP")
        }
    
    }
    const handleCepChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCep(event.target.value);
    }

    return (
        <form method="get" onSubmit={handleSubmit}>
            
            <label>
                CEP {" "} 
                <input name="meuCEP" value={cep} onChange={handleCepChange} />
            </label>

            <hr/>
                <p>RUA = {rua}</p>
                <p>BAIRRO = {bairro}</p>
                <p>CIDADE = {cidade}</p>
                <p>ESTADO = {estado}</p>
            <button type="submit">Buscar</button>
        </form>
    )
}