import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import "./clubs.css";
import { FaSearch } from "react-icons/fa";
import {BiFilter} from "react-icons/bi"
import { useInView } from "react-intersection-observer";
import { useEffect ,useState} from "react";
import { useAnimation } from "framer-motion";
import img1 from "../images/received_630585981340841-1024x576.jpg";
import img2 from "../images/josh-calabrese-zcYRw547Dps-unsplash (1).jpg";

const Clubs = () => {
  const[fix,setfix]=useState(false)
  function setfixed(){
 
    setfix(true);
    console.log(fix)
  
  }
  
  return (
    <div className="clubs">
      <h3 className="tx">Les Catégories</h3>

      <div className="row">
      <div>
            <form class="input-group mb-2 col-md-12">
            <div class="input-group-append">
             <button class="btn-3"><span><BiFilter/></span></button>  
                <select
                className="btn-2 btn-default dropdown-toggle"
                data-toggle="dropdown"
              >
                <option>Catégorie</option>
                <option>Karaté</option>
                <option>Judo</option>
                <option> taekwondo</option>
                <option>kung fu</option>
                <option>Gymnastique</option>
                <option>kickboxing</option>
              </select>
              <select
                id="mystuff"
                className="btn-2 btn-default dropdown-toggle"
                data-toggle="dropdown"
                onChange={e => setfixed(e.target.value)}>
              
                <option value="1">Governorat</option>
                <option value="2">Ariana</option>
                <option value="3">Béja</option>
                <option value="4">Ben Arous</option>
                <option value="5">Bizerte</option>
                <option value="6">Gabès</option>
                <option value="7">Gafsa</option>
                <option value="8">Jendouba</option>
                <option value="9">Kairouan</option>
                <option value="10">Kasserine</option>
                <option value="11">Kébili</option>
                <option value="12">Le Kef</option>
                <option value="13">Mahdia</option>
                <option value="14">La Manouba</option>
                <option value="15">Médenine</option>
                <option value="16">Monastir</option>
                <option value="17">Nabeul</option>
                <option value="18">Sfax</option>
                <option value="19">Sidi Bouzid</option>
                <option value="20">Siliana</option>
                <option value="21">Sousse</option>
                <option value="22">Tataouine</option>
                <option value="23">Tozeur</option>
                <option value="24">Tunis</option>
                <option value="25">Zaghouan</option>
              </select>
              <select
                id="mystuff"
                className="btn-2 btn-default dropdown-toggle"
                data-toggle="dropdown"
                style={fix?{display:'inline-block'}:{display:'none'}}
              >
                <option value="1">Région</option>
              
              </select>
              
              </div>
              <input
                type="text"
                class=" search-input text form-control"
                placeholder="Rechercher"
                
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn-search" type="button">
                  
                  <span>
                    <FaSearch />
                  </span>
                </button>
              </div>
            </form>
          </div>
     

         
        
      </div>
      <section className="clubs">
        <div className="clb">
          <img src={img2} alt="image" />
          <h3
            style={{
              marginLeft: "100px",
              position: "absolute",
              top: "230px",
              fontFamily: "Libre Baskerville serif",
              fontSize: "30px",
            }}
          >
            Karaté
          </h3>
          <button
            style={{ marginLeft: "150px", position: "absolute", top: "280px" }}
            className="btn "
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="/Details"
            >
              Détails
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Clubs;