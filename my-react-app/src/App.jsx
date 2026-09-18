/*import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx"; 
import UserGreeting from "./UserGreeting.jsx"; */
import List from './List.jsx';

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

/*function App() {

  return (
    <>
      <UserGreeting isLoggedIn = {true} username = "Krishna Mohan" />
    </>
  );
} */

function App() {

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
}


export default App