//contains logic of singlle field. so that we can use later
import React from 'react';

//props passed on by redux form, instead of props.input we can write like below
//{...input} is same as onBlur = {input.onBlur}  onChnage = {input.onChange}. passing the props to input
//in meta data we have error and touched property
export default ({input, label, meta: {error, touched}}) => {
    // console.log(meta);  
    return (
        <div>
            <label>
                {label}
            </label>
            <input {...input} style = {{marginBottom: '5px' }} />
            <div className = "red-text" style = {{marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};