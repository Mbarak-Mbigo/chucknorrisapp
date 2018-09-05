import React from "react";
import styled from "styled-components";
import { SILVER_GREY } from "../../utils/colors";

const TextInput = styled.input`
  box-sizing: border-box;
  border: 1px solid ${SILVER_GREY};
  font-size: 1.4rem;
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  outline: none;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const TextInputWrapper = styled.div`
  display: flex;
`;

const TextField = ({ name, placeholder, ...otherProps }) => (
  <TextInputWrapper>
    <TextInput name={name} placeholder={placeholder} {...otherProps} />
  </TextInputWrapper>
);

export default TextField;
