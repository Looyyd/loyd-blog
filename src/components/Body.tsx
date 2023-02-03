import React from "react";


export const Body = (props: {children: JSX.Element|JSX.Element[]}) => {

  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
      {props.children}
    </div>
  )
}
