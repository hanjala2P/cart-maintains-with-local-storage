import { Suspense } from 'react';
import './App.css';
import Bottles from './componant/bottle/Bottles';
function App() {

  const bottlesPromis= fetch('./bottles.json').then(res=>res.json());
  // const bottle=[
  //   {id:1, name:'pink bottle nike',price:250, color:'pink'},
  //   {id:2, name:'pink bottle nike',price:250, color:'pink'},
  //   {id:3, name:'pink bottle nike',price:250, color:'pink'},
  //   {id:4, name:'pink bottle nike',price:250, color:'pink'},
  // ]

  return (
    <>
   
      <h1>Buy awesome water bottle</h1>
    <Suspense fallback={<h3>data loading...</h3>}>
      <Bottles bottlesPromis={bottlesPromis}></Bottles>
    </Suspense>
     
    </>
  )
}

export default App
