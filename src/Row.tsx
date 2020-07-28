import React, { FunctionComponent, useState } from "react";

import "./Row.css";

const Row = ({ user, reactVirtualizedKey, style }: any) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const clickModalHandler = (e: any) => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div
        style={{ ...style, ...{ display: "flex", alignItems: "center" } }}
        onClick={(e) => setIsModalVisible(true)}
      >
        <img src={user.picture.thumbnail} />
        <span>&nbsp;&nbsp;&nbsp;{reactVirtualizedKey}</span>
        <span>&nbsp;&nbsp;&nbsp;{user.name.first}</span>
        <span>&nbsp;&nbsp;&nbsp;{user.name.last}</span>
        <span>&nbsp;&nbsp;&nbsp;{user.email}</span>
        <span>&nbsp;&nbsp;&nbsp;{user.nat}</span>
      </div>

      {isModalVisible && (
        <div className="Modal">
          <span className="Close" onClick={clickModalHandler}>
            X
          </span>
          <div>&nbsp;&nbsp;&nbsp;{reactVirtualizedKey}</div>
          <div>&nbsp;&nbsp;&nbsp;{user.name.first}</div>
          <div>&nbsp;&nbsp;&nbsp;{user.name.last}</div>
          <div>&nbsp;&nbsp;&nbsp;{user.email}</div>
          <div>&nbsp;&nbsp;&nbsp;{user.nat}</div>
        </div>
      )}
    </>
  );
};

export default Row;
