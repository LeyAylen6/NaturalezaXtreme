import { Container, Box, Text, FormControl, FormLabel, Input, Button, Select} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCategories } from "../../redux/actions/actions";

const BlogEditor = () => {

    const URL = "http://localhost:3001/";
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    const categories = useSelector(state => state.categories)
    const [inputValues, setInputValues] = useState({
        name: '',
        content: '',
        image: '',
        role: []
    })

    const handleInputChange = (e) => setInputValues({
        ...inputValues,
        
        [e.target.name]: e.target.value
      });

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            console.log(inputValues)
            const response = await axios.post(`${URL}blog`, inputValues);
            alert(response.data.message)
            setInputValues({
                name: "",
                content: '',
                image: '',
                role: []
            })
            navigate("/blog");
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container marginBlock={20}>
            <Box flex="1" p="5" borderWidth="4px" borderRadius="xl" bgColor="rgba(46, 48, 58, 0.8)" >
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" color={"white"}>
                    Blog Editor <br /> Submit your article
                </Text>
            </Box>
            <Box flex="1" p="5" borderWidth="4px" borderRadius="xl" bgColor="rgba(46, 48, 58, 0.8)">

            <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Post name</FormLabel>
                <Input type='text' name="name" placeholder='Insert a descriptive name' onChange={handleInputChange}/>
            </FormControl>
            <FormControl>
                <FormLabel>Post body</FormLabel>
                <Input type='text' name="content" placeholder='Insert a text no longer than 500 characters' onChange={handleInputChange}/>
            </FormControl>
            <FormControl>
                <FormLabel>Post image</FormLabel>
                <Input type='text' name="image" placeholder='Insert the URL of an image' onChange={handleInputChange}/>
            </FormControl>
            <FormControl>
                <FormLabel>Select a category</FormLabel>
                <Select name="role" placeholder='Select one option' onChange={handleInputChange}>
                {categories?.map(category => {
                    return(
                        <option value={category}>{category}</option>
                    )
                })};
                    {/* <option value="hiking">hiking</option>
                    <option value="camping">camping</option>
                    <option value="mountaineering">mountaineering</option>
                    <option value="cycling">cycling</option>
                    <option value="rock climbing">rock climbing</option>
                    <option value="running">running</option> */}
                </Select>
            </FormControl>
            <Button
              backgroundColor="black"
              color="white"
              marginTop="15px"
              type="submit"
            >Create Post</Button>
            </form>
            </Box>
        </Container>

        )
}

export default BlogEditor;