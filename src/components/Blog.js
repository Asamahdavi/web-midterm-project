import Header from "./navbar";
import BlogCards from "./BlogCards";
import Footer from "./Footer";
import im1 from "../img/ii (1).jpg";
import im2 from "../img/ii (2).jpg";
import im3 from "../img/ii (3).jpg";
import im4 from "../img/ii (4).jpg";
import im5 from "../img/ii (5).jpg";
import im6 from "../img/ii (6).jpg";
import im7 from "../img/ii (7).jpg";

export default function Blog() {

    return(

<>
<div>
    <Header/>
    <section>
    <h1 className='text-6xl  text-black  text-left p-36'>
        Blog – Here you can read the latest news regarding our projects and clients
        </h1>
    </section>
    <section>
    <div className="  pl-16 grid content-center space-x-0
         justify-around items-center
          xl:grid-cols-4  sm:grid-cols-2  py-14 px-0">
    <BlogCards img={im1} title={"Invitation !"} prag={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}/>
    <BlogCards img = {im2} title={"Entry with Audio"} prag={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}/>
    <BlogCards img={im3} title={"A small gallery"} prag={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "}/>
    <BlogCards img={im4} title={"A nice entry"} prag={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "}/>
    <BlogCards img={im5} title={"Entry without preview image"} prag={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}/>
    <BlogCards   title={"Entry with Post Format Video "} prag={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}/>
    <BlogCards img={im7} title={"This is a post with post type link"} prag={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "}/>
    <BlogCards img={im6} title={"A nice Post"} prag={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "}/>
   </div>
    </section>
    <section>
<Footer/>
    </section>
</div>

</>
)}