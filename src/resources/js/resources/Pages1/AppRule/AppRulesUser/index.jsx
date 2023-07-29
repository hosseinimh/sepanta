import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { slideDown, slideUp } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";

import { PageLayout } from "../../../components";
import { PageUtils } from "./PageUtils";

const AppRulesUser = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const [items, setItems] = useState(null);
  const pageUtils = new PageUtils();

  useEffect(() => {
    if (pageState?.props?.items?.length > 0) {
      setItems(
        pageState.props.items.map((item) => {
          return { ...item, collapsed: false };
        })
      );
    }
  }, [pageState?.props?.items]);

  useEffect(() => {
    setItems(null);
  }, []);

  const toggleItem = (element, item) => {
    while (element && !element.classList.contains("question")) {
      element = element.parentNode;
    }
    if (!element) {
      return;
    }
    element = element.nextElementSibling;
    if (item.collapsed) {
      slideUp(element);
    } else {
      slideDown(element, {
        duration: 400,
        easing: easeOutQuint,
      });
    }
    item.collapsed = !item.collapsed;
  };

  return (
    <PageLayout pageUtils={pageUtils}>
      <div className="block faq">
        {items?.map((item) => (
          <React.Fragment key={item.id}>
            <div
              className="question d-flex align-center just-between"
              onClick={(e) => toggleItem(e.target, item)}
            >
              <div className="faq-title">
                <i className="icon-courthouse4"></i>
                {item.title}
              </div>
              <i className="icon-arrow-left-2"></i>
            </div>
            <div className="answer" style={{ display: "none" }}>
              <div>{item.body}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </PageLayout>
  );
};

export default AppRulesUser;
