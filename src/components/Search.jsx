import React from 'react';
import '../style/Search.css'

const Search = ( {searchValue, setSearchValue } ) => {

    const usserFiltro = (e) => {
        // console.log(e.target.value);
        setSearchValue(e.target.value);
    }
    return (
        <div className='container-search'>
            <div className='search'>
                <div>
                <input 
                    type='text' 
                    placeholder='Search...' 
                    value={searchValue} 
                    onChange={usserFiltro} 
                    className='searchInput'
                    name=''
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;