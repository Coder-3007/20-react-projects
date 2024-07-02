/* eslint-disable react/prop-types */
import { useState } from "react";
import "./tabs.css";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div>
      <h1 className="heading">Custom Tabs App</h1>
      <div className="wrapper">
        <div className="heading1">
          {tabsContent.map((tabItem, index) => (
            <div key={tabItem.label} onClick={() => handleOnClick(index)}>
              <span className="label">{tabItem.label}</span>
            </div>
          ))}
        </div>
        <div className="content" style={{ color: "red" }}>
          {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
      </div>
      <div className="line-below"></div>
    </div>
  );
}
