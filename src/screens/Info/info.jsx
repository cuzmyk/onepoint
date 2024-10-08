import MessageScroll from "../../components/Scroll/MessageScroll";
import "./style.css";
import psperm from "../../images/pinkspermgroup.png";

const Info = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut
            diam quam nulla. Mauris in aliquam sem fringilla ut morbi tincidunt.
            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis.
            Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
            dignissim diam quis enim lobortis. Est sit amet facilisis magna.
            Neque laoreet suspendisse interdum consectetur libero id. Nec
            ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut
            porttitor leo a diam sollicitudin tempor id. Euismod quis viverra
            nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit
            amet massa vitae tortor condimentum lacinia. Et malesuada fames ac
            turpis egestas integer eget. Elementum pulvinar etiam non quam lacus
            suspendisse faucibus interdum posuere. 
            
            Amet justo
            donec enim diam vulputate ut pharetra sit. Risus ultricies tristique
            nulla aliquet enim tortor at auctor. Velit sed ullamcorper morbi
            tincidunt ornare massa. Quis hendrerit dolor magna eget est lorem
            ipsum. Etiam dignissim diam quis enim. Gravida neque convallis a
            cras. Ut enim blandit volutpat maecenas volutpat. Mauris sit amet
            massa vitae tortor condimentum lacinia quis vel.`;
  return (
    <div className="info">
      <img
        src={psperm}
        alt="sperm"
        style={{
          position: "absolute",
          top: "74px",
          left: "365px",
          objectFit: "cover",
        }}
      />
      <h2 className="info_title">
        Текст <br /> сообщения
      </h2>
      <MessageScroll text={text} />
    </div>
  );
};

export default Info;
