// import React, { useRef } from "react";
import classes from "./cards.module.css";
import  toTitleCase  from "../../utils/titleCase";
import { Modal, useModal, ModalTransition } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import CloseIcon from "@material-ui/icons/Close";
const Cards = ({ data, count }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const loadFunction = (data) => {
    try {
      console.log(process.env.PUBLIC_URL);
      return (
        `/Rarity/${data.Collection}/${toTitleCase(data.nft_content !== undefined ? data.nft_content : "")}`
      );
    } catch (error) {
      return null;
    }
  };
  const videoChecker = (data) => {
    let extention = data.split(".")[1];
    return extention === "mp4" ? true : false;
  };
  const handleVideo = (e) => {
    e.preventDefault();
  };
  return (
    <div onClick={openModal} className={classes.container}>
      <div >
        {videoChecker(data.nft_content !== undefined ? data.nft_content : "") ? (
          <video
            onClick={handleVideo}
            width="100%"
            height="100%"
            controls
            poster={loadFunction(data.nft_thumb_nail)}
          >
            <source src={loadFunction(data.nft_content !== undefined ? data.nft_content : "")} type="video/mp4" />
          </video>
        ) : (
          <img src={loadFunction(data)} width="100%" height="100%" alt="" />
        )}
      </div>
      <div style={{ marginTop: "auto", display: "block", flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }}>
        <div className={classes.cardText}>
          <span style={{ background: "none", display: "none" }}>&nbsp;</span>
          {/* <span className={classes.fontSize24}>&nbsp;</span> */}
          <span style={{ fontSize: "16px", textAlign: "center" }}>"{data.nft_name}"</span>
          <span></span>
        </div>
        <div className={classes.bottomDiv}>
          <span style={{ background: "none", fontSize: "14px", color: 'white', border: "2px solid white", borderRadius: "10px" }}>
            {data.nft_buy_now}{"%"}
            {/* <img className="ml-4" src={blueBars} alt="" width="10px" /> */}
          </span>
          {/* <span>1</span> */}
          {/* <span>
          {data.nft_buy_now}{" "}
          <img className="ml-4" src={blueBars} alt="" width="10px" />
        </span> */}
        </div>
      </div>
      <Modal
        id="any-unique-identifier"
        modalClassName="any-unique-identifier"
        isOpen={isModalOpen}
        transition={ModalTransition.BOTTOM_UP}

      >
        <div
          style={{ position: "absolute", right: "5px", top: "5px" }}
          onClick={closeModal}
          className="d-flex justify-content-end align-items-center cursor-pointer"
        >
          <CloseIcon style={{ color: "black", fontSize: "28px" }} />
        </div>
        <div >
          <div >
            {videoChecker(data.nft_content !== undefined ? data.nft_content : "") ? (
              <video width="100%" height="100%" poster={loadFunction(data.nft_thumb_nail)} controls>
                <source src={loadFunction(data.nft_content !== undefined ? data.nft_content : "")} type="video/mp4" />
              </video>
            ) : (
              <img src={loadFunction(data)} width="100%" height="100%" alt="" />
            )}
          </div>
          <div className={classes.cardText}>
            <span style={{ background: "none" }}>&nbsp;</span>
            {/* <span className={classes.fontSize24}>&nbsp;</span> */}
            <span className={classes.fontSize24}>"{data.nft_name}"</span>
            <span></span>
          </div>
          <div className={classes.bottomDiv}>
            <span style={{ background: "none", fontSize: "24px", color: 'black', border: "2px solid black", borderRadius: "10px" }}>
              {data.nft_buy_now}{"%"}
              {/* <img className="ml-4" src={blueBars} alt="" width="10px" /> */}
            </span>
            {/* <span className={classes.fontSize24}>1</span> */}
            {/* <span className={classes.fontSize24}>
              {data.nft_buy_now}{" "}
              <img className="ml-4" src={blueBars} alt="" width="18px" />
            </span> */}
          </div>
        </div>
      </Modal>
    </div >
  );
};

export default Cards;
