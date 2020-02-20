import React from 'react';
import styled from 'styled-components';

const ErrorMessageDisplay = styled.h1`
  position: fixed;
  text-align: center;
  top: 45%;
  margin: 24px;
  color: #f44336;
  font-size: 1.5rem;
  font-weight: 500;
`;

const InfoMessageDisplay = styled.h1`
  position: fixed;
  text-align: center;
  top: 45%;
  margin: 24px;
  color: #2196f3;
  font-size: 1.5rem;
  font-weight: 500;
`;

/**
 * Components for various message displays. 
 * 
 * no params needed
 * 
 * @return {React.FC}
 */

interface Props {};

export const ErrorMessage: React.FC<Props> = ({ children }) => {
  return (
    <ErrorMessageDisplay>{children}</ErrorMessageDisplay>
  );
};

export const InfoMessage: React.FC<Props> = ({ children }) => {
  return (
    <InfoMessageDisplay>{children}</InfoMessageDisplay>
  )
}
