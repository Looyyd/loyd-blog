import React from "react";


export const Main = (props: {children: JSX.Element|JSX.Element[]}) => {

  return (
      <main className="flex flex-col float-left min-w-0 w-5/7 mt-6 md:mt-0 md:px-5">
        {props.children}
      </main>
  )
}