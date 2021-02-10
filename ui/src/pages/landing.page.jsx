import { Header } from "../components/header";
import mainPigi from "./landingImg/mainPigi.png";
import car from "./landingImg/car.png";
import ring from "./landingImg/ring.png";
import airplane from "./landingImg/airplane.png";
import house from "./landingImg/house.png";
import "./landing.page.css";

export function LandingPage() {
  return (
    <>
      <Header />
      <div className="container-xxl landing-container ">
        <div className="row">
          <div className="col mb-5 landing">
            <h1>Family Budget</h1>
            <p>it’s a service that will help you make your dreams come true</p>
            <img src={mainPigi} className="img-fluid" alt="ups" />
            <h2>It’s will be posible</h2>
          </div>
          <div className="row m">
            <div className="media col-6">
              <img src={airplane} className="mr-3 align-self-start" alt="..." />
              <div className="media-body">
                <h2 className="mt-0 ">Media heading</h2>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                </p>
              </div>
            </div>
            <div className="media col-6 ">
              <img src={car} className="mr-3 align-self-start" alt="..." />
              <div className="media-body">
                <h2 className="mt-0 ">Media heading</h2>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="media col-6">
              <img src={ring} className="mr-3 align-self-start" alt="..." />
              <div className="media-body">
                <h2 className="mt-0 ">Media heading</h2>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                </p>
              </div>
            </div>
            <div className="media col-6">
              <img src={house} className="mr-3 align-self-start" alt="..." />
              <div className="media-body">
                <h2 className="mt-0 ">Media heading</h2>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
