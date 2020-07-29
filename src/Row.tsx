import React, { FunctionComponent, useState, useRef, useEffect } from "react";

import "./Row.css";

const isRowInTheFirstTopHalf = (
  dom: any,
  amountOfVisibleRows: number,
  rowHeight: number
) => {
  if (dom.offsetTop < (amountOfVisibleRows * rowHeight) / 2) {
    return true;
  } else {
    return false;
  }
};

const Row = ({
  user,
  reactVirtualizedKey,
  style,
  amountOfVisibleRows,
  rowHeight,
}: any) => {
  const rowRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLElement>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const clickModalHandler = (e: any) => {
    e.stopPropagation();
    setIsModalVisible(false);
  };

  // component did mount
  useEffect(() => {
    if (
      rowRef?.current &&
      isRowInTheFirstTopHalf(rowRef.current, amountOfVisibleRows, rowHeight)
    ) {
      console.log(rowRef?.current);
      // @ts-ignore
      modalRef?.current?.classList?.add?.("ModalTop");
    } else {
      // @ts-ignore
      modalRef?.current?.classList?.add?.("ModalBotton");
    }
  });

  return (
    <div
      // @ts-ignore
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
        <div
          // @ts-ignore
          ref={modalRef}
          className="Modal"
        >
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
    </div>
  );
};

export default Row;
