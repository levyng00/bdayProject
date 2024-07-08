import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import AmazingAnim from "../animation/amazingAnim/amazing";
import "./about.scss";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { aboutData } from "./aboutData";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Puzzle from "../puzzle/puzzle";
import GiftAnim from "../animation/giftAnim/giftAnim";
import ScissorImg from "../../assets/scissor.svg";
import cardImg from "../../assets/card.png";
import patternImg from "../../assets/pattern.png";
import GiftOpenImg from "../../assets/giftopen.png";
import Display from "../display/Display";
import Icon from "../icon/Icon";
import letterClosedImg from "../../assets/letterclosed.png";
import letterOpenedImg from "../../assets/letteropen.png";
import letter from "../../assets/letter.png";

const About = () => {
  const [openLetter, setOpenLetter] = useState(true);
  const [activeAnim, setActive] = useState(0);
  const [solved, setSolved] = useState(false);
  const [scissor, setScissor] = useState(false);
  const [message, setMessage] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [toggleCard, setToggleCard] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const toggleCardHandler = () => {
    setToggleCard(!toggleCard);
    console.log("working");
  };
  const handleLeftArrowClick = () => {
    const newActive = activeAnim - 1;
    setActive(newActive);
  };
  const handleRightArrowClick = () => {
    const newActive = activeAnim + 1;
    setActive(newActive);
  };
  const handleDownArrowClick = () => {
    setActive(5);
  };
  const scissorFound = () => {
    setScissor(true);
  };
  const isOpenHandler = () => {
    if (scissor) {
      setGiftOpen(true);
    }
  };
  const letterOpenHandler = () => {
    setOpenLetter(false);
    console.log("sjdasdis");
  };
  const letterCloseHandler = () => {
    setOpenLetter(true);
  };
  return (
    <>
      <div className="about-container">
        <div className="about">
          <>
            {activeAnim < 5 && (
              <>
                {" "}
                <div className="amazing">
                  <h1 className="btn-heading red">
                    <span className="btn-heading  number">
                      {aboutData[activeAnim].number}
                    </span>{" "}
                    {aboutData[activeAnim].heading}
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "2em",
                    }}
                  >
                    {activeAnim >= 1 && (
                      <FaArrowAltCircleLeft
                        className="arrow-left"
                        onClick={handleLeftArrowClick}
                      />
                    )}
                    {activeAnim < 4 && (
                      <FaArrowAltCircleRight
                        className="arrow-right"
                        onClick={handleRightArrowClick}
                      />
                    )}
                  </div>
                </div>
                {aboutData[activeAnim].anim}
              </>
            )}
          </>
        </div>
        {activeAnim === 4 && (
          <>
            <FaArrowAltCircleDown
              onClick={handleDownArrowClick}
              className="scrolldown"
            />
          </>
        )}
        {/* {!solved && activeAnim > 4 && (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1em",
                alignItems: "center",
                marginBottom: "4em",
              }}
            >
              <Puzzle solved={solved} setSolved={setSolved} />
            </div>
          </>
        )} */}
        {activeAnim > 4 && (
          <>
            {giftOpen === false ? (
              <Draggable>
                <div
                  className="draggable-container"
                  style={{
                    height: "500px",
                    width: "500px",
                    position: "relative",
                    zIndex: "10",
                  }}
                  onClick={isOpenHandler}
                >
                  <GiftAnim
                    scissor={scissor}
                    setScissor={setScissor}
                    message={message}
                    setMessage={setMessage}
                  />
                </div>
              </Draggable>
            ) : (
              <>
                {!isCorrect && (
                  <img src={GiftOpenImg} alt="giftopen" className="gift-open" />
                )}
                <Display
                  img={patternImg}
                  scissor={scissor}
                  setScissor={setScissor}
                  setMessage={setMessage}
                  text="Card Found!!!"
                  item="card"
                  toggleCard={toggleCard}
                  openLetter={openLetter}
                  setOpenLetter={setOpenLetter}
                  isCorrect={isCorrect}
                  setIsCorrect={setIsCorrect}
                />
                {isCorrect && (
                  <div className="letter-closed">
                    {openLetter ? (
                      <img
                        className="letter-closed"
                        src={letterClosedImg}
                        alt="letter-closed"
                        onClick={letterOpenHandler}
                      />
                    ) : (
                      <div onClick={letterCloseHandler}>
                        <img
                          className="letter-open"
                          src={letterOpenedImg}
                          alt="letter-open"
                        />
                        {/* <img className="letter" src={letter} alt="letter" /> */}
                        <div className="letter">
                          <p>Hey Pumpkin, Happy Birthday!</p>
                          <p>
                            You're 21 today and you may think that you're
                            getting older but to me you are still my baby
                            hehehe.. I know that I have been making you stressed
                            out alot these days and adding more problems in your
                            life than before but I hope you could forgive me for
                            being such a pain in the ass and i know you have
                            been working really hard for your job and all and
                            stress gets to you sometimes, just know that I
                            gotchuuu and you don't have to worry about a single
                            thing...
                          </p>
                          <p>
                            I don't have much to say but I'll let you know that
                            I love youu Thaingam Thaimei,and you're the best
                            thing that ever happened to me...
                          </p>
                          <p>
                            And for today, let's forget everything and have some
                            fun shall we 🤩🤩??
                          </p>
                          <p className="letterFooter">-Levy</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
            {!scissor && <div className="scissor" onClick={scissorFound}></div>}
            {!isCorrect && (
              <div className="icon-container">
                {scissor && <Icon img={ScissorImg} name="scissor" />}
                {giftOpen && (
                  <Icon
                    img={cardImg}
                    name="card"
                    toggleCardHandler={toggleCardHandler}
                  />
                )}
              </div>
            )}
            {toggleCard && (
              <Display
                img={patternImg}
                scissor={scissor}
                setScissor={setScissor}
                setMessage={setMessage}
                text="Card Found!!!"
                item="card"
                toggleCard={toggleCard}
                openLetter={openLetter}
                setOpenLetter={setOpenLetter}
                isCorrect={isCorrect}
                setIsCorrect={setIsCorrect}
              />
            )}
            <>
              {!scissor ? (
                message === true ? (
                  <h1 className="gift-message">
                    The present has been wrapped very tightly, you'll need
                    something sharp to open it{" "}
                  </h1>
                ) : null
              ) : (
                <>
                  <Display
                    img={ScissorImg}
                    scissor={scissor}
                    setScissor={setScissor}
                    setMessage={setMessage}
                    text="Scissor Found!!! Now you can open your present <3"
                    item="scissor"
                    toggleCard={toggleCard}
                    openLetter={openLetter}
                    setOpenLetter={setOpenLetter}
                    isCorrect={isCorrect}
                    setIsCorrect={setIsCorrect}
                  />
                </>
              )}
            </>
          </>
        )}
      </div>
    </>
  );
};

export default About;
