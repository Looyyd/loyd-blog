import React from "react";


export const Main = (props: {children: JSX.Element|JSX.Element[]}) => {

  return (
    <div>
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        {props.children}
      </main>
    </div>
  )
}