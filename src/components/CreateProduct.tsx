import axios from "axios"
import React, { useState } from "react"
import { IProduct } from "../models"
import { ErrMessage } from "./ErrMessage"

const infoPerson: IProduct = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}


export function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        infoPerson.name = value
        const responce = axios.post<IProduct>('https://jsonplaceholder.typicode.com/users', infoPerson)

        onCreate((await responce).data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }


    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter name for search..."
                value={value}
                onChange={changeHandler}
            />

            {error && <ErrMessage error={error} />}

            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Search!</button>
        </form>
    )
}