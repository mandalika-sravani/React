/*import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx"; */
import UserGreeting from "./UserGreeting.jsx";

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

function App() {

  return (
    <>
      <UserGreeting isLoggedIn = {true} username = "Krishna Mohan" />
    </>
  );
}

export default App