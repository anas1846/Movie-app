import spidermanImg from './assets/spider.jpg'
import netflixImg from './assets/Netflix.png'
import profileImg from './assets/profile.png'
import { useState } from "react";

import {data,Button} from './data.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass ,faBell ,  faThumbsUp ,faAngleRight   } from '@fortawesome/free-solid-svg-icons';
import EpisodeSlider from './scroll'
// import Slider from './Slide'
import Slide from './Slide';
import Slider from './Slider';
import Adventure from './Advent.jsx';



const Home = () => {
const [active, setActive] = useState(0);

  return (
    <div className='bg-black  text-white'  style={{fontFamily:
      "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif"}}>
 <div
  className="   h-screen w-full bg-cover bg-center relative text-white"
  style={{ backgroundImage: `url(${spidermanImg})`, width:'100%',height:'100vh', objectFit:'cover', fontFamily:
      "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif", }}
  

>
  <div className="  absolute inset-0 bg-black/40  ">
  <div  className="   p-10 flex columns items-center justify-between "   >
<div className=' h-5  flex columns-1 justify-between w-1/2  items-center'>
  <div className="logo   "><h1 className='text-3xl  font-black  text-red-600 '  style={{
    fontFamily:
      "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif",
  }}  >NETFLIX</h1>


  </div>
  <ul className='text-white flex columns-1 gap-10'>
  <li>Home</li>
  <li>Movies</li>
  <li>Docomentrys</li>
  <li>My list</li>
</ul>
 </div>
 <div className='flex columns-1 gap-5'>
    <FontAwesomeIcon 
  icon={faMagnifyingGlass} 
  style={{ color: "rgb(255, 255, 255)", width:'20px',height:'20px' }} 
/>
<FontAwesomeIcon icon={faBell} style={{ color: "rgb(255, 255, 255)",width:'20px',height:'20px'}} />

<div>
  <img src={profileImg} alt="" style={{width:'25px',height:'25px', objectFit:'cover',
    borderRadius:'20px'
  }} />
</div>
  </div>
 </div>
 <div className='p-10  ' >
  <div className='flex items-center h-1/2 mb-20 flex-row'>
  <div> 
    <h2 className='text-xl text-white/90 mb-4'>NETFlIX ORGIANIAL</h2>
    <h1  className='text-6xl font-black text-white/90 mb-6 ' >Spider Man</h1>
    <p className='w-80 text-white/90  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sed est vitae! Doloremque hic alias expedita maiores cum, </p>
   <div className='mt-4  flex columns-1 items-center gap-10'>  
 <button className='bg-red-600 pt-2 pb-2 pl-12 pr-12 rounded-2xl  '>Play</button>
 <FontAwesomeIcon icon={faThumbsUp} style={{ color: "red", width:'25px',height:'25px' }}   />
 
<FontAwesomeIcon
  icon={faThumbsUp}
  rotation={180}
  className="text-white text-2xl"
/>
    </div>
  </div>
  </div>
<div>
  <div>


  </div>
</div>

<EpisodeSlider/>
 </div>



  </div>
 
</div>
<div className='p-10 '>
<h1 className='text-2xl font-bold'>Continue Watching</h1>
<Slide/>
<div   className='flex items-center justify-center  '>
  <div className='flex flex-row border-b border-white/20  '  >

 {
  data.map((item, index) => (
    <div key={index}  onClick={() => setActive(index)}
      className={`cursor-pointer  border-b-2 transition-all duration-300
        pb-10 p-15
            ${
              active === index
                ? "border-red-600"
                : "border-transparent hover:border-red-600"
            }`}>
      <h1 className='text-4xl  '>{item.title}</h1>
    </div> 
  ))
}
  </div>


</div>




</div>


<div className='flex items-center justify-center  gap-12'   >
<Button>Action</Button>
<Button>Comedy</Button>
<Button>Drama</Button>
<Button>War</Button>
<Button>Adventure</Button>
<Button>Crime</Button>
 <FontAwesomeIcon icon={faAngleRight} style={{ color: "white" , height:'25px'}} />
</div>
<div className='mt-20'>
<div className='px-15 '>
<h1 className='text-2xl font-bold'>Actions Movies</h1>
<Slider/>
</div>
<div className='px-15 '>
<h1 className='text-2xl font-bold'>Adventure Movies </h1>
<Adventure/>
</div>

</div>
<div className='bg-white p-5 text-black/70'>
  <div className='mb-3'><img src={netflixImg}  className='h-[80px] w-[80px]' alt="" /></div>
  <div className='flex flex-columns jus gap-20 p-2'>
    <ul>
      <li>Audio and subtitle</li>
      <li>Media Center   </li>
      <li>Privacy </li>
      <li>Contact us  </li>
    </ul>
    <ul>
      <li>Audio desription</li>
      <li>Investor relation</li>
      <li>Legal notice</li>
    </ul>
    <ul><li>Audio Description</li>
    <li>Jobs</li>
    <li>Cookies Preference</li></ul>
    <ul><li>Gift card</li>
    <li>Terms of use</li></ul>
  </div>


</div>


</div>

  )
}

export default Home