import React, { memo } from "react";
import { ContainerStyles, TemplateDasboardContainer, TemplateListContainer } from "./Container.styles";
import { PropTypes } from "prop-types";

const Container = ({ children, background, maxWidth, overflow, type }) => {
  const templateListUsers = <TemplateListContainer>{children}</TemplateListContainer>;
  const templateDashboard = <TemplateDasboardContainer>{children}</TemplateDasboardContainer>
  
  const diccionary = {
    templateDashboard,
    templateListUsers,
  };

  const getContainer = (type) => {
    return diccionary[type] ? (
      diccionary[type]
    ) : (
      <ContainerStyles
        type={type}
        background={background}
        maxWidth={maxWidth}
        minWidth={minWidth}
        overflow={overflow}
      >
        {children}
      </ContainerStyles>
    );
  };

  return <>{getContainer(type)}</>;
};

Container.propTypes = {
  type: PropTypes.string,
};

export default memo(Container);
