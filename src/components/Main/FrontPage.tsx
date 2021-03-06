import { FontIcon } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import { terminalText } from "../../content/Strings";

interface FrontPageProps {
  setShowMainContent: () => void;
}

const FrontPage = (props: FrontPageProps) => {
  const [blinking, setBlinking] = useState("blink1");
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking(blinking === "blink1" ? "blink2" : "blink1");
    }, 500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div>
      <div className={"front-page-terminal"}>
        <div className={"front-page-terminal-nav"}>
          <span className={"front-page-terminal-nav-item"} />
          <span className={"front-page-terminal-nav-item"} />
          <span className={"front-page-terminal-nav-item"} />
        </div>
        <div className={"front-page-terminal"}>
          {terminalText}
          <span className={blinking}>_</span>
        </div>
      </div>
      <span className={"front-page-icon"} onClick={props.setShowMainContent}>
        <FontIcon iconName={"DoubleChevronDown8"} />
      </span>
    </div>
  );
};

export default FrontPage;
