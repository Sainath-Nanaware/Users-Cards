import React, { useEffect, useState } from 'react'
import "./UserProfile.css"
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const {id}=useParams();
    console.log(id);
    
    const [userData,setUserData]=useState({})
       
    async function callApi(){
            try{
                const resp= await fetch(`https://dummyjson.com/users/${id}`);
                const data= await resp.json();
                // console.log(data)
                // console.log("hii");
                
                setUserData(data)
            }catch{
                console.log("Internal server error!")
            }
        }

    useEffect(()=>{

        callApi()

    },[id])


    console.log(userData)

  return (
    <>
        <div className="mainContainer">
            <div className='profileContainer'>
                <div className="lhs">
                    <img src={userData.image} alt="User Image" />
                    <h2>{userData.firstName+" "+userData.lastName}</h2>
                    <h5>{userData.company?.title|| "N/A"}</h5>
                </div>
                <div className="rhs">
                    {/*  &emsp;  use for space between two words purpose */}
                    <p><b>Email :</b>&emsp;{userData.email|| "N/A" }</p>
                    <p><b>Phone No :</b> &emsp;{userData.phone || "N/A"}</p>
                    <p><b>Birth Date :</b>&emsp;{userData.birthDate || "N/A"}</p>
                    <p><b>Age :</b>&emsp;{userData.age || "N/A"}</p>
                    <p><b>city :</b>&emsp;{userData.address?.city|| "N/A"}</p>
                    <p><b>University :</b>&emsp;{userData.university|| "N/A"}</p>
                    <p><b>Company Name :</b>&emsp;{userData.company?.name|| "N/A"}</p>
                    <p><b>Department :</b>&emsp;{userData.company?.department|| "N/A"}</p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default UserProfile
