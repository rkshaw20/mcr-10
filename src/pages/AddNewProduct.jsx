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
import { useDataContext } from '../context/DataContextProvider';
import { useNavigate, } from 'react-router-dom';


const AddNewProduct = () => {
  const initialValue = {
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
  const {dispatch}=useDataContext();
  const navigate=useNavigate()

  const handleInput = event => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type:'ADD_NEW_PRODUCT',payload:inputValue})
    navigate('/')
    setInputValue(initialValue)
  };

  return (
    <Flex flexDirection='column' >
      <Flex>
        <Heading>Add New Product</Heading>
      </Flex>
      <Flex flexDir="column" h='full' >
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Department</FormLabel>
            <Select
              width="100px"
              name="department"
              id="department"
        isRequired
              onChange={handleInput}
            >
              <option value="Kitchen">Kitchen</option>
              <option value="Clothing">Clothing</option>
              <option value="Toys">Toys</option>
            </Select>
          </FormControl>
          <FormControl><FormLabel>Name:</FormLabel>
          <Input isRequired onChange={handleInput} name='name' value={inputValue.name} /></FormControl>
          <FormControl>
            <FormLabel>Descirption</FormLabel>
            <Textarea isRequired name='description' onChange={handleInput} value={inputValue.description} />
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input isRequired type='number' name="price" onChange={handleInput} value={inputValue.price} />
          </FormControl>
          <FormControl>
            <FormLabel>stock</FormLabel>
            <Input isRequired type='number' name="stock" onChange={handleInput} value={inputValue.stock}/>
          </FormControl>
          <FormControl>
            <FormLabel>SKU</FormLabel>
            <Input isRequired name="sku" onChange={handleInput} value={inputValue.sku} />
          </FormControl>
          <FormControl>

            <FormLabel>Supplier</FormLabel>
            <Input isRequired name="supplier" onChange={handleInput} value={inputValue.supplier} />
          </FormControl>
          <FormControl>

            <FormLabel>Delivered</FormLabel>
            <Input isRequired type='number' name="delivered" onChange={handleInput} value={inputValue.delivered} />
          </FormControl>
          <FormControl>

            <FormLabel>Image URL</FormLabel>
            <Input isRequired name="imageURL" onChange={handleInput} value={inputValue.imageURL} />
          </FormControl>
          <Button type='submit' m={2} bgColor='blue.400' >Add Product</Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default AddNewProduct;
