import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './SearchBar.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSearch = () => {
        const formattedSearchTerm = searchTerm.toLowerCase();
        navigate(`/main?page=${formattedSearchTerm}&subpage=${searchTerm.toUpperCase()}%20Home`);
    };

    return (
        <>
            <div className='flex text-white h-12 place-content-center heading'>
                <h3>Hey! What Do You Want To Learn?</h3>
            </div>
            {/* ... other components ... */}
            <div className='searchstyle'>

                <div class="flex w-96 flex-col items-end gap-6">
                    <div class="relative h-12 w-full min-w-[200px] input-wrapper">
                        <input
                            class="peer h-full w-full  border border-[#13A3AA] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#13A3AA] placeholder-shown:border-t-[#13A3AA] focus:border-2 focus:border-[#13A3AA] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=""
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <label
                            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5  before:border-t before:border-l before:border-[#13A3AA] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-l-lg after:border-t after:border-r after:border-[#13A3AA] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#13A3AA] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#13A3AA] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Search Anything
                        </label>
                    </div>
                </div>
                <div className='button-wrapper'>
                    <button
                        class="middle none center mr-4  bg-[#13A3AA] py-5 px-7 ml-0 font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#13a3aa6e] transition-all hover:shadow-lg hover:shadow-[#13a3aa6a] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none changecolor"
                        data-ripple-light="true"
                        onClick={handleSearch}
                    >
                        Button
                    </button>
                </div>
            </div>
        </>
    );
}

export default SearchBar;
