import React from 'react'
import { Link, Navigate } from "react-router-dom";
import Navabar from '../Components/Navabar';
import TableComp from '../Components/TableComp';

const TableDisplay = () => {
  
  if (!localStorage.getItem('isLogged')) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div>
      <Navabar/>
      <div>
        <TableComp/>
      </div>
    </div>
  )
}

export default TableDisplay
