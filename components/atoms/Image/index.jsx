import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

export const Type = {
  bg: "background",
  img: "image",
};

const Image = ({
  circle = false,
  marginBottom = "0px",
  src = "",
  type = Type.img,
}) => {
  const srcPath = "/assets/images/" + src;

  return (
    <>
      {type === Type.img ? (
        <Styled.Image
          circle={circle}
          marginBottom={marginBottom}
          src={srcPath}
        />
      ) : (
        <Styled.Background
          marginBottom={marginBottom}
          src={srcPath}
        ></Styled.Background>
      )}
    </>
  );
};

Image.propTypes = {
  src: propTypes.string.isRequired,
  type: propTypes.string,
  circle: propTypes.bool,
  marginBottom: propTypes.string,
};

export default Image;
