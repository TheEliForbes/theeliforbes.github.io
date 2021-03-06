import React from "react";
import { aboutContent } from "../../content/Strings";
import { mapToListItems } from "../Misc/Helpers";
import AboutPane from "./AboutPane";
import Overview from "./Overview";

const About = () => {
  const content = [
    { title: aboutContent.education.title, content: <p>{aboutContent.education.content}</p> },
    {
      title: aboutContent.qualities.title,
      content: <ul>{mapToListItems(aboutContent.qualities.qualities)}</ul>,
    },
    {
      title: aboutContent.skills.title,
      content: (
        <ul>
          {aboutContent.skills.skills.map((area) => (
            <li>
              <li>{area.area}</li>
              <ul>{mapToListItems(area.skills)}</ul>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: aboutContent.background.title,
      content: (
        <>
          {aboutContent.background.background.map((content) => (
            <p>{content}</p>
          ))}
        </>
      ),
    },
    {
      title: aboutContent.hobbies.title,
      content: <ul>{mapToListItems(aboutContent.hobbies.hobbies)}</ul>,
    },
  ];

  return (
    <div className="about-page-container">
      <div className="about-description-container">
        <Overview />
        <div className={"about-description-content"}>
          {content.map((section, i) =>
            i === content.length - 1 ? (
              <AboutPane {...section} className="last-about-pane" />
            ) : (
              <AboutPane {...section} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
