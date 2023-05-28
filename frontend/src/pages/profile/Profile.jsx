import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-center'> 
            <p class="text-lg-center">
                <p class="font-monospace">
                    <p class="fs-6">
                        
                        <img class="rounded-circle shadow-4-strong" alt="profile"
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"   height={150} width={150} /><br></br>
                        welcome, {user.fname}<br></br>
                        <hr></hr>
                        Name : {user.fname} {user.lname}<br></br>
                        Email : {user.email}
                    </p>
                </p>
                
            </p>
            </div>
        </div>

    )
}

export default Profile