import React from 'react'

const Dashboard = ({match}) => {
    return (
        <div>
            <center>This is Dashboard!!! {match.params.name}</center>
        </div>
    )
}

export default Dashboard
