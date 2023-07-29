import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setShownModalAction } from "../../../state/layout/layoutActions";

const Modal = ({ id, title, children }) => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (layoutState?.shownModal === id) {
      showModal();
    } else {
      hideModal();
    }
  }, [layoutState?.shownModal]);

  const showModal = () => {
    const element = document.querySelector(`#${id}`);
    console.log("iman",element)
    element.style.display = "flex";
    dispatch(setShownModalAction(id));
    setTimeout(() => {
      element.lastChild.style.opacity = 1;
      element.lastChild.style.transform = "scale(1)";
    }, 1);
  };

  const hideModal = () => {
    const element = document.querySelector(`#${id}`);
    element.lastChild.style.opacity = 0;
    element.lastChild.style.transform = "scale(0.8)";
    setTimeout(() => {
      element.style.display = "none";
      dispatch(setShownModalAction(null));
    }, 200);
  };

  return (
    <div className="modalbox" id={id}>
      <div className="modal">
        <div className="modal-hd">
          <span>
            <i
              className="modal-close icon-close-circle4 mx-rdir-10"
              onClick={hideModal}
            />
            <span className="text">{title}</span>
          </span>
        </div>
        <div className="modal-main">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
