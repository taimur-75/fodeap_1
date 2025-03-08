import React from 'react'

export default function Card(props) {

    let options = props.options || {};
    let priceOptions = Object.keys(options);

    return (
            <div className="card m-10" style={{ "width": "20rem","height":"340px"}}>

                <div className='m-4' style={{"width": "16rem","height":"140px"}}>
                <img src={props.imgSrc} alt="Food Item" style={{ width: "100%", height: "100%" }} />
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">{props.foodName}</h5>
                    {/*<p className="card-text">Description about this food.</p>*/}

                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            {priceOptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>

                        <div className='d-inline fs-5 h-100'>Total Price : </div>
                    </div>
                </div>
            </div>
    )
}
