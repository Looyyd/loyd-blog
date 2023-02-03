import React from "react";


export const Body = (props: {children: JSX.Element|JSX.Element[]}) => {

  return (
    <div className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
      {props.children}
    </div>
  )
}
