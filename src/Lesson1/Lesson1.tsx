//1. create a compnonent

/*import React from 'react'

const Lesson1 = () => {
  return (
    <div>Lesson1</div>
  )
}

export default Lesson1*/



//************************************************************************* */

//2. create a prop having type with it

/*const Lesson1 = (props: {name:string, age:number, occupation: string}) => {
    return (
      <div>{props.name}</div>
    )
  }
  
  export default Lesson1*/


  //*********************************************************************************** */

//3.Type is outside of the Function

/*type FirstType = { name: string; age: number; occupation: string };

const Lesson1 = (props: FirstType) => {
  return <div>{props.age}</div>;
};

export default Lesson1;*/


/********************************************************************* */

//4.Type is outside of the Function (Detructure)

type FirstType = { name: string; age: number; occupation: string };

const Lesson1 = ({name,age,occupation}: FirstType) => {
  return <div>{age}</div>;
};

export default Lesson1;