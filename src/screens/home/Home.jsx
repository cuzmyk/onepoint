import Button from "../../components/Button/Button";
import "./style.css";
import psperm from "../../images/pinksperm.png";
import bbac1 from "../../images/bluebacterium.png";
import bbac2 from "../../images/bluebacterium2.png";
import bbac3 from "../../images/bluebacterium3.png";
import bbac4 from "../../images/bluebacterium4.png";

const Home = ({ setScrollTo }) => {
  return (
    <div className="home">
      <img
        src={bbac4}
        alt="bacterium"
        style={{
          position: "absolute",
          width: "214px",
          height: "115px",
          top: "72px",
          left: "-88px",
          objectFit: "cover",
        }}
      />
      <img
        className="orbit-anim_image"
        src={bbac2}
        alt="bacterium"
        style={{
          position: "absolute",
          width: "228px",
          height: "224px",
          top: "641px",
          left: "542px",
          objectFit: "cover",
        }}
      />
      <img
        src={psperm}
        alt="bacterium"
        style={{
          position: "absolute",
          width: "590px",
          height: "91px",
          top: "200px",
          left: "410px",
          objectFit: "cover",
          zIndex: 2,
        }}
      />
      <img
        src={psperm}
        alt="bacterium"
        style={{
          position: "absolute",
          width: "413px",
          height: "auto",
          top: "693px",
          left: "-134px",
          objectFit: "cover",
          zIndex: 2,
          transform: "rotate(160deg)",
          filter: "blur(5px)",
        }}
      />
      <img
        className="orbit-anim_image"
        src={bbac3}
        alt="bacterium"
        style={{
          position: "absolute",
          width: "62px",
          height: "57px",
          top: "61px",
          left: "745px",
          objectFit: "cover",
        }}
      />
      <img
        className="orbit-anim_image"
        src={bbac3}
        alt="bacterium"
        style={{
          position: "absolute",
          width: "73px",
          top: "533px",
          left: "22px",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <img
        src={bbac3}
        alt="bacterium"
        style={{
          position: "absolute",
          width: "60px",
          top: "650px",
          left: "350px",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.6,
          filter: "blur(10px)",
        }}
      />
      <img
        src={bbac3}
        alt="bacterium"
        style={{
          position: "absolute",
          width: "60px",
          top: "50px",
          right: "40px",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.6,
          filter: "blur(10px)",
        }}
      />
      <img
        className="orbit-anim_image"
        src={bbac1}
        alt="bacterium"
        style={{
          position: "absolute",
          width: "110px",
          height: "113px",
          top: "200px",
          left: "860px",
          objectFit: "cover",
          zIndex: 3,
        }}
      />

      <h2 className="home_greetings">Привет,</h2>
      <h1 className="home_title">
        это <b>не </b>
        коммерческое задание
      </h1>
      <div className="home_btn">
        <Button
          text={"Что дальше?"}
          symbol={"→"}
          onClick={() => setScrollTo(1)}
        />
      </div>
    </div>
  );
};

export default Home;
