import logo from "./assets/logo.png";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";

function App() {
  return (
    <>
      <div className="container">
        <a href="#" className="logo-con">
          <img className="logo" src={logo} alt="cri-flueid system logo" />
        </a>

        <div className="grid">
          <div className="award-con">
            <img className="award" src={image1} alt="award photo" />
          </div>
          <div className="right-con">
            <h4>
              C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h4>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <div className="gifting-award">
              <img src={image2} alt="people holding award" />
            </div>
            <p>
              Government of India has awarded the{" "}
              <span>"National Energy Conservation Award 2018" </span>. Mr. G.
              Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>

        <div className="all-tools-con">
          <h4>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.{" "}
          </h4>
          <div className="equipment-con">
            <img src={image3} alt="tools and equipment photo" />
            <p>
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors C.R.I. FLUID SYSTEMS PRODUCTS CATER TO
              DIVERSE SEGMENTS
            </p>
          </div>
        </div>

        <div className="line"></div>

        <div className="conclusion">
          <h4>C.R.I FLUID SYSTEM PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          <p>
            CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA
            SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING
            FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE
            FIGHTING AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </div>

      <footer>
        <a href="#">
          <i className="fas fa-phone"></i>
          Toll free <span>18002001234</span>
        </a>
        <a href="https://facebook.com/cripumps">
          <i className="fab fa-facebook"></i>
          www.facebook.com/cripumps
        </a>
        <a href="https://crigroups.com">
          <i className="fas fa-globe"></i>
          www.crigroups.com
        </a>
      </footer>
    </>
  );
}

export default App;
