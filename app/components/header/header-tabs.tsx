"use client";

import { useState } from "react";
import { TabsProps } from "./tabs.type";

export const HeaderTabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-labels">
        {tabs.map((tab, index) => (
          <a
            key={`tab-${index}`}
            onClick={() => handleTabClick(index)}
            className={`tab-label ${index === activeTab ? "tab-active" : ""}`}
          >
            {tab.label}
          </a>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          className="w-full mt-6"
          key={`tab-content-${index}`}
          style={{ display: activeTab !== index ? "none" : "block" }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
