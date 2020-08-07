import React, { useState, useEffect } from 'react';
import Routers from './routers'
import productApi from './api/productApi'
import categoryApi from './api/categoryApi'

function App() {

  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [categories, setCategories] = useState([]);

  // List product
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await productApi.getAll();
        setProducts(data)
      } catch (error) {
        console.log('Fail to request API: ', error)
      }
    }
    getProducts();
  }, [])

  // List category
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await categoryApi.getAll();
        setCategories(data)
      } catch (error) {
        console.log('Fail to request API: ', error)
      }
    }
    getCategories();
  }, [])

  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await productApi.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  return (
    <div className="App">
      <Routers 
        products={products} 
        setProducts={setProducts} 
        onAdd={onHandleAdd} 
        category={category}
        setCategory={setCategory}
        productDetail={product}
        setProductDetail={setProduct}
        categories={categories}
        setCategories={setCategories}
      />
    </div>
  )

}
export default App;