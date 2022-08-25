import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;

  label {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;
    color: ${colors.black};
  }
  input {
    box-sizing: border-box;
    border: 0.063rem solid ${colors.default};
    border-radius: 1.5rem;
    padding: 0.75rem 0.75rem 0.75rem 2.1rem;
    width: 100%;
  }

  input: focus {
    border: 0.063rem solid ${colors.focus};
  }
`;

export const FormInput = styled.div`
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  color: ${colors.grayscale02};
  line-height: 0;
`;

export const ErrorMessage = styled.div`
  color: ${colors.error};
  font-size: 0.75rem;
`;
