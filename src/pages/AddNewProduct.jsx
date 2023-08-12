import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  useStatStyles,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Form } from 'react-router-dom';

// id: 4,
//       department: 'Clothing',
//       name: "Women's Yoga Pants",
//       description: 'High-quality yoga pants for maximum comfort during workouts.',
//       price: 29.99,
//       stock: 30,
//       sku: 'CLOTH002',
//       supplier: 'ActiveFit Apparel',
//       delivered: 10,
//       imageUrl:
//         'https://images.meesho.com/images/products/7488175/5b8f3_512.webp',
const AddNewProduct = () => {
  const initialValue = {
    id: '',
    department: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
    sku: ' ',
    supplier: '',
    delivered: 0,
    imageURL: '',
  };
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInput = event => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <Flex>
      <Flex>
        <Heading>Add New Product</Heading>
      </Flex>
      <Flex flexDir="column">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Department</FormLabel>
            <Select
              width="100px"
              name="department"
              id="department"
        
              onChange={handleInput}
            >
              <option value="Kitchen">Kitchen</option>
              <option value="Clothing">Clothing</option>
              <option value="Toys">Toys</option>
            </Select>
          </FormControl>
          <FormControl><FormLabel>Name:</FormLabel>
          <Input onChange={handleInput} name='name' /></FormControl>
          <FormControl>
            <FormLabel>Descirption</FormLabel>
            <Textarea name='descrition' onChange={handleInput} />
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input type='number' name="price" onClick={handleInput} />
          </FormControl>
          <FormControl>
            <FormLabel>stock</FormLabel>
            <Input type='number' name="stock" onClick={handleInput} />
          </FormControl>
          <FormControl>
            <FormLabel>SKU</FormLabel>
            <Input  name="sku" onClick={handleInput} />
          </FormControl>
          <FormControl>

            <FormLabel>Supplier</FormLabel>
            <Input  name="supplier" onClick={handleInput} />
          </FormControl>
          <FormControl>

            <FormLabel>Delivered</FormLabel>
            <Input type='number' name="delivered" onClick={handleInput} />
          </FormControl>
          <FormControl>

            <FormLabel>Image URL</FormLabel>
            <Input name="imageURL" onClick={handleInput} />
          </FormControl>
          <Button>Add Product</Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default AddNewProduct;
