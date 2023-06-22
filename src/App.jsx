// Write your Color component here
import { useState } from "react";

const Color = ({color,setSelectedColor}) => {
  const [selectedColor, setSelectedColor]= use("")
  return (
          <div className={color}
                onClick={()=> setSelectedColor(color)}></div>)

}
const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color= "orange" setSelectedColor={setSelectedColor} />
        <Color color= "blue" selectedColor={setSelectedColor} />
        <Color color= "violet" setSelectedColor={setSelectedColor}/>
        </div>
    </div>
  );
};

export default App;
