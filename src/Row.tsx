import React, {
  FunctionComponent,
  MouseEvent,
  useState,
  useRef,
  useEffect,
} from "react";
import { IUser } from "./ducks/Home/types";

import "./Row.css";

interface IRowProps {
  user: IUser;
  style: object;
}

const getViewportHeight = () =>
  Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

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
    <div ref={rowRef} className="Row" style={style} onClick={clickRowlHandler}>
      <div className="Column_10">
        {user?.picture?.thumbnail && (
          <img
            src={user.picture.thumbnail}
            alt={`${user?.name?.first || ""} ${user?.name?.last || ""}`}
          />
        )}
      </div>
      <div className="Column_20">{user?.name?.first}</div>
      <div className="Column_20">{user?.name?.last}</div>
      <div className="Column_20">{user?.login?.username}</div>
      <div className="Column_30">{user?.email}</div>
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
