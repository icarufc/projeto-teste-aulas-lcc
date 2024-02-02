"use client"

import { PropsSearchManufacturer } from "@/types"
import { Fragment, useState } from "react"
import { Combobox, Transition } from "@headlessui/react"

import Image from "next/image"
import { manufacturers } from "@/constants"

export const SearchManufacturer = ({manufacturer, setManufacturer}: PropsSearchManufacturer) => {
    
    const [query, setQuery] = useState("");

    const filteredManufacturers = 
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>  (
                item.toLowerCase()
                .replace("\s+/g", "")
                .includes(query.toLowerCase().replace("\s+/g", ""))
    ))

    return (
        <div className="search-manufacturer">
            <Combobox>
                <div className="relative w-full">
                    <Combobox.Button className={"absolute top-[14px]"}>
                        <Image
                            src="/car-logo.svg"
                            width={20} height={20}
                            alt="Logo do carro"
                            className="ml-4" />
                    </Combobox.Button>

                    <Combobox.Input 
                        className={"search-manufacturer__input"}
                        placeholder="Buscar por automóveis"
                        onChange={(e) => setQuery(e.target.value)}
                        displayValue={(manufacturer: string) => manufacturer} />
                
                    <Transition
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-1000"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                        >

                            <Combobox.Options>
                            {filteredManufacturers.length === 0 && query !== "" ? (
                                <Combobox.Option 
                                    value={query}
                                    className={"search-manufacturer__option"}>
                                        Create {query}
                                    </Combobox.Option>
                            ) : (
                                filteredManufacturers.map((item) => (
                                    <Combobox.Option
                                    key={item}
                                    className={({active}) => `relative search-manufacturer__option ${
                                        active ? "bg-primary-blue text-white" : "text-gray-900"
                                      }`}
                                    value={item}>
                                        {({ selected, active }) => (
                                            <>
                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"} `}>
                                                {item}
                                            </span>

                                            {selected ? (
                                                <span  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}>C</span>
                                            ) : null}
                                            </>
                                        )} 

                                    </Combobox.Option>
                                ))
                            ) }
                            </Combobox.Options>
                    
                    </Transition>
                
                </div>


            </Combobox>
        </div>
    )
}