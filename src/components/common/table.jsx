import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = (props) => {
    const { column, data, onSort, sortColumn } = props;
    return (  
        <table className="table">
        <TableHeader 
            columns={column} 
            onSort={onSort} 
            sortColumn={sortColumn} />
        <TableBody columns = {column} data = {data} />
    </table>
);
}
 
export default Table;