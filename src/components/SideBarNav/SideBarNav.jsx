import React from 'react';
import * as U from '../TuxComponents/UniversalComponents';

const SideBarNav = ({
  sections,
  currentSection,
  currentSectionIndex,
  currentModule,
  currentModuleIndex,
  handleJumpToSection,
  handleCurrentSection,
  handleCurrentModule,
  started,
  setStarted,
  finished,
  setFinished,
}) => {
  return (
    <U.SideBarParent>
      <U.SideBar>
        <U.ColorBlock SideBarYellow></U.ColorBlock>
        <U.SideBarTextBox>
          {sections.map((section, index) =>
            index === 0 ? (
              <U.SideBarText
                past={currentSectionIndex < index ? true : false}
                present={currentSectionIndex === index}
                key={index}
                onClick={() => handleJumpToSection(index)}
              >
                {section.name}
              </U.SideBarText>
            ) : (
              <U.SideBarText
                past={currentSectionIndex < index ? true : false}
                present={currentSectionIndex === index}
                key={index}
                onClick={() => handleJumpToSection(index)}
              >
                {index}. {section.name}
              </U.SideBarText>
            )
          )}
        </U.SideBarTextBox>

        {started &&
        currentSectionIndex === sections.length - 1 &&
        currentModuleIndex === currentSection.modules.length - 1 ? (
          <U.WideBtn enable onClick={() => setStarted(false)}>
            Next
          </U.WideBtn>
        ) : started && currentSectionIndex <= sections.length - 1 ? (
          <U.WideBtn enable onClick={() => handleCurrentModule()}>
            Next
          </U.WideBtn>
        ) : (
          ''
        )}

        {/* if started is now false and !finished then show Next button , which will change finished to true */}
        {started === false && finished === null && (
          <U.WideBtn enable onClick={() => setFinished(true)}>
            Next
          </U.WideBtn>
        )}
        {/* if started is false and finished equals false then show end button */}
        {started === false && finished === true && (
          <U.WideBtn enable>End</U.WideBtn>
        )}
      </U.SideBar>
    </U.SideBarParent>
  );
};

export default SideBarNav;
