import React from 'react';
import {tabLabels} from "./constant";
import {Link} from 'react-router-dom';
import "./Tabs.css";

const Tabs = ({activeTabName, onClickTab}) => {
    const {CANCEL_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE} = tabLabels;

    const renderTabTitle=(tabTitle, isActive, icon,id) => (
        <div 
        onClick={() => onClickTab(tabTitle)} 
        id={id} 
        className={`tab-item ${isActive && "tab-border"}`}
        >
            <i className={icon}></i>
            <p>{tabTitle}</p>
        </div>
    );

return (
    <>
        <section className="tabs">
            <div className="container">
                {renderTabTitle(
                    CANCEL_AT_ANY_TIME, 
                    activeTabName === CANCEL_AT_ANY_TIME,
                    "fas fa-door-open fa-3x", 
                    "tab-1"
                    )}
                    {renderTabTitle(
                    WATCH_ANYWHERE, 
                    activeTabName === WATCH_ANYWHERE,
                    "fas fa-tablet-alt fa-3x", 
                    "tab-2"
                    )}
                    {renderTabTitle(
                    PICK_YOUR_PRICE, 
                    activeTabName === PICK_YOUR_PRICE,
                    "fas fa-tags fa-3x", 
                    "tab-2"
                    )}
            </div>
        </section>
    </>
  );
};

export default Tabs;