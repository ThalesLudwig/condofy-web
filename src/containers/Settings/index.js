import React, { useState } from "react";
import { connect } from "react-redux";
import { SettingsWrapper, Title, DarkThemeLabel } from "./SettingsStyled";
import { setLightTheme, setDarkTheme } from "../../slices/themeSlice";

const Settings = ({ theme, setLightTheme, setDarkTheme }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(theme === 0);

  const handleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (isDarkTheme) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return (
    <SettingsWrapper>
      <Title>Settings</Title>
      <DarkThemeLabel>Dark theme:</DarkThemeLabel>
      <input type="checkbox" checked={isDarkTheme} onChange={handleDarkTheme} />
    </SettingsWrapper>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.value,
});

const mapDispatchToProps = {
  setLightTheme,
  setDarkTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
