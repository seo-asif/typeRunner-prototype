import { ReactElement } from "react";

type HeadingProps = { title: string };

const Heading = ({title}: HeadingProps):ReactElement => {
  return <div><h1>Welcome {title}</h1></div>;
};

export default Heading;
