import React, { useState } from "react";
import styled from "styled-components";

// Styled component for the dropdown container
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px;
  font-size: 16px;
  width: 200px; /* Set width to 200px */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: border 0.3s ease; /* Smooth transition for border */

  &:hover {
    border: 1px solid #ccc; /* Border appears on hover */
  }
`;

// Styled component for the dropdown content
const DropdownContent = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
`;

// Styled component for the dropdown options
const Option = styled.div`
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

// Dropdown component
const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Select the category"}
      </DropdownButton>
      <DropdownContent open={isOpen}>
        {options.map((option) => (
          <Option key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </Option>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
