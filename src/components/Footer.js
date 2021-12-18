import "../style/footer.css";
import dribble from "../img/icons8-dribbble-32.png";
import instaIcon from "../img/inst.png";
import ReactTooltip from "react-tooltip";
import linkIcon from "../img/in.png";
import msgIcon from "../img/msg.png";
import fsIcon from "../img/fsf.png";
import twitterIcon from "../img/tw.png";
export default function Footer() {
  return (
    <>
      <section>
        <div className="pt-28  ">
          <div className="flex  pr-24 justify-center ">
            <div className="grid  pl-24 md:grid-cols-3 sm:grid-cols-2 sm:space-x-0 xl:grid-cols-6 space-x-2 justify-center ">
              <button className="btn" data-tip data-for="registerTip">
                <img
                  className="images"
                  alt=""
                  id="TwitterImage"
                  src={twitterIcon}
                  width="25"
                  height="20"
                  title="Follow me on Twitter"
                />
              </button>

              <ReactTooltip id="registerTip" place="top" effect="solid">
                Follow me on Twitter
              </ReactTooltip>

              <button className="btn" data-tip data-for="sec">
                <img
                  className="m-2"
                  alt="img"
                  src={fsIcon}
                  width="25"
                  height="20"
                />
              </button>
              <ReactTooltip id="sec" place="top" effect="solid">
                Follow me on Facebook
              </ReactTooltip>
              <button className="btn" data-tip data-for="third">
                <img
                  className="images"
                  alt="img"
                  src={dribble}
                  width="25"
                  height="20"
                />
              </button>
              <ReactTooltip id="third" place="top" effect="solid">
                Follow me on Dribble
              </ReactTooltip>
              <button className="btn" data-tip data-for="fourth">
                <img
                  className="images"
                  alt="img"
                  src={instaIcon}
                  width="25"
                  height="20"
                />
              </button>
              <ReactTooltip id="fourth" place="top" effect="solid">
                Follow me on Instagram
              </ReactTooltip>
              <button className="btn" data-tip data-for="fifth">
                <img
                  className="m-2"
                  alt="img"
                  src={linkIcon}
                  width="25"
                  height="20"
                />
              </button>
              <ReactTooltip id="fifth" place="top" effect="solid">
                Follow me on Linkin
              </ReactTooltip>
              <button className="btn" data-tip data-for="six">
                <img
                  className="images"
                  alt="img"
                  src={msgIcon}
                  width="25"
                  height="20"
                />
              </button>
              <ReactTooltip id="six" place="top" effect="solid">
                Get in touch
              </ReactTooltip>
            </div>
          </div>

          <h3 className=" m-8  text-black ">subscribe</h3>
          <h4 className="text-gray-400 m-2">
            Get our latest news, tips and tricks
          </h4>
          <label htmlFor="email_id"></label>
          <div className="inline-flex space-x-1 m-8">
            <input
              className="appearance-none  py-2 px-10 block w-full bg-white text-gray-700 border border-black  
              leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="E-Mail"
            />
            <button className="bg-transparent hover:bg-gray-700 text-black font-semibold hover:text-white py-2 px-6 border border-black hover:border-transparent ">
              Submit
            </button>
          </div>
          <br />
          <div className="inline-flex space-x-1 m-2">
            <a
              className="text-gray-400"
              href="https://kriesi.at/themes/enfold-elegant-portfolio/#"
            >
              {" "}
              About &nbsp;
            </a>

            <a
              className="text-gray-400"
              href="https://kriesi.at/themes/enfold-elegant-portfolio/#"
            >
              | Imprint &nbsp;
            </a>

            <a
              className="text-gray-400"
              href="https://kriesi.at/themes/enfold-elegant-portfolio/"
            >
              | Contact&nbsp;{" "}
            </a>

            <a
              className="text-gray-400"
              href="https://kriesi.at/privacy-policy"
            >
              | Privacy Policy{" "}
            </a>
          </div>

          <h6 className="text-gray-400 m-4">© 2018 Enfold by Kriesi</h6>
        </div>
      </section>
    </>
  );
}
