import React, { useState } from "react";
import { useEffect } from "react";
import { getAllProductApi, testApi } from "../../apis/Api";
import { Link } from "react-router-dom";
// function homepage() tala ko same
const Homepage = () => {
  const[products, setproducts]=useState([]);
  useEffect(() => {
    getAllProductApi().then(res => {
        setproducts(res.data)
    }).catch(err => {
        console.log(err)
    })

}, [])

  return (
    <div>
      <div  class="main-banner">
      <div
        id="carouselBasicExample"
        class="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner d-flex ">
          <div class="carousel-item active " >
            <div class="overlay"> </div>
            <img
              src="https://www.adventurepending.com/wp-content/uploads/2022/01/Best-small-hiking-backpacks-for-UK-walking.jpg"
              class="d-block w-100"
              alt="bag on hill"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Welcome to Jhola</h1>
              <h5>Bags That Fit Your Style.</h5>
            </div>
          </div>

          <div class="carousel-item">
          <div class="overlay"> </div>
            <img
              src="https://cdn.thewirecutter.com/wp-content/media/2022/12/laptopbackpacks-2048px-7000-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
              class="d-block w-100"
              alt="Canyon at Nigh"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Choose From Many</h1>
              <h5>Any Color, Any Size, Any Time</h5>
            </div>
          </div>

          <div class="carousel-item">
          <div class="overlay"> </div>
            <img
              src="https://www.theedupreneur.org/wp-content/uploads/2020/06/best-camping-gear.jpg"
              class="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Grab them now</h1>
              <h5>
                Offer available for limited time
              </h5>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>

      <div class="container">
        <h1 className="mt-5 mb-4">Available products</h1>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {
            products.map((product)=>{
              return(
                <Link to={`/product/details/${product._id}`} class="col">
            <div class="card">
              <img src={product.image} class="card-img-top object-cover" alt="Hollywood Sign on The Hill" width={'100px'} height={'220px'} />
              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <h5 class="card-title text-black">{product.name}</h5>
                  <h5 class="card-title text-black">NPR. {product.price}</h5>
                </div>
                <hr />
                <p className="text-black">
                  {product.description}
                </p>
                <button className="btn w-100 btn-outline-black">
                  View more
                </button>
              </div>
            </div>
          </Link>
      
              )
            })
          }
      </div>
      </div>

    </div>
  );
};
export default Homepage;


