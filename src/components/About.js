import Header from "./navbar";
import Footer from "./Footer";
import Carsoul from "./carsoul";
import "../style/animation.css";
export default function About() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section className=" container pt-6">
        <div className="item">
          <h1 className="text-6xl  text-black  text-left p-36">
            A little bit about me and how I became the designer I am today
          </h1>
        </div>
      </section>
      <section className="container">
        <div className=" item p-8 ">
          <Carsoul className=" overflow-hidden" />
        </div>
        <div className="item">
          <div className="grid  md:grid-cols-2 gap-2 justify-between  sm:grid-cols-1">
            <div>
              <h1 className=" pl-20 py-7  text-black  text-left text-2xl font-bold">
                What I can do for you
              </h1>
              <p className="pl-20 text-left">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p className="pl-20 text-left">
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div>
              <h1 className="pl-20  text-black  py-7 text-left text-2xl font-bold">
                How i usually work
              </h1>
              <p className="pl-20 text-left">
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
              <p className="pl-20 text-left">
                {" "}
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
            <div>
              <h1 className=" text-black  pl-20 py-7 text-left text-2xl font-bold">
                Skills
              </h1>
              <p className="pl-20 text-left">
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in, viverra quis, feugiat a, tellus.
              </p>

              <p className="pl-28 text-left">
                Nullam feps eu pede molps pretium.
              </p>
              <p className="pl-28 text-left">
                nteger tincidunt. Cras dapibusc onsectetuer adipiscing ep.
              </p>
              <p className="pl-28 text-left">Vivamus elementum semper nisi.</p>
              <p className="pl-28 text-left">
                Lorem ipsum dolor sit amet. Aenean commodo pgula eget dolor.
              </p>

              <p className="pl-20 text-left">
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim.
              </p>
            </div>

            <div className="grid grid-row-4 ">
              <div className="pl-28 pt-14">
                <h1 className="text-left pb-3  text-black  ">LOGO DESIGN</h1>
                <div className=" h-1 w-3/4 bg-gray-300">
                  <div className="h-full w-full bg-black "></div>
                </div>
              </div>

              <div className="pl-28 pt-14">
                <h1 className="text-left pb-3  text-black ">BRAND DESIGN</h1>
                <div className=" h-1 w-3/4 bg-gray-300">
                  <div className="h-full w-3/4 bg-black "></div>
                </div>
              </div>

              <div className="pl-28 pt-14">
                <h1 className="text-left pb-3  text-black ">WEB DESIGN</h1>
                <div className=" h-1 w-3/4 bg-gray-300">
                  <div className="h-full w-2/4 bg-black "></div>
                </div>
              </div>

              <div className="pl-28 pt-14">
                <h1 className="text-left pb-3  text-black  ">
                  CONTENT CREATION
                </h1>
                <div className=" h-1 w-3/4 bg-gray-300">
                  <div className="h-full w-32 bg-black "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
