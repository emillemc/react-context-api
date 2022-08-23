import styled from "styled-components";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  margin: 0 auto;
`;

export const Content = styled.div`
  border: 2px solid ${colors.grayscale04};
  padding: 48px 40px;
  border-radius: 16px;

  .header {
    margin-bottom: 40px;
    h4 {
      font-size: ${typography.h4};
      margin-bottom: 10px;
      font-weight: 500;
      color: ${colors.grayscale02};
    }
    h2 {
      font-size: ${typography.h2};
      font-weight: 700;
    }
  }
`;
