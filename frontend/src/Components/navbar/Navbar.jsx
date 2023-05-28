import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()
  //get user from local storage
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  const logout = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container">
          <Link to={'/'} class="navbar-brand me-2">

            <img
              src=".\assets\images\logo.png"
              height="50"
              alt="MDB Logo"
              loading="lazy"
            />
            <h2 className='text-black'> JHO<span className='text-success'>LA</span> </h2>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="About">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=" ">All products</a>
              </li>
            </ul>

            <div class="d-flex align-items-center">
              {

                user ? (
                  <div class="d-flex align-items-center">
        
                  <a class="text-reset me-3" href="#">
                    <i class="fas fa-shopping-cart"></i>
                  </a>
            
           
                  <div class="dropdown">
                    <a
                      class="text-reset me-3 dropdown-toggle hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fas fa-bell"></i>
                      <span class="badge rounded-pill badge-notification bg-danger">1</span>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="#">Some news</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Another news</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </li>
                    </ul>
                  </div>
           
                  <div class="dropdown">
                    <a
                      class="dropdown-toggle d-flex align-items-center hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuAvatar"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        class="rounded-circle"
                        height="25"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >

                      <li>
                        <a class="dropdown-item" href="#">Settings</a>
                      </li>
                      {
                        user.isAdmin ? (
                          <li>
                          <Link to={'/Admindashboard'} class="dropdown-item" >Admin Dashboard</Link> 
                        </li>
                       
                        ) : (
                          <li><Link to={'/profile'} class="dropdown-item" >Profile</Link> </li>
                        )
                      }
                      <li><Link to={'/login'} class="dropdown-item" onClick={logout}>Logout</Link></li>
                    </ul>
                  </div>
               
                    {user.fname}
                    

                  </div>


                ) : (
                  <>
                    <Link to={'/register'}>
                      <button type="button" class="btn btn-primary px-3 me-2">
                        register

                      </button>
                    </Link>

                    <Link to={'/login'}>
                      Login
                    </Link>
                  </>
                )
              }

              {/* <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
        <a
          class="btn btn-dark px-3"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          ><i class="fab fa-github"></i
        ></a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;