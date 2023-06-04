 import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';


import { useState } from 'react';





function Pro() {

  const [product, setProduct] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/612/612/kqttg280/crepe-bandage/7/d/o/antiseptic-vantilated-all-purpose-patch-50-streeps-bandage-original-imag4rhmc4qnywfg.jpeg?q=70',
      name: 'Bandages',
      category: 'Medicine',
      seller: 'HANSAPLAST',
      price: 199
    },
    {
      url: 'https://rukminim1.flixcart.com/image/612/612/ksdjma80/vitamin-supplement/b/q/b/60-men-multivitamin-wit-calcium-zinc-ginseng-for-immunity-60-original-imag5yhgmyspnk7q.jpeg?q=70',
      name: 'Revital',
      category: 'Vitamin Tablets',
      seller: 'Rev H',
      price: 550
    },
    {
      url: 'https://rukminim1.flixcart.com/image/612/612/xif0q/face-wash/m/d/e/300-refreshing-face-wash-150-ml-pack-of-2-nivea-original-imagn3e3cx8hjk2b.jpeg?q=70',
      name: 'Nivea Facewash',
      category: 'Beauty',
      seller: 'Nivea',
      price: 157
    },
    {
      url: 'https://rukminim1.flixcart.com/image/612/612/kikluvk0-0/glucometer/c/h/y/50-strips-automatic-glucose-blood-sugar-testing-machine-digital-original-imafyby5dnjasygs.jpeg?q=70',
      name: 'Gluco meter',
      category: 'Health',
      seller: 'Morepen',
      price: 519
    },
    {
      url: 'https://rukminim1.flixcart.com/image/612/612/xif0q/weighing-scale/j/y/l/digital-weight-machine-thick-tempered-glass-lcd-display-with-3-original-imagg35fkgtjzqgt.jpeg?q=70',
      name: 'Weighing Scale',
      category: 'Health',
      seller: 'Sonics Ltd',
      price: 549
    },
    {
      url: 'https://rukminim1.flixcart.com/image/612/612/xif0q/vitamin-supplement/w/9/t/30-biotin-cranberry-flavour-gummy-for-hair-nails-skin-1-daily-original-imagzvg8ukn8bhkc.jpeg?q=70',
      name: 'Biotin',
      category: 'Daily Supplements',
      seller: 'Good day',
      price: 149
    },
    
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (<>

   

    


    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>


       

    </>
  );


   
   
}


export default Pro;