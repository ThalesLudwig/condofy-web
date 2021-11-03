import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";

export const SettingsWrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.TITLE};
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
  color: ${({ theme }) => theme.TEXT};
  margin-bottom: 38px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT};
`;
