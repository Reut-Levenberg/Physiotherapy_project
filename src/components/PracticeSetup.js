// import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { changeMaximum } from '../actions';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';



const PracticeSetup = () =>  {

    const dispatch = useDispatch();

    const options = [0.5, 1, 1.5 ,2, 2.2 ,3, 3.5 ,4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];
    // const options = [
    //     { value: '0.5'},
    //     { value: '1'},
    //     { value: '1.5'}
    //   ]
    return (
        <div>
            <h4>פרטי אימון:</h4>
            <Box sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">משקולת (ק"ג)</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select">
                        {options.map(option =>{return(<MenuItem value={option}>{option}</MenuItem>)})}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                        <TextField id="outlined-number" label="מספר מחזורים" type="number" InputProps={{inputProps: {min: 0}}}/>
                </FormControl>
            </Box>
            <Box sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                        <TextField id="outlined-number" label="זמן מחזור" type="number" InputProps={{inputProps: {min: 0}}}/>
                </FormControl>
            </Box>
            <Box sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                        <TextField id="outlined-number" label="עומס שריר מרבי" type="number" InputProps={{inputProps: {min: 0}}} onChange={(e) => dispatch(changeMaximum(e.target.value))}/>
                </FormControl>
            </Box>
            {/* <input type="number" min="0" name="muscle load" placeholder="Maximum muscle load is allowed" onChange={(e) => dispatch(changeMaximum(e.target.value))}/> */}

        </div>
    )
}
export default PracticeSetup;