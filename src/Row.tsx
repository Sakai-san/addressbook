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
        className="Row"
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
          <div className="Modal-content">
            <div>
              {user.location.street.number}, {user.location.street.name}
            </div>
            <div>
              {user.location.postcode}, {user.location.city}
            </div>
            <div>{user.location.state}</div>
            <div>{user.phone}</div>
            <div>{user.cell}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Row;
