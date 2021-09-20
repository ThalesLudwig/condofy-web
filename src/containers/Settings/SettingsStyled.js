import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";

export const SettingsWrapper = styled.div`
  padding: 20px 0px;
`;

export const Title = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.TITLE};
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
  color: ${({ theme }) => theme.TEXT};
  margin-bottom: 38px;
`;

export const DarkThemeLabel = styled.span`
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT};
`;
