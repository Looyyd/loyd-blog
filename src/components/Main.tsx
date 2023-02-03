import React from "react";


export const Main = (props: {children: JSX.Element|JSX.Element[]}) => {

  return (
      <main className="flex-auto float-left min-w-0 w-3/6 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        {props.children}
      </main>
  )
}