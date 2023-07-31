import React from 'react';
import TextField from '@mui/material/TextField';

const TextInputComponent = ({ title, value, onChange }) => {
    return (
        <div>
            <TextField
                label={title}
                variant="standard"
                value={value}
                onChange={onChange}
            />
        </div>

    )
};

export default TextInputComponent;
