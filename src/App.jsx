import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const Getdata = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setData(response.data);
  };

  const addToCart = (elem) => {
    const cartItem = [...cart, elem];
    setCart(cartItem);
  };
  const remove =(index) =>{
    const copyItem =[...cart];
    copyItem.splice(index,1)
    setCart(copyItem);

  }

  return (
    <div className="h-screen">
      <button
        onClick={Getdata}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-2xl px-8 py-4 rounded-lg mt-10 transform transition-transform active:scale-90 shadow-lg"
      >
        Get Data
      </button>
      <div className="flex">
        
        <div className="w-3/4 flex flex-wrap justify-center gap-8 p-10">
          {data.map((elem, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col w-[22%] h-auto"
            >
              <div className="h-48">
                <img
                  className="h-full w-full object-contain"
                  src={elem.image}
                  alt={elem.title}
                />
              </div>
              <div className="p-4 flex flex-col">
                <h1 className="text-lg font-bold text-center truncate">
                  {elem.title}
                </h1>
                <h2 className="text-xl font-semibold text-center text-blue-600 mt-2">
                  ₹{elem.price}
                </h2>
                <p className="text-sm text-gray-600 mt-3 text-center line-clamp-2">
                  {elem.description}
                </p>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => addToCart(elem)} 
                    className="bg-yellow-600 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-lg shadow"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className="w-1/4 h-auto bg-gray-200 flex flex-col justify-start items-start text-black p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <div className="flex flex-col gap-4 overflow-y-auto">
            {cart.map((elem, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-[#94abca] px-4 shadow-xl  py-3 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={elem.image}
                    
                    className="h-24 object-contain rounded-sm "
                  />
                  <div className="text-white">
                    <h3 className="font-semibold">{elem.title}</h3>
                    <h1 className='line-clamp-1 text-sm font-lighter text-white'>{elem.description}</h1>
                    <p className='font-bold'>${elem.price}</p>
                  </div>
                </div>
                <button  onClick={remove}className='bg-red-700 text-white px-3 py-1 text-sm  rounded mt-16'>remove</button>
              </div>
             
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

