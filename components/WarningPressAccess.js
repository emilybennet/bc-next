import React from "react";
import Warning from "./Warning";

const WarningPressAccess = props => (
  <Warning
    actions={[
      { text: "Review Press Policy", url: "/policies/press" },
      { text: "Apply For Press Access", url: "http://bit.ly/2BouuoZ" }
    ]}
  >
    Media organizations looking to cover BronyCon 2019 can apply for
    complementary press badges until April 30, 2019.
  </Warning>
);

export default WarningPressAccess;
