import Navbar from './navbar';
import Footer from './Footer';
import Cards from './Cards';
import icon from "../img/1.jpg";
import icon2 from "../img/2.jpg";
import icon3 from "../img/3.jpg";
import icon4 from "../img/4.jpg";
import icon6 from "../img/6.jpg";
import icon7 from "../img/7.jpg";
import icon8 from "../img/8.jpg";
import icon9 from "../img/9.jpg";
import icon10 from "../img/10.jpg";
import icon13 from "../img/13.jpg";
import icon12 from "../img/14.jpg";
import icon17 from "../img/17.jpg";
import icon5 from "../img/5.jpg";
import Typical from 'react-typical';
export default function Home() {

    return(
        <div>
        <Navbar/>
            <section className='pt-6 grid  p-12 '>
            
                <h1 className='text-6xl text-left '>
                  
                Hi! I am Max and this is my portfolio. I can help you build a
        <Typical   className="text-6xl p-0 col-span-2 text-left"
             steps={[
                     'thriving business.',
                  5000,
                  'beautiful logo',
                  5000,
                  'successfull brand ',
                  5000,
        
                ]}
                // wrapper="p"
                loop={Infinity}
        />
                Don’t be shy, get in touch!
                </h1>
            </section>

      
        <div className='flex  pl-16'>
        <div class='container'>
 

        <div className="item  p-16 grid content-center
         justify-evenly items-center
          grid-cols-5  py-14 px-0">
       <Cards iconsrc={icon4}/>
        <Cards iconsrc={icon}/>
        <Cards iconsrc={icon2}/>
        <Cards iconsrc={icon3}/>  
        <Cards iconsrc={icon12}/>
        <Cards iconsrc={icon3}/>
        <Cards iconsrc={icon17}/>
        <Cards iconsrc={icon7}/> 
        <Cards iconsrc={icon2}/>
        <Cards iconsrc={icon13}/>
        <Cards iconsrc={icon8}/>
        <Cards iconsrc={icon5}/>
        <Cards iconsrc={icon10}/> 
        <Cards iconsrc={icon6}/>
        <Cards iconsrc={icon9}/>
        </div>
        </div>
        </div> 
        <Footer/>
         </div>
    )
}