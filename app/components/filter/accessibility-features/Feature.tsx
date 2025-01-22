"use client";

import { UUID } from "crypto";
import { useState } from "react";

type Description = {
  id: UUID;
  text: string;
  checked: boolean;
};

type FeatureProps = {
  title: string;
  descriptions: Description[];
};

const Feature = ({ title, descriptions }: FeatureProps) => {
  const [, setChecked] = useState<boolean>();

  return (
    <div className="py-2">
      <header className="font-medium ">{title}</header>
      {descriptions.map((description) => (
        <div
          key={description.id}
          className="py-3 px-1 flex flex-row justify-between md:flex-row-reverse md:justify-end"
        >
          <label
            htmlFor={description.id}
            className={
              description.checked ? "mx-3 font-normal" : "mx-3 font-light"
            }
          >
            {description.text}
          </label>
          <input
            id={description.id}
            type="checkbox"
            name={description.text}
            style={{ scale: "2" }}
            onClick={() => {
              setChecked((prev) => !prev);
              description.checked = !description.checked;
              console.log(description.text);
            }}
          />
        </div>
      ))}
    </div>
  );
};
export default Feature;
