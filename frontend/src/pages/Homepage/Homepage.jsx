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
    <div className="container mt-5">
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

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://cdn.shopify.com/s/files/1/2726/4990/files/best-work-backpacks.jpg?v=1660667024"
              class="d-block w-100"
              alt="Sunset Over the City"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Welcome to Jhola</h5>
              <p>Bags That Fit Your Style.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://cdn.thewirecutter.com/wp-content/media/2022/12/laptopbackpacks-2048px-7000-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
              class="d-block w-100"
              alt="Canyon at Nigh"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://cdn.shopify.com/s/files/1/2186/5207/collections/Mother_s_day_sale-19.png?v=1683295728"
              class="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <div>
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


