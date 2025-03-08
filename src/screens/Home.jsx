import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Slider from '../components/Slider';


export default function Home() {

  const [foodItem, setFoodItem] = useState([]);
  const [foodCat, setFoodCat] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/displaydata", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    //console.log(response[0],response[1])
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <div> <Navbar /> </div>
      <div><Slider /></div>

      <div><Card></Card></div>

      <div className='container'>
        {
          foodCat.length > 0
            ? foodCat.map((cat) => {
              return (
                <div key={cat._id} className='row mb-3'>
                  <div key={cat._id} className='fs-4 m-3'>
                    {cat.categoryName}
                  </div>
                  <hr></hr>
                  {foodItem.length > 0
                    ? foodItem.filter((item) => item.categoryName === cat.categoryName)
                      .map(filterItems => {
                        return (
                          <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                            <Card foodName={filterItems.name}
                              options={filterItems.options ? filterItems.options[0] : {}}
                              imgSrc={filterItems.img}
                            ></Card>
                          </div>
                        )
                      })
                    : <div>No related data found. </div>}
                </div>
              )
            })
            : ""
        }
      </div>


      <div> <Footer></Footer> </div>
    </div>
  )
}


