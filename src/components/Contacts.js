import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

import './contacts.css';
import {motion} from 'framer-motion';
export default function Contacts() {
  return (
   <motion.div  initial={{opacity:0}}
   animate={{opacity:1}} transition={{duration:.4,stiffness:120}} className='contacts'>
  <h2 class="md-10 text-center">Contactez-nous</h2>
   <div className='box '>
    <form>
   <div class="mb-3 p-5">

   <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Email"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Nom complet"/>
    </div>
  </div>
</div>
<div class="mb-3 px-5 p-2"  style={{height: '270px'}}>
 <textarea style={{height:'200px'}} class="form-control" id="exampleFormControlTextarea1"  placeholder="Votre message"rows="3"></textarea>
 </div> 
 <div class="col-md-15 text-center p-10"  >

 <input className='btn' value="Envoyer"/></div> 

  </form>

   </div>
   </motion.div>
  )
}
