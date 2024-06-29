import {Row, Col} from 'react-bootstrap';
import React from 'react';
import Product from '../components/Products';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const {data:products, isLoading, isError} = useGetProductsQuery();
    
  return (
    <>
      { isLoading ? (
        <Loader />
      ) : isError ? (<Message variant='danger'>{isError?.data?.message || isError.error}</Message>): (<>
      <h1> Latest Products </h1>
      <Row>
        {
        products.map((product) => (   
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
      </Row>
      </>)}
      </>
      
    
  )
}

export default HomeScreen
