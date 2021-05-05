import React from "react";
import { FeedWrapper } from "./FeedStyled";
import { useIntl } from "react-intl";
import localization from "./localization";

const Feed = () => {
  const { formatMessage } = useIntl();

  return <FeedWrapper>{formatMessage(localization.send)}</FeedWrapper>;
};

export default Feed;
