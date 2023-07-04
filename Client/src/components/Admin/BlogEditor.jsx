import { Center, Box, Text, FormControl, FormLabel, Input, Button, Select, Flex} from "@chakra-ui/react";
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

    const showUploadWidget = () => {
		cloudinary.openUploadWidget(
			{
				cloudName: "dn3tgaige",
				uploadPreset: "articles",
				sources: ["local", "camera", "image_search", "url"],
				showAdvancedOptions: true,
				cropping: true,
				multiple: false,
				defaultSource: "local",
				styles: {
					palette: {
						window: "#FFFFFF",
						windowBorder: "#90A0B3",
						tabIcon: "#0078FF",
						menuIcons: "#5A616A",
						textDark: "#000000",
						textLight: "#FFFFFF",
						link: "#0078FF",
						action: "#FF620C",
						inactiveTabIcon: "#0E2F5A",
						error: "#F44235",
						inProgress: "#0078FF",
						complete: "#20B832",
						sourceBg: "#E4EBF1",
					},
					fonts: {
						default: {
							active: true,
						},
					},
				},
			},
            (err, result) => {
				if (err) {
					console.log(err)
				};

				if ((result.event = "success" && result.info.url)) {
					setForm({
						...form,
						image: result.info.url,
					});
				};
			});
        };

    return(
        <Center marginBlock={20}>
            <Flex direction={"column"} width="80%" gap="1.5" m={"1"}>
                <Box flex="1" p="5" borderWidth="4px" borderRadius="xl" bgColor="rgba(46, 48, 58, 0.8)">
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
                        <Input type='text' name="content" height={"sm"} placeholder='Insert a text no longer than 500 characters' onChange={handleInputChange}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Post image</FormLabel>
                        {/* <Input type='text' name="image" placeholder='Insert the URL of an image' onChange={handleInputChange}/> */}
                        <Button
                            onClick={showUploadWidget}
                            color="black"
                            border="none"
                            borderRadius={7}
                            // bg="lightgrey"
                            w={80}
                            h={10}
                            background="gray.300"
                        >
                            Upload image
                        </Button>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Select a category</FormLabel>
                        <Select name="role" placeholder='Select one option' onChange={handleInputChange}>
                        {categories?.map(category => {
                            return(
                                <option key={category} value={category}>{category}</option>
                            )
                        })};
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
            </Flex>
        </Center>

        )
}

export default BlogEditor;