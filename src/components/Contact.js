import Header from "./navbar";

import Footer from "./Footer";
export default function Contact() {

    return(<>
    <Header/>
    <section>
    <h1 className='text-6xl text-left p-36 text-black'>
    Contact – Get in touch! I am currently available for contract work
        </h1>
    </section>
    <section>
        <div  className="grid sm:grid-cols-1 xl:grid-cols-2 space-x-24 px-12" >
        <div className="text-left py-4 space-y-3 mb-2">
            <h1 className="text-left text-4xl text-black  font-bold">
            I am located in
            </h1 >
            <h3 className="font-bold text-black ">
            Main Street 1, Williamsville
            </h3>
            <h4>
            Buffalo, USA
            </h4>
            <h3 className="font-bold text-black ">
            office@enfold-minimal.com
            </h3>
            <h4>
            +555 283 784 333
            </h4>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

            </p>
        </div>
        <div>
          
        <form className="w-full  justify-between">
            <h1 className="text-left py-4 text-4xl text-black mb-2 font-bold">Feel free to drop me a mail</h1>
            <div className="grid grid-cols-2 items-start justify-between space-x-3">  
            <div className="">

    

    <div className="py-1 ">
      <input className="bg-gray-200 rounded-sm appearance-none  border border-solid border-gray-300   w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" id="inline-full-name" type="text" placeholder="Name*"/>
    </div>
  </div>
  <div >
    <div className="py-1 ">
      <input className="bg-gray-200 rounded-sm border border-solid border-gray-300 appearance-none   w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" id="inline-password" type="text" placeholder="Email*"/>
    </div>
  </div>
  </div>

  <textarea
    className="
      form-control
      block
      w-full
      px-3
      py-5
      text-base
      font-normal
      text-gray-700
       bg-clip-padding
      border border-solid border-gray-300
      rounded-sm
      transition
      ease-in-out
      bg-gray-200
      m-0
      focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none
    "
    id="exampleFormControlTextarea1"
    rows="6"
    placeholder="Message*"
  ></textarea>
  <div className="items-start flex py-4 ">
       <button className="shadow left-0 rounded-sm bg-black hover:bg-violet-300 hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 " type="button">
        Submit
      </button>
  </div>
     
   
</form>
        </div>
        </div>
    </section>
    <section className="items-center justify-center flex" >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="1500" height="450"  frameborder="0" style={{border:0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </section>
    <section>
        <Footer/>
    </section>
    </>)};