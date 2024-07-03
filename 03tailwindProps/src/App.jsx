import Card from './components/Card';
import './App.css';

function App() {
  let myObj = {
    name: "Soucius",
    age: 22,
    address: {
      city: "Istanbul",
      country: "Turkey"
    }
  };

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>

      <Card username="soucius" myArr={ newArr } />

      <Card username='seanmagnus' post='Staff Engineer' />

      <Card />
    </>
  );
}

export default App;