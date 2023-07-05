// Old Typescript style
/*import React from "react"

const Section : React.FC<{title:string}>=({children, title})=>{
    return(
        <section>
        
        <h2>{title}</h2>
        {children}
        </section>
    )
}*/

import { ReactNode } from "react";

type SectionProp = {
  title?: string;
  children: ReactNode;
};

const Section = ({ children, title = "Hii how are you" }: SectionProp) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
};

export default Section;
