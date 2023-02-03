import React from "react";

export const Paragraph = (props: React.PropsWithChildren) => {

  return (
    <p>
        {props.children}
    </p>
  )
}
