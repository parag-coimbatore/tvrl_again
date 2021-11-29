import React from 'react'
import HeroSection from '../components/HeroSection'

function Home() {
    return (
        <div>
            <h1 className="text-center">Home page</h1>
            <HeroSection />
            <div class="row row-cols-1 row-cols-md-3 g-4 mx-5">
                <div class="col" >
                    <div class="card h-100" style={{ width: '18rem' , alignContent:'center'}}>
                        <img src="/images/img8.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <a href={"http://localhost:3000/services"} class="btn btn-primary ">Go somewhere</a>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100" style={{ width: '18rem' }}>
                        <img src="/images/img8.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <a href={"http://localhost:3000/about"} class="btn btn-primary ">Go somewhere</a>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100" style={{ width: '18rem' }}>
                        <img src="/images/img8.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <a href={"http://localhost:3000/service1"} class="btn btn-primary ">Go somewhere</a>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
