/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const WrapperBase = styled.div`
  width: 100%;
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const Size = {
  large: `--height: 24px; --padding: 4px;`,
  medium: `--height: 16px; --padding: 0;`,
  small: `--height: 8px; --padding: 0;`,
};

const Wrapper = styled(WrapperBase)`
  ${({ size }) => Size[size]}
  height: var(--height);
  padding: var(--padding);
`;

const Progress = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: ${(props) =>
    props.value === 100 ? '4px' : '4px 0px 0px 4px'};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemax={100}
      size={size}
    >
      <Progress value={value}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Progress>
    </Wrapper>
  );
};

export default ProgressBar;
