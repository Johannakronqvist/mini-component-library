/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: `--height: 24px; --padding: 4px; --radius: 8px;`,
  medium: `--height: 12px; --padding: 0; --radius: 4px;`,
  small: `--height: 8px; --padding: 0; --radius: 4px;`,
};

const WrapperBase = styled.div`
  width: 100%;
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden; /*Trims corners when progressbar is nearly full.*/
`;

const Wrapper = styled(WrapperBase)`
  ${({ size }) => SIZES[size]};
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
