import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import Container from "../../molecules/Container";
import ClubNavigation from "../../organisms/ClubNavigation";

const LandingLayout = ({ children }) => {
  return (
    <Styled.LandingView>
      <Container>
        <ClubNavigation />

        <Styled.ContentContainer>{children}</Styled.ContentContainer>
      </Container>
    </Styled.LandingView>
  );
};

LandingLayout.propTypes = {
  children: propTypes.node,
};

export default LandingLayout;
