import React, { FunctionComponent, useState } from "react";
import { usePopper } from "react-popper";
import { useHover } from "use-events";
import { IUser } from "../ducks/Home/types";

import "./styles.css";

interface IRowProps {
  user: IUser;
  style: object;
}

const Row: FunctionComponent<IRowProps> = ({ user, style }) => {
  const [active, bind] = useHover();
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  return (
    <>
      <div className="Row" ref={setReferenceElement} style={style} {...bind}>
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
      </div>

      {active && (
        <div
          className="Popper"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div>
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
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  );
};

export default Row;
