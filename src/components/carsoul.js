import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AboutCards from "./AboutCards";
import i1 from "../img/wh (6).jpeg";
import i5 from "../img/wh (5).jpeg";
import i6 from "../img/wh (3).jpeg";
import i3 from "../img/wh (2).jpeg";
import i2 from "../img/wh (7).jpeg";

export default class carsoul extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="pl-14 my-32 justify-start h-80 ">
        <Slider {...settings}>
          <div>
            <h3>
              <AboutCards
              className="w-1/3 "
              img={i1}
                title={"Birth"}
                props={
                  " I was born in a small town in Texas called Lorem. Ipsum dolor sit amet, consectetuer adipiscing elitdolor sit. Aenean commodo ligula eget dolor."
                }
              />
            </h3>
          </div>
          <div>
            <h3>
              <AboutCards
               img={i5}
               
                title={"First Steps"}
                props={
                  "I took my first steps in enim justo, rhoncus ut, imperdiet a, dolor sit venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
                }
              />
            </h3>
          </div>
          <div>
            <h3>
              <AboutCards
              img={i6}
                title={"College"}
                props={
                  "I started college in 2001. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus."
                }
              />
            </h3>
          </div>
          <div>
            <h3>
              <AboutCards
              img={i3}
                title={"Art Degree"}
                props={
                  "My first art degree I received in ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus."
                }
              />
            </h3>
          </div>
          <div>
            <h3>
              <AboutCards
              img={i2}
                title={"First Employment"}
                props={
                  "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean, eleifeem ante, dapibus in, viverra quis, feugiat a, tellus."
                }
              />
            </h3>
          </div>
          <div>
            <h3>
              <AboutCards
              img={i5}
                title={"Self Employment"}
                props={
                  "Cras dapibus. Vivamus elementum semper nisi. Uat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus."
                }
              />
            </h3>
          </div>
          <div>
            <h3>
              <AboutCards
              img={i1}
                title={"Founded my Company"}
                props={
                  "Cras dapibus. Vivamus elementum semper nisi. Uat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus."
                }
              />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
