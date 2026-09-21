/*import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx"; 
import UserGreeting from "./UserGreeting.jsx"; 
import List from './List.jsx'; 
import EffectComponent from "./useEffect.jsx";
import Button, { ProfilePicture } from "./Button/Button.jsx";
import ArrayComponent from "./Array.jsx";
import ArrayUpdate from "./Array_Update.jsx";
import ColorPicker from "./Color Picker/color_picker.jsx";
import Counter from "./Counter_useState.jsx";
import DigitalClock from "./Digital Clock App/digital.jsx";
import Mycomponent from "./onChange.jsx";
import ToDoList from "./To-Do List App/to_do.jsx";
import MyObjectComponent from "./update_objects.jsx";
import MyUpdateComponent from "./updater.jsx"; 
import ComponentA from "./useContext()/ComponentA"; */

import Stopwatch from "./Stopwatch/Stopwatch";
import Component from "./useRef()/Component";



/*function App() {

  return (
    <>

      <Student name="Krishna" age = {25} isStudent = {true}/>
      <Student name="Vasudeva" age = {35} isStudent = {false}/>
      <Student name="Murali" age = {18} isStudent = {true}/>
      <Student name="Madhav" age = {40} isStudent = {false}/>
        {/*<Header/>
        <Food/> 
        <Card />
        <Card />
        <Card />
        <Footer/>
        <Button /> 
    </>
    
  );
}*/

//Condition rendering
/*function App() {

  return (
    <>
      <UserGreeting isLoggedIn = {true} username = "Krishna Mohan" />
    </>
  );
} */

// Lists Code
/*function App() {

  const fruits = [{id: 1, name: "Apple", calories: 95}, 
                    {id: 2, name: "Orange", calories: 65}, 
                    {id: 3, name: "Kiwi", calories: 45}, 
                    {id: 4, name: "Mango", calories: 105}, 
                    {id: 5, name: "Papaya", calories: 75}];

  const vegetables = [{id: 6, name: "Potato", calories: 110}, 
                    {id: 7, name: "Tomato", calories: 80}, 
                    {id: 8, name: "Carrot", calories: 60}, 
                    {id: 9, name: "Onion", calories: 90}, 
                    {id: 10, name: "Beetroot", calories: 75}];

  return(<>
            {fruits.length > 0 && <List items={fruits} category = "Fruits" />}
            {vegetables.length > 0 &&
                          <List items={vegetables} category = "Vegetables" />}
        </>
  );
} */

// Click event code
/*function App() {
  return(
   /* <Button /> 
      <ProfilePicture />
  );
}*/

// Counter Code
/*function App() {
  return(
    <Counter />
  );
}*/

//onChange handler code
/*function App() {
  
  return (
    <Mycomponent />
  );
} */

//Color Picker
/*function App() {

  return (
    <ColorPicker />
  );
} */

//updater function
/*function App() {
  return(
    <MyUpdateComponent />
  );
} */

// update Object
/*function App() {
  return(
    <MyObjectComponent />
  );
} */

/*function App() {
  return(
    <ArrayComponent />
  );
} */

//Array Update
/*function App() {
  return(
    <ArrayUpdate />
  );
} */

//To-Do List App
/*function App() {

  return(
    <ToDoList />
  );
} */

//useEffect()
/*function App() {
  return(
    <EffectComponent />
  );
}*/

//Digital Clock App
/*function App() {
  return( <DigitalClock />);
} */

//useContext() code
/*function App() {
  return(
    <ComponentA />
  );
} */

// useRef() code
/*function App() {
  return(
    <Component />
  ); 
} */

// Stopwatch App
function App() {
  return(
    <Stopwatch />
  );
}

export default App