import { Flex, Heading, Image, Text } from "@chakra-ui/react"

import {  useParams } from 'react-router-dom';
import { useDataContext } from "../context/DataContextProvider";

const SingleProductPage = () => {
    const { productId } = useParams();
    const { data } = useDataContext();

    const product = data.find(({ id }) => id === Number(productId));

    if (!product) {
        return <div>Product not found!</div>;
    }
    // id: 4,
    // department: 'Clothing',
    // name: "Women's Yoga Pants",
    // description: 'High-quality yoga pants for maximum comfort during workouts.',
    // price: 29.99,
    // stock: 30,
    // sku: 'CLOTH002',
    // supplier: 'ActiveFit Apparel',
    // delivered: 10,
    // imageUrl:
    //   'https://images.meesho.com/images/products/7488175/5b8f3_512.webp',
    return (
        <Flex flexDir='column'>
            <Heading>{product.name}</Heading>
            <Image src={product.imageUrl} height='200px' w='200px' />
            <Text>Price: {product.price}</Text>
            <Text>Stock {product.stock}</Text>
            <Text>Supplier: {product.supplier}</Text>
            <Text>Department: {product.Department}</Text>
            <Text>SKU: {product.SKU}</Text>
            <Text>Delivered: {product.delivered}</Text>
            <Text>Description: {product.description}</Text>
        </Flex>
    );
}

export default SingleProductPage