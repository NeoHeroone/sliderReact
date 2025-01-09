import React, { useState } from "react";
import "./App.css";

const App = () => {
  const imgs = [
    {
      img: "https://s3-alpha-sig.figma.com/img/9cfb/f253/f82a94e0b9bea4dcddfe3583e09c49cd?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F9uyxcjyUyE8NonqA2ubD6osSTaJ7dwWV~n8tSTRxX6iwybcnv4w9f~n2mRXz6hR4utu2RRuwhp9PUnEBtlaSLPSvK-FGwxsLQWMlfEuPvTg6RF5j4HEVxtsge7NSsRC3yDnHLLsT-Hf6leKujsHkL3C-0mJuXb5cExGHSVrUwyZ9Lpl0-drmHMG42d7-EbljJr6hAaag7cH1cJ3JyONK7d8PUMuUvx85-kJZ6xlEkMvms88CvQ7y91-0iNC8HwzxLLYAip0Yy0rNFFCO-4o-61qlhMEjddUpTeqaXv5MUHHhklsvRqgJBBWfCRI9i~cAq3iGsuX6dwDmshVwD2BhQ__",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/14cb/08e6/f8fec2307198d0634569b6424d94579b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b64s8pkgrIhiJUkYMf3tE8ACmaOHgTdNTSQVAUCRYjXyxwHS9iW3XbeLESOYh5OJMDrG3~ZcUI2n9pCvDHBotY3fspENcIDG2KCLVmpvHDivbnzGkzO8-vavZTgbUFlAGb2fafRzmRR2YC9propbUJ5xWZP9n0sJpPnNVd67sl~Xkf2KGgugOFYUDN0tWAlvt-sGbVxj6KiY0pxN5qRfUkG4rwdHUsQb-FdyrlyqIidGswHOJvhhTGYyvyJhm014xijonPYHC81SURxmOHVt-kUDOmjJGIKXXt-SaZxSzBAMCzPwgoTysNh3a9hectd-q-W6~Fd0vvhbgE6WMtWamw__",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/9e16/ad3c/6a091fe218281f8bf0a44ba28793c08e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~J9eupehLGS7nYz4WHQ2~TaopFzYsLmjRPN3rbRxQyXiFhijZeFPC2vG4lPSfH1~IObt~U0n8WndaLVdhlLzZoVqMQdQUGkxvjqolOFTI2B99T2vimDBmvQD73LVLD5zakTRGxDmrdpCI3fBTWoGXFLPUp38HDAX6Ht-ARYPDSu9QL6EpE0woay-DGX0zfgHMNJ3e0eWVuJ1utUhoYAhWHn-zUIFLhksI0bJouSk-9U~kpqo5hj53jLishOdOwRZrPfepdB2YZNiwQPkU77JMZ4HPOAF-gKds-tO9dpH-37Vr349g8j6oYDPB9wev1QtbEWpIkUAXzaNEY9PncVeQ__",
    },
  ];

  const [imgIndex, setImgIndex] = useState(0);

  const previousImg = () => {
    setImgIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : imgs.length - 1
    );
  };

  const nextImg = () => {
    setImgIndex((prevIndex) =>
      prevIndex < imgs.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="container-content">
      <div className="container">
        <div className="content-box">
          <div className="images-content">
            <img
              src={imgs[imgIndex].img}
              alt="Carousel"
              className="image"
            />
          </div>
          <div>
            <button id="leftArrow" onClick={previousImg}>
              &#60;
            </button>
            <button id="rightArrow" onClick={nextImg}>
              &#62;
            </button>
          </div>
        </div>
        <div className="mini-imgs-content">
          {imgs.map((e, index) => (
            <img
              key={index}
              src={e.img}
              alt={`Thumbnail ${index}`}
              className={imgIndex === index ? "active" : ""}
              onClick={() => setImgIndex(index)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;