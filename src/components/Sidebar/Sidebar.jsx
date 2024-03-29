import React, { useEffect }from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress} from '@mui/material';
import { Link } from 'react-router-dom';
import {useTheme} from '@mui/styles';
import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

// sidebar categories
const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
];

// moviemap logos
const redLogo = 'https://fontmeme.com/permalink/230301/03e801e5217f3cf2fc2be4f245639307.png';
const blueLogo = 'https://fontmeme.com/permalink/230301/ddc202c58e1321c48b32af389e3880aa.png';

const Sidebar = ({ setMobileOpen}) => {
    const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
    const theme = useTheme();
    const classes = useStyles();
    const { data, isFetching } = useGetGenresQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        setMobileOpen(false);
    }, [genreIdOrCategoryName]);

    return (
        <>
            <Link to="./" className = {classes.imageLink}>
                <img 
                className ={classes.image}
                src={theme.palette.mode=== 'light' ? redLogo : blueLogo}
                alt="MovieMap logo"
                />
            </Link>
            <Divider/>
            <List>
                <ListSubheader>Categories</ListSubheader>
                {categories.map(({ label, value }) => (
                    <Link key={value} className={classes.links} to="./">
                        <ListItem onClick= {()=> dispatch(selectGenreOrCategory(value))} button>
                            <ListItemIcon>
                                <img src={genreIcons[label.toLowerCase()]} className ={classes.genreImage} height={30} />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider/>
            <List>
                <ListSubheader>Genre</ListSubheader>
                {isFetching? 
                    (<Box display="flex" justifyContent="center">
                    <CircularProgress />
                    </Box>
                    ) : data.genres.map(({ name, id }) => (
                    <Link key={name} className={classes.links} to="./">
                        <ListItem onClick= {()=> dispatch(selectGenreOrCategory(id))} button>
                            <ListItemIcon>
                                <img src={genreIcons[name.toLowerCase()]} className ={classes.genreImage} height={30} />
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>
    )
}

export default Sidebar;
