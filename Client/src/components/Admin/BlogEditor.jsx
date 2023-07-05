import {
	Center,
	Box,
	Text,
	FormControl,
	FormLabel,
	Input,
	Button,
	Select,
	Flex,
	FormHelperText,
	VStack,
} from "@chakra-ui/react"
import { EditIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { getCategories } from "../../redux/actions/actions"
import { originalColors } from "../../theme/palette"
import upCase from "../../utils/upCase"

const BlogEditor = () => {
	const URL = "http://localhost:3001/"
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategories())
	}, [dispatch])

	const categories = useSelector(state => state.categories)
	const [inputValues, setInputValues] = useState({
		name: "",
		content: "",
		image: "",
		role: [],
	})

	const handleInputChange = e =>
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value,
		})

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			console.log(inputValues)
			const response = await axios.post(`${URL}blog`, inputValues)
			alert(response.data.message)
			setInputValues({
				name: "",
				content: "",
				image: "",
				role: [],
			})
			navigate("/blog")
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
				}

				if ((result.event = "success" && result.info.url)) {
					setForm({
						...form,
						image: result.info.url,
					})
				}
			}
		)
	}

	return (
		<Center pt={28} mb={16}>
			<Flex direction={"column"} gap={3} w={'100%'}>
				<Flex justifyContent={'center'} gap={5} alignItems={'center'} p={5} bgColor={originalColors.darkgrey}>
					<Text fontSize="2xl" textAlign={'start'} fontWeight="semibold" color={originalColors.white}>
						Submit a blog article
					</Text>
					<EditIcon boxSize={6} color={originalColors.white}></EditIcon>

				</Flex>
				<Box flex="1" p={10} borderRadius="xl" w={'80%'} margin={'auto'} bgColor="rgba(46, 48, 58, 0.8)">
					<form onSubmit={handleSubmit}>
						<VStack spacing={5}>
							<FormControl>
								<FormLabel color={originalColors.white}>Title</FormLabel>
								<Input
									type="text"
									name="name"
									placeholder="Insert a descriptive name"
									onChange={handleInputChange}
									borderColor={originalColors.lightgreen}
									focusBorderColor={originalColors.blueRating}
								/>
								<FormHelperText textAlign={"left"} color={originalColors.white}>
									Enter the name of the post
								</FormHelperText>
							</FormControl>
							<FormControl>
								<FormLabel color={originalColors.white}>Body</FormLabel>
								<Input
									type="text"
									name="content"
									minHeight={200}
									placeholder="Insert a text no longer than 500 characters"
									onChange={handleInputChange}
									borderColor={originalColors.lightgreen}
									focusBorderColor={originalColors.blueRating}
								/>
								<FormHelperText textAlign={"left"} color={originalColors.white}>
									Enter the body of the post
								</FormHelperText>
							</FormControl>
							<FormControl>
								<FormLabel color={originalColors.white} textAlign={'center'}>Image</FormLabel>
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
								<FormLabel color={originalColors.white}>Category</FormLabel>
								<Select
									name="role"
									placeholder="Select one option"
									onChange={handleInputChange}
									borderColor={originalColors.lightgreen}
									focusBorderColor={originalColors.blueRating}
								>
									{categories?.map(category => {
										return (
											<option key={category} value={category}>
												{upCase(category)}
											</option>
										)
									})}
									;
								</Select>
								<FormHelperText textAlign={"left"} color={originalColors.white}>
									Select a category
								</FormHelperText>
							</FormControl>
						</VStack>

						<Button backgroundColor="black" color="white" marginTop="15px" type="submit">
							Create Post
						</Button>
					</form>
				</Box>
			</Flex>
		</Center>
	)
}

export default BlogEditor
