import React, { useState } from "react";
import { connect } from "react-redux";
import { SettingsWrapper, Title, Label, LabelWrapper } from "./SettingsStyled";
import { setLightTheme, setDarkTheme } from "../../slices/themeSlice";
import { setEnglish, setPortuguese } from "../../slices/localizationSlice";
import LANG_CONSTANTS from "../../constants/lang";

const Settings = ({ theme, setLightTheme, setDarkTheme, language, setEnglish, setPortuguese }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(theme === 0);
  const [isPortuguese, setIsPortuguese] = useState(language === LANG_CONSTANTS.BR);

  const handleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (isDarkTheme) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  const handleLanguage = () => {
    setIsPortuguese(!isPortuguese);
    if (isPortuguese) {
      setEnglish();
    } else {
      setPortuguese();
    }
  };

  return (
    <SettingsWrapper>
      <Title>Settings</Title>
      <LabelWrapper>
        <Label>Dark theme:</Label>
        <input type="checkbox" checked={isDarkTheme} onChange={handleDarkTheme} />
      </LabelWrapper>
      <LabelWrapper>
        <Label>Enable pt-BR</Label>
        <input type="checkbox" checked={isPortuguese} onChange={handleLanguage} />
      </LabelWrapper>
    </SettingsWrapper>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.value,
  language: state.localization.value,
});

const mapDispatchToProps = {
  setLightTheme,
  setDarkTheme,
  setEnglish,
  setPortuguese,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
