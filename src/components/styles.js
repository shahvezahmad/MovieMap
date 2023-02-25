import { makeStyles } from '@mui/styles';

export default makeStyles(() =>({
    root: {
        display: 'flex' ,
        height: '100%' ,
    },
    toolbar: {
        height: '100px' ,
    },
    contents: {
        flexGrow: '1',
        padding: '2em',
    },
}));