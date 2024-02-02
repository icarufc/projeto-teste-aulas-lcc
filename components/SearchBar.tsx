"use client"
import { useState } from "react"
import { SearchManufacturer } from "./SearchManufacturer"

export const SearchBar = () => {

  const [fornecedor, setFornecedor] = useState("")

  const handleSearch = () => {}

  return (
    <form 
      className="searchbar"
      onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
            manufacturer={fornecedor}
            setManufacturer={setFornecedor}
        />
      </div>
    </form>
  )
}
