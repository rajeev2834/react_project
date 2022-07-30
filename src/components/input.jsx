import React from 'react';

const Input = ({name, label, value, onChange, type, placeholder, error}) => {
    return ( 
        <div className="form-group mt-3">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                id={name}
                type={type}
                className="form-control mt-1"
                placeholder={placeholder}
            />
            {error && <div className="alert alert-danger">
                {error}
            </div>}
        </div>
     );
};
 
export default Input;