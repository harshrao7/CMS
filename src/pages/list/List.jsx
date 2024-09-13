import React from 'react'
import DashSidebar from '../../Components/dashsidebar/DashSidebar';
import DashNavbar from '../../Components/dashnavbar/DashNavbar';
import './List.scss'
import DataTable from '../../Components/datatable/DataTable';
import { collection, getDocs } from "firebase/firestore";

const List = () => {
  return (
    <div className='list'>
      <DashSidebar/>
      <div className="listContainer">
        {/* <DashNavbar/> */}
        <DataTable/>
      </div>
    </div>
  )
}

export default List
