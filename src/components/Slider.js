import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";
import './news.css';
import img1 from '../images/53c54.jpg';
import img2 from '../images/adel_sellimi_1657030641.jpg'
const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (  <section className='news'>
      <h3>Actualités</h3>
      <div className='article'>
      <img src={img1} class="image"/>
      <p className='title'><span>Ons Jabeur</span> s'impose 
      contre Elise Mertens
       à Wimbledon et file en
       quarts de finale</p>
       <p class="description">La Tunisienne Ons Jabeur s'est qualifiée pour les
       quarts de finale de Wimbledon en dominant Elise 
      Mertens (7-6 [9], 6-4), dimanche. Elle affrontera 
      Marie Bouzkova pour une place dans le dernier carré.</p>
      </div>
      <div className='article2'>
      <img src={img2} class="image2"/>
      <p className='title2'><span>Club africain:</span> 
       Bertrand Marchand
       fera-t-il la paire avec Sellimi ?</p>
       <p class="description2">Le président du Club Africain, Youssef El Almi, a indiqué, dans une déclaration accordée à Mosaïque FM, que Adel Sellimi exerce toujours ses fonctions à la tête de la barre technique de l’équipe séniors et que le comité directeur n’a pris aucune décision à son sujet.
      
      </p>
      </div>
          </section> );
    } else {
      return (
        <>
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt="Travel" className="slider__image" />
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;