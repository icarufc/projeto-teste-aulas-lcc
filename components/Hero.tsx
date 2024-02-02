"use client"
import Image from "next/image"
import { Button } from "."
import axios from "axios"
import { useState } from "react"

const api = axios.create({

    baseURL: "http://127.0.0.1:1234",
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
})


export const Hero = () =>{

    const loginstr = "joaoicarom"
    const senhastr = "12345"

    const [dado, setDado] = useState([])


    const RequisicaoLogin = async () => {

        let { data } = await api.get("/carros")

        setDado(data)

    }
    
    return (
        <div className="hero">

            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Reserve, ou alugue um carro - rapido e facil</h1>
                <p className="hero__subtitle">Agilize o processo de aluguel de automóveis com nosso método de reserva.</p>
            <Button 
                title={"Efetuar Login"}
                containerStyles={"bg-primary-blue text-white rounded-md mt-10"} 
                handlePress={RequisicaoLogin}
                btnType="button" />

            </div>


            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="foto do carro" fill className="object-contain"/>
                </div>
                
                <div className="hero__image-overlay" />
            </div>

        </div>
    )
}