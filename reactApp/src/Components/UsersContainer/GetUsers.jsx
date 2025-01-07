import React, { useEffect, useState } from 'react'
import "./GetUsers.css"
import UserCard from '../UserCards/UserCard'

const GetUsers = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        async function callApi(){
            try{
                const resp=await fetch("https://dummyjson.com/users");
                const data=await resp.json()
                setUsers(data.users)

            }catch{
                    console.log("Internal server error");
            }
        }

        callApi()

    },[])
  return (
        <>
         <div className='heading'>
                <p>User Profiles</p>
        </div>
        <div className='usersContainer'>
            {users.map((element)=>{
                // return <div  className="userCard" key={element.id}>{element.firstName}</div>
                return <UserCard img={element.image} fname={element.firstName} lname={element.lastName} email={element.email} />
            })}
        </div>
    </>
  )
}

export default GetUsers
