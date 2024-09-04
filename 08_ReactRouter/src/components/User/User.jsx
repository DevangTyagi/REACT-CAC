import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams();
    return (
        <div className="text-white bg-gray-500 text-3xl p-4" >Github Followers</div>
    )
}

export default User
