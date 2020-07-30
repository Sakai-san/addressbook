import React, {
  FunctionComponent,
  MouseEvent,
  useState,
  useRef,
  useEffect,
} from "react";
import { IUser } from "./Home/types";

import "./Row.css";

interface IRowProps {
  user: IUser;
  style: object;
}

const getViewportHeight = () =>
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

const distanceFromViewportTop = (element: HTMLElement) =>
  element.getBoundingClientRect().top;

const doPlaceAtBottom = (element: HTMLElement) =>
  getViewportHeight() / 2 < distanceFromViewportTop(element) ? true : false;

const Row: FunctionComponent<IRowProps> = ({ user, style }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const clickRowlHandler = (e: MouseEvent<HTMLElement>) =>
    setIsModalVisible(true);

  const clickModalHandler = (e: MouseEvent<HTMLElement>) => {
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
      onClick={clickRowlHandler}
    >
      <img
        src={user?.picture?.thumbnail}
        alt={`${user?.name?.first} ${user?.name?.last}`}
      />
      <div>&nbsp;&nbsp;&nbsp;{user?.name?.first}</div>
      <div>&nbsp;&nbsp;&nbsp;{user?.name?.last}</div>
      <div>&nbsp;&nbsp;&nbsp;{user?.login?.username}</div>
      <div>&nbsp;&nbsp;&nbsp;{user?.email}</div>
      {isModalVisible && (
        <div ref={modalRef} className="Modal">
          <span className="Close" onClick={clickModalHandler}>
            &#10008;
          </span>
          <div className="ModalContent">
            <div>
              {user?.location?.street?.number}, {user?.location?.street?.name}
            </div>
            <div>
              {user?.location?.postcode}, {user?.location?.city}
            </div>
            <div>{user?.location?.state}</div>
            <div>{user?.phone}</div>
            <div>{user?.cell}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Row;
