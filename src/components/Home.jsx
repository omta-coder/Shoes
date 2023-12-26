import React from 'react'

const Home = () => {
  return (
    <main className='home container'>
        <div className='text'>
            <h1>YOUR FEET DESERVE <br />THE BEST</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum dolorem <br /> praesentium explicabo omnis corrupti voluptatum consequuntur aliquid odio <br /> neque? Incidunt.</p>
            <div className="btn">
                <button>Shop Now</button>
                <button className='btn2'>Category</button>
            </div>
        </div>
        <div className='shoes-image'>
            <img src="/images/shoes.png" alt="Shoes" />
        </div>
    </main>
  )
}

export default Home