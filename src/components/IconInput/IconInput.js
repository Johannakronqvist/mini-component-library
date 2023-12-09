import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.black};
  width: ${(props) =>
    props.size === 'large'
      ? '300px'
      : props.size === 'small'
      ? '150px'
      : 'inherit'};
`;

const TextInput = styled.input`
  border: none;
  border-bottom: solid 2px ${COLORS.black};
  width: 100%;
  padding: 4px;
  padding-left: 28px;
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray700};
  font-weight: 700;

  color: ${COLORS.gray500};
  &::placeholder {
    color: ${COLORS.gray500};
  }
  &:hover {
    color: ${COLORS.black};
  }
  &:focus {
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 4px;
  top: 4px;
  bottom: 4px;
  pointer-events: none;
  color: ${COLORS.gray700};
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <>
      <Wrapper size={size} style={{ width: { width } }}>
        <VisuallyHidden>
          <label for='textInput'>{label}</label>
        </VisuallyHidden>
        <IconWrapper>
          <Icon id={icon} size={16} />
        </IconWrapper>
        <TextInput type='text' id='textInput' placeholder={placeholder} />
      </Wrapper>
    </>
  );
};

export default IconInput;
