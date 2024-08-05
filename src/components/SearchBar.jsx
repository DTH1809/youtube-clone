import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState(null);
    const navigate = useNavigate();

    const handleSunbmit = (e) => {
        
        if(searchTerm?.length){
            navigate(`/search/${searchTerm}`);
            setSearchTerm("")
        }
        
    }

  return (
   <Paper
    elevation={24}
    component={"form"}
    onSubmit={handleSunbmit}
    sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 }
    }}
   >
        <input
            placeholder='Search...'
            className='search-bar'
            value={searchTerm}
            onChange={(e) => {
                setSearchTerm(e.target.value);
                console.log(searchTerm)
            }}
        />
        <IconButton type='submit' sx={{ p: "10px", color: "red" }}>
            <SearchIcon />
        </IconButton>
   </Paper>
  )
}

export default SearchBar