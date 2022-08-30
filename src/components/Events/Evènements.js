import React, { useEffect } from 'react'
import './eventspage.css';
import img1 from '../../images/Sports_1.jpg';
import img2 from '../../images/Sports_2.jpg';
import img3 from '../../images/Sports_3.jpg';
import img4 from '../../images/Sports_4.jpg';
import img5 from '../../images/Sports_5.jpg';
import img6 from '../../images/Sports_6.jpg';
import img7 from '../../images/Sports_7.jpg';
import img8 from '../../images/Sports_8.jpg';
import img9 from '../../images/Sports_9.jpg';
import img10 from '../../images/Sports_10.jpg';
import img11 from '../../images/Sports_11.jpg';
import img12 from '../../images/Sports_12.jpg';
import axios from 'axios';
export default function Events() {
 const [news, setnews] = React.useState([{id: 0}]);
  const [events, setevents] = React.useState([{id: 0}]);
  const show=()=>{
    axios.get("http://localhost:3000/api/event/")
    .then(response => {
      const events = response.data;
      setevents(events)
      console.log(events)
  
  })};
  
 
  const shownews=()=>{
    axios.get("http://localhost:3000/api/news/")
    .then(response => {
      const news = response.data;
      setnews(news)
      console.log(news)
  
  })};
  useEffect(()=>{
    show()
    shownews()

  }
  ,[]);
  return (
    <div className="content-wrapper">
          <div className="container">
            <div className="col-sm-12">
              <div className="card" data-aos="fade-up">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="font-weight-600 mb-4">
                        Evènements
                      </h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8">
                    {  events.map((e,key)=>{return(
                      <div className="row" key={key}>
                        <div className="col-sm-4 grid-margin">
                          <div className="rotate-img">
                            <img
                              src={"http://localhost:3000/uploadsevent/"+e.Image}
                              alt="banner"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="col-sm-8 grid-margin">
                          <h2 className="font-weight-600 mb-2">
                           {e.Titre}
                          </h2>
                         
                          <p className="fs-15">
                          {e.Description}
                          </p>
                        </div>
                      </div>
                    )})}
                      
                    </div>
                    <div className="latest col-lg-4">
                      <h2 className="mb-4 font-weight-600">
                        Actualités
                      </h2>
                      {
                        news.map((n,key)=>{
                          return( <div className="row" key={key}>
                        <div className="col-sm-12">
                          <div className="border-bottom pb-4 pt-4">
                            <div className="row">
                              <div className="col-sm-8">
                                <h5 className="font-weight-600 mb-1">
                                  {n.Titre}
                                </h5>
                                <p className="fs-13 text-muted mb-0">
                                  <span className="mr-2">{n.Description}</span>
                                </p>
                              </div>
                              <div className="col-sm-4">
                                <div className="rotate-img">
                                  <img
                                    src={"http://localhost:3000/uploadsnews/"+n.Image}
                                    alt="banner"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>)
                        })
                      }
                     
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
