import logo from './logo.svg';
import './App.css';

const name = "Abdullah Al Hosain";

function App() {
  const nayoks = ['Rubel', 'hero-alom', 'Bapparaj', 'omorsani', 'sakibkhan'];
  return (
    <div className="App">
      {
        nayoks.map(singleNayok => <li>{singleNayok}</li>)
      }
      {
        nayoks.map(<person name={nayoks[4]}></person>)
      }
      <Person name={nayoks[0]}></Person>
      <Person name={nayoks[2]}></Person>
      <Friend name="Asad" profession="Magician"></Friend>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>Name: {props.name}</h1>
      <h3>Profession: Student </h3>
    </div>
  );
}

function Friend (friend) {
  return (
    <div className="person">
      <h1>My friend is {friend.name}</h1>
      <p>He is a {friend.profession}</p>
    </div>
  )
}

export default App;
