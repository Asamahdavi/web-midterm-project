import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AboutCards from "./AboutCards";

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
      <div className="pl-14 my-32 justify-between ">
        <Slider {...settings}>
          <div>
            <h3>
              <AboutCards
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
