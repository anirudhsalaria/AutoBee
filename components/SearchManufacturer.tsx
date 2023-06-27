"use client"
import { Combobox, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types'
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, setQuery] = useState('')

  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
            <Combobox.Button className="absolute top-[14px]">
                <Image 
                    src="/car-logo.svg"
                    width={20}
                    height={20}
                    alt='Car Logo'
                    className='ml-4'
                />
            </Combobox.Button>

            <Combobox.Input 
                className="seacrh-manufacturer__input"
                placeholder='Volkswagen'
                displayValue={(manufacturer: string) => manufacturer}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
