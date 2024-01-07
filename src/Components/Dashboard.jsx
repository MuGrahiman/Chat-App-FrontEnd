    import React from 'react'
import SideBar from './SideBar'
    
    const Dashboard = ({id}) => {
      return (
        <div style={{height:'100vh'}} className="d-flex">

            <SideBar id={id}/>
        </div>
      )
    }
    
    export default Dashboard