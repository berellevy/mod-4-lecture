import React from 'react'


function Search({ searchHandler, searchValue }) {
    return (
        <form>
            <p>
                <input type="text" placeholder="Search for an Instructor" onChange={searchHandler} value={searchValue} />
            </p>
        </form>
    )
    
}


export default Search