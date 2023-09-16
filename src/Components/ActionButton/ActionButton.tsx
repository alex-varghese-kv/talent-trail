import React, { useState } from "react";
import cx from "classnames";
import { pagePaths } from "config/pages";

const ActionButton = () => {
  const [showActionItems, setShowActionItems] = useState(false);
  return (
    <div className="action-dots float-end mt-10 ms-2">
      <button
        className={cx("action-btn dropdown-toggle ", {
          show: showActionItems,
        })}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => setShowActionItems((prevState) => !prevState)}
      >
        <span></span>
      </button>
      <ul
        className={cx("dropdown-menu dropdown-menu-end ", {
          show: showActionItems,
        })}
        style={
          showActionItems
            ? {
                position: "absolute",
                inset: "0px 0px auto auto",
                margin: "0px",
                transform: "translate3d(-14px, 120px, 0px)",
              }
            : {}
        }
      >
        <li>
          <a className="dropdown-item" href={pagePaths.candidateJobDetails}>
            <img
              alt="icon"
              loading="lazy"
              width="17"
              height="14"
              decoding="async"
              data-nimg="1"
              className="lazy-img"
              src="/media/icon_18.0f7046f3.svg"
              style={{ color: "transparent;" }}
            />
            View
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <img
              alt="icon"
              loading="lazy"
              width="16"
              height="13"
              decoding="async"
              data-nimg="1"
              className="lazy-img"
              src="/media/icon_19.b2f1576b.svg"
              style={{ color: "transparent;" }}
            />{" "}
            Share
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <img
              alt="icon"
              loading="lazy"
              width="14"
              height="14"
              decoding="async"
              data-nimg="1"
              className="lazy-img"
              src="/media/icon_20.e619462a.svg"
              style={{ color: "transparent;" }}
            />{" "}
            Edit
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <img
              alt="icon"
              loading="lazy"
              width="14"
              height="16"
              decoding="async"
              data-nimg="1"
              className="lazy-img"
              src="/media/icon_21.1bede725.svg"
              style={{ color: "transparent;" }}
            />{" "}
            Delete
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ActionButton;
