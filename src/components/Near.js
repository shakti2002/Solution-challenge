import React from 'react'
import './Near.css';

export default function Near() {
    let author="";
    let date ="";
    let newsurl="";
    let title ="";
    let desc="";
  return (
    <div className='.card-body'>
<div className=".card-body row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://res.cloudinary.com/dywkbcfp5/image/upload/w_200,h_200,c_thumb,g_face,f_auto,r_max,bo_2px_solid_white/v1694510421/ks50qi1sxon6kmxt1qha.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mrs Gunjan Arya</h5>
        
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div></div>
 )
}
