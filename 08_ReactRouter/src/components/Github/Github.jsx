import React, { useEffect, useState } from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const[data,setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/DevangTyagi')
    //     .then((result) => result.json())
    //     .then(data => setdata(data))
    // },[])
    return (
        <div className="text-white bg-gray-500 text-3xl p-4" >Github Followers : {data.followers} 
        <img className='mx-auto p-4' src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

export const githubinfo = async () =>
{
   const response = await fetch("https://api.github.com/users/DevangTyagi")
   return response.json()
}
