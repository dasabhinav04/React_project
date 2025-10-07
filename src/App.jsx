import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Exone from './Components/Exone'
// import Parent from './Components/Props/Parent'
// import ParentDest1 from './Components/Props/PropsDestruct/ParentDest1'
// import ParentPc from './Components/Props/PropsChildren/ParentPc'
// import ChildA from './Components/Props/PropsDrilling/ChildA'
// // import Class1 from './Components/ClassCompo/Class1'
// import ClassUe from './Components/ClassCompo/ClassUe'
// import SimpleApi from './Components/API/SimpleApi'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
// import SimpleApi from './Components/API/SimpleApi'
// // import FetchData from './Components/FetchData'
import DataAxios from './Components/DataAxios'
import Products from './Components/Products'
// import Loc from './Components/UseLocation/Loc'
// import ExOne from './Components/UseMemo/ExOne'
// import ExTwo from './Components/UseMemo/ExTwo'
// import GptEx from './Components/UseMemo/GptEx'
import { CartProvider } from './Components/API/CartContext'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/API/Cart'


// const data = createContext();
// const data2 = createContext();

function App() {
//   const [count, setCount] = useState(0)

//   // Object Method
//   const userdata = {
//     name: "Abhinav",
//     age: "25",
//     city: "Thane"
//   }
// // task use context task with array
// // normal method
// const contact = 90909090;
  return (
    <>

       {/* <Exone/> */}
       {/* <Parent/> */}
       {/* <ParentDest1/> */}
       {/* <ParentPc/> */}
       {/* <data.Provider value={userdata}> */}
         {/* <data2.Provider value={contact}> */}
           {/* <ChildA/> */}
         {/* </data2.Provider> */}
       {/* </data.Provider> */}
         {/* < Class1/> */}
         {/* <ClassUe/> */}
         {/* <SimpleApi/> */}

         {/* <BrowserRouter> */}
          {/* <NavBar/> */}
         {/* <Routes> */}
           {/* <Route path='/' element={<Home/>}> */}
           {/* <Route path='/products' element={<SimpleApi/>}> */}
           {/* </Route> */}
           
           {/* </Route> */}
         {/* </Routes> */}
         {/* </BrowserRouter> */}
         


         <BrowserRouter>
         <CartProvider>

        <NavBar/> 
        {/* <Loc/>
        <ExOne/>
        <ExTwo/>
        <GptEx/> */}
         <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/products' element={<SimpleApi/>}/> */}
          <Route path='/products' element={<DataAxios/>}/>
          <Route path='/product-details/:productID' element={<ProductDetails/>}/>
          <Route path='/Cart' element ={<Cart/>}/>
          <Route path='/' element={<Products/>}/>

         </Routes>
          
         </CartProvider>
         </BrowserRouter>
         

         {/* <FetchData/> */}

         
         
        

    
    </>
  )
}

export default App
// export {data, data2}
