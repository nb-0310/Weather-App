import React, { useState } from 'react'
import PropTypes from 'prop-types'
import searchIcon from '../../public/search.svg'

const Search = ({ getData }) => {
    const [name, setName] = useState ()

    const sendData = (e) => {
        e.preventDefault ()
        getData (name)
    }

    return (
        <form className="input relative w-[200px] h-[30px] sm:w-[330px] mx-auto my-7" onSubmit = {sendData}>
            <input type="text" id='input' className='w-[200px] h-[30px] opacity-50 rounded-full border-none outline-none px-3 text-black font-normal caret-transparent py-1 font-poppins tracking-wider placeholder:text-black placeholder:opacity-100 sm:w-[330px]' placeholder='Search your city' spellCheck='false' onChange={(e) => { setName (e.target.value) }} autoComplete='off' />

            <button type='submit'>
                <img src={searchIcon} className='absolute top-1/2 -translate-y-1/2 right-3 w-[16px]' />
            </button>
        </form>
    )
}

Search.propTypes = {
    getData: PropTypes.func
}

export default Search