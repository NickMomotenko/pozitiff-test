import React from "react";

import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  height: 100%;
  max-width: 100%;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
