import React from 'react';

const Select = ({name, label, options, error, ...rest}) => {
    return ( 
        <div className="form-group mt-3">
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                id={name}
                {...rest}
                className="form-control mt-1"
                >
                <option value="">Select an option</option>
                {options.map(option => {
                    return <option key={option._id} value={option._id}>{option.name}</option>
                }
                )}
            </select>
            {error && <div className="alert alert-danger">  {error} </div>}
        </div>
     );
}
 
export default Select;