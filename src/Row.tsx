import React, { FunctionComponent, useState, useRef, useEffect } from "react";

import "./Row.css";

const getViewportHeight = () =>
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

const distanceFromViewportTop = (element: HTMLElement) =>
  element.getBoundingClientRect().top;

const doPlaceAtBottom = (element: HTMLElement) =>
  getViewportHeight() / 2 < distanceFromViewportTop(element) ? true : false;

const Row = ({ user, reactVirtualizedKey, style }: any) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const clickModalHandler = (e: any) => {
    e.stopPropagation();
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (rowRef?.current && doPlaceAtBottom(rowRef.current)) {
      modalRef?.current?.classList?.add?.("ModalBotton");
    } else {
      modalRef?.current?.classList?.add?.("ModalTop");
    }
  });

  return (
    <div
      ref={rowRef}
      className="Row"
      style={{ ...style, ...{ display: "flex", alignItems: "center" } }}
      onClick={(e) => {
        setIsModalVisible(true);
      }}
    >
      <img src={user.picture.thumbnail} />
      <span>&nbsp;&nbsp;&nbsp;{reactVirtualizedKey}</span>
      <span>&nbsp;&nbsp;&nbsp;{user.name.first}</span>
      <span>&nbsp;&nbsp;&nbsp;{user.name.last}</span>
      <span>&nbsp;&nbsp;&nbsp;{user.email}</span>
      <span onClick={clickModalHandler}>&nbsp;&nbsp;&nbsp;{user.nat}</span>
      {isModalVisible && (
        <div ref={modalRef} className="Modal">
          <span className="Close" onClick={clickModalHandler}>
            X
          </span>
          <div className="ModalContent">
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
    </div>
  );
};

export default Row;
