import React, {useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
    const classes = useStyles();
    const [query,setQuery] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();

    //press enter to search a movie
    const handleKeyPress =(event) => {
        if(event.key === 'Enter'){
            dispatch(searchMovie(query));
        }
    }

    // search bar only on home page
    if(location.pathname !== '/'){
        return null;
    }
    return (
        <div className={classes.searchContainer}>
            <TextField 
                onKeyPress ={handleKeyPress}
                value ={query}
                onChange={(e) => setQuery(e.target.value)}
                variant="standard"
                InputProps = {{
                    className: classes.input,
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </ InputAdornment>
                    ),
                }}
            />
        </div>
    )
}

export default Search;
