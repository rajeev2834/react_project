import React, {Component} from 'react';
import  withTooltip  from './common/withTooltip';

const Customers = (props) => {
    return (  
        <div>
            <h1>Customers</h1>
            {props.showTooltip && <span>This is a tooltip</span>}
        </div>
    );
}
 
export default withTooltip(Customers);