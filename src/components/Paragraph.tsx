import React from "react";

export const Paragraph = (props: React.PropsWithChildren) => {

  return (
    <p className="mb-1">
        {props.children}
    </p>
  )
}
