
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import {useState} from 'react';
import data from './data';
function App() {
    const {products} = data;
    const[basketItems, setbasketItems] = useState([])
    const onAdd = (product) =>{
        const exist = basketItems.find((x)=> x.id === product.id);
        if(exist){
            setbasketItems(
            basketItems.map((x) =>
            x.id === product.id ? {...exist, quantity: exist.quantity+1} : x
            )
        );
        }else{
            setbasketItems([...basketItems,{...product, quantity:1}]);
        }
    }
    const onRemove = (product) =>{
        const exist = basketItems.find((x) => x.id === product.id);
        if(exist.quantity === 1){
            setbasketItems(basketItems.filter((x) => x.id !== product.id));
        }else{
            setbasketItems(
                basketItems.map((x)=>
                x.id === product.id ? {...exist, quantity: exist.quantity -1} : x
                )
            );
        }
    };
  return (
    <div className="App">
      <Header/>
      <div className={'row'}>
          <Main onAdd={onAdd} products={products}/>
          <Basket onAdd={onAdd} onRemove={onRemove} basketItems={basketItems}/>
      </div>
    </div>
  );
}

export default App;
