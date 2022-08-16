import React from 'react'


import './contacts.css';
import {motion} from 'framer-motion';
export default function Contacts() {
  return (
    <div className='cnts'>
   <motion.div  initial={{opacity:0}}
   animate={{opacity:1}} transition={{duration:.4,stiffness:120}} className='contacts'>
  <h2 className="md-10 text-center">Contactez-nous</h2>
   <div className='box '>
    <form>
   <div className="mb-3 p-5">

   <div className="row">
    <div className="col-md-6 ">
      <input type="text" className="form-control" placeholder="Email"/>
    </div>
    <div className="col-md-6">
      <input type="text" className="form-control" placeholder="Nom complet"/>
    </div>
  </div>
</div>
<div className="mb-3 px-5 p-2"  style={{height: '270px'}}>
 <textarea style={{height:'200px'}} className="form-control" id="exampleFormControlTextarea1"  placeholder="Votre message"rows="3"></textarea>
 </div> 
 <div className=" btn-nv col-md-12 col-sm-12 text-center"  >

 <input className='btn' value="Envoyer"/></div> 

  </form>

   </div>
   </motion.div></div>
  )
}
