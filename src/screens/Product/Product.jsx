import "./style.css";
import bottle from "../../images/bottle.png";
import plate from "../../images/icon_plate.png";
import calendar from "../../images/icon_calendar.png";
import Button from "../../components/Button/Button";
import { useState } from "react";

const Product = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [activeInfo, setActiveInfo] = useState(0);
  const toggleShowInfo = () => setShowInfo(!showInfo);

  const texts = [
    {
      number: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    { number: 2, text: "Faucibus pulvinar elementum integer enim" },
    { number: 3, text: "Faucibus pulvinar elementum integer enim" },
    {
      number: 4,
      text: "Mi bibendum neque egestas congue quisque egestas diam",
    },
    { number: 5, text: "Venenatis lectus magna fringilla urna" },
    { number: 6, text: "Venenatis lectus magna fringilla urna" },
  ];

  return (
    <div className="product">
      {showInfo && (
        <div className="product_blackout">
          <div className="product_cover"></div>
        </div>
      )}
      <div className="product_img">
        <img src={bottle} alt="bottle" />
      </div>
      <div className="product_controls">
        <h2 className="product_title">
          {showInfo ? "Преимущества" : "Ключевое сообщение"}
        </h2>
        {showInfo && (
          <button
            className="product_close-info"
            onClick={() => setShowInfo(!showInfo)}
          ></button>
        )}
      </div>
      <div className="brand">
        <h1
          className="brand_name"
          style={{ marginBottom: showInfo ? "20px" : "94px" }}
        >
          Brend <b>XY</b>
        </h1>
        {showInfo ? (
          <div className="brand_more-info">
            <ul className="info_list">
              {texts.splice(activeInfo * 3, activeInfo * 3 + 3).map((text) => {
                return (
                  <li key={text.number} className="info_item">
                    <h6>0{text.number}</h6>
                    <p>{text.text}</p>
                  </li>
                );
              })}
            </ul>
            <div className="info_pagination">
              <button
                className="pagination_switch"
                onClick={() => {
                  if (activeInfo === 1) {
                    setActiveInfo(0);
                  }
                }}
              ></button>
              <div className="pagination_dots">
                <p
                  className={
                    activeInfo === 0
                      ? "pagination_dot active"
                      : "pagination_dot"
                  }
                ></p>
                <p
                  className={
                    activeInfo === 1
                      ? "pagination_dot active"
                      : "pagination_dot"
                  }
                ></p>
              </div>
              <button
                className="pagination_switch"
                style={{ transform: "rotate(180deg)" }}
                onClick={() => {
                  if (activeInfo === 0) {
                    setActiveInfo(1);
                  }
                }}
              ></button>
            </div>
          </div>
        ) : (
          <div className="brand_shortinfo">
            <div className="brand_block">
              <img src={plate} alt="plate" />
              <p>
                Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
                vestibulum lorem sed risus ultricies
              </p>
            </div>
            <div className="brand_more">
              <div className="brand_block">
                <img src={calendar} alt="calendar" />
                <p>A arcu cursus vitae</p>
              </div>
              <Button
                text={"Подробнее"}
                symbol={"+"}
                onClick={toggleShowInfo}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
