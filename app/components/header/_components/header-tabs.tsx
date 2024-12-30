"use client";

import { useState } from "react";
import { TabsProps } from "../types/tabs.type";

export const HeaderTabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex justify-center items-center fixed top-10 left-1/2 transform -translate-x-1/2 w-full">
      <div className="tabs flex flex-col justify-center items-center">
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
            className="w-full"
            key={`tab-content-${index}`}
            style={{ display: activeTab !== index ? "none" : "block" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
