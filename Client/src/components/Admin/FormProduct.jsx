import {
	Box,
	Button,
	Container,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Select,
	WrapItem,
	Wrap,
	NumberInput,
	NumberInputField,
	FormHelperText,
	FormErrorMessage,
} from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/actions/actions"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import cloudinary from "cloudinary"
import validateForm from "./helpers/validateForm"

const initialFormState = {
	name: "",
	description: "",
	type: "",
	gender: "",
	color: "",
	price: 0,
	articleID: "",
	active: true,
	image: "",
	size: { XS: 0, S: 0, M: 0, L: 0, XL: 0, U: 0 },
	shoeSize: { 35: 0, 36: 0, 37: 0, 38: 0, 39: 0, 40: 0, 41: 0, 42: 0, 43: 0, 44: 0, 45: 0, 46: 0 },
}

const initialErrors = {
	name: "",
	description: "",
	type: "",
	gender: "",
	color: "",
	price: "",
	articleID: "",
	// active: "",
	image: "",
	size: "",
	shoeSize: "",
}

const FormProduct = () => {
	const dispatch = useDispatch()
	const [form, setForm] = useState(initialFormState)
	const [disableSubmit, setDisableSubmit] = useState(true)
	const [errors, setErrors] = useState(initialErrors)

	// console.log("disable submit :", disableSubmit)
	console.log("form", form)
	console.log("errors", errors)

	useEffect(() => {
		handleDisable({ ...form })
	}, [form])

	const handleChange = e => {
		// e.preventDefault()
		let { name, value } = e.target
		console.log(name, value)

		setForm(prev => {
			// Verificar si el campo es 'shoeSize'
			if (name.startsWith("shoeSize")) {
				if (value === "") value = 0
				const shoeSizeKey = name.split(".")[1]
				return {
					...prev,
					shoeSize: {
						...prev.shoeSize,
						[shoeSizeKey]: parseInt(value),
					},
				}
			}
			if (name.startsWith("size")) {
				if (value === "") value = 0
				const sizeKey = name.split(".")[1]
				return {
					...prev,
					size: {
						...prev.size,
						[sizeKey]: parseInt(value),
					},
				}
			}

			if (name.startsWith("price")) {
				if (value !== "") value = parseInt(value)
				return {
					...prev,
					price: value,
				}
			}

			return {
				...prev,
				[name]: value,
			}
		})

		validateForm(
			{
				...form,
				[name]: value,
			},
			name,
			errors,
			setErrors
		)
	}

	const handleDisable = form => {
		const values = Object.values(form)
		const allKeysFilled = values.every(value => !!value)
		setDisableSubmit(!allKeysFilled)
	}

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addProduct(form))
	}
	const handleReset = event => {
		event.preventDefault()
		setForm(initialFormState)
	}

	const SizeOptions = () => {
		const sizes = form.type === "shoes" ? form.shoeSize : form.size

		return (
			<Wrap>
				{Object.entries(sizes).map(([key, value]) => (
					<WrapItem key={key} width="32%" marginBottom="10px">
						<FormLabel>{key}</FormLabel>
						<Input
							type="number"
							value={value}
							name={`${form.type === "shoes" ? "shoeSize" : "size"}.${key}`}
							onChange={handleChange}
						/>
					</WrapItem>
				))}
			</Wrap>
		)
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
		<Container w="100%" marginTop={10}>
			<Box display={"flex"} justifyContent={"space-between"} marginBottom="15px">
				<Button colorScheme="cyan" size="lg" variant="solid" m="6">
					<Link to="/CrudProduct">Back</Link>
				</Button>
				<Button colorScheme="orange" size="lg" variant="solid" m="6">
					<Link to="/">Home</Link>
				</Button>
			</Box>
			<Box padding={4}>
				<Heading>Add Product</Heading>
				<form onSubmit={handleSubmit}>
					<FormControl isInvalid={errors.name}>
						<FormLabel>Name</FormLabel>
						<Input type="text" name="name" value={form.name} placeholder="Article name" onChange={handleChange} />
						{!errors.name ? (
							<FormHelperText textAlign={"left"}>Enter the name of the article you want to create</FormHelperText>
						) : (
							<FormErrorMessage>Name is required</FormErrorMessage>
						)}
					</FormControl>

					<FormControl isInvalid={errors.description}>
						<FormLabel mb="8px">Description:</FormLabel>
						<Input
							type="text"
							name="description"
							placeholder="description"
							value={form.description}
							onChange={handleChange}
							size={"md"}
						/>
						{!errors.description ? (
							<FormHelperText textAlign={"left"}>Enter the description of the article</FormHelperText>
						) : (
							<FormErrorMessage>Description is required</FormErrorMessage>
						)}
					</FormControl>

					<FormControl isInvalid={errors.type}>
						<FormLabel>Type</FormLabel>
						<Select name="type" value={form.type} onChange={handleChange}>
							<option value="none">none</option>
							<option value="Tshirt">Tshirt</option>
							<option value="sweatshirt">sweatshirt</option>
							<option value="jacket">jacket</option>
							<option value="pant">pant</option>
							<option value="accesories">accesories</option>
							<option value="shoes">shoes</option>
							<option value="equipment">equipment</option>
						</Select>
						{!errors.type ? (
							<FormHelperText textAlign={"left"}>Select the article type</FormHelperText>
						) : (
							<FormErrorMessage>Type is required</FormErrorMessage>
						)}
					</FormControl>

					<FormControl isInvalid={errors.gender}>
						<FormLabel>Gender</FormLabel>
						<Select name="gender" value={form.gender} onChange={handleChange}>
							<option value="none">none</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</Select>
						{!errors.gender ? (
							<FormHelperText textAlign={"left"}>Select the gender of the article</FormHelperText>
						) : (
							<FormErrorMessage>Gender is required</FormErrorMessage>
						)}
					</FormControl>

					<FormControl isInvalid={errors.color}>
						<FormLabel>Color</FormLabel>
						<Select name="color" value={form.color} onChange={handleChange}>
							<option value="none">none</option>
							<option value="Black">Black</option>
							<option value="White">White</option>
							<option value="Grey">Grey</option>
							<option value="Blue">Blue</option>
							<option value="Red">Red</option>
							<option value="Yellow">Yellow</option>
							<option value="Brown">Brown</option>
							<option value="Pink">Pink</option>
						</Select>
						{!errors.color ? (
							<FormHelperText textAlign={"left"}>Select the color of the article</FormHelperText>
						) : (
							<FormErrorMessage>Color is required</FormErrorMessage>
						)}
					</FormControl>

					<FormLabel>Sizes</FormLabel>
					<SizeOptions />

					<FormControl isInvalid={errors.articleID}>
						<FormLabel>ArticleID</FormLabel>
						<Input
							type="text"
							placeholder="ArticleID"
							name="articleID"
							value={form.articleID}
							onChange={handleChange}
						/>
						{!errors.articleID ? (
							<FormHelperText textAlign={"left"}>Enter the article ID</FormHelperText>
						) : (
							<FormErrorMessage>Article ID is required</FormErrorMessage>
						)}
					</FormControl>

					<FormControl isInvalid={errors.price}>
						<FormLabel>Price $</FormLabel>
						<NumberInput
							name="price"
							value={form.price}
							onChange={value => handleChange({ target: { name: "price", value } })}
						>
							<NumberInputField />
						</NumberInput>
						{!errors.price ? (
							<FormHelperText textAlign={"left"}>Enter the price of the article</FormHelperText>
						) : (
							<FormErrorMessage>Price is required</FormErrorMessage>
						)}
					</FormControl>

					<FormControl isInvalid={errors.image}>
						<FormLabel>Image</FormLabel>

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
						{!errors.image ? (
							<FormHelperText>Upload an article image</FormHelperText>
						) : (
							<FormErrorMessage>An image is required</FormErrorMessage>
						)}
					</FormControl>

					<Box marginTop={4} display={"flex"} justifyContent={"space-between"}>
						<Button type="submit" isDisabled={disableSubmit} colorScheme="linkedin" w={100}>
							Add
						</Button>
						<Button onClick={handleReset} w={100}>
							Clear
						</Button>
					</Box>
				</form>
			</Box>
		</Container>
	)
}

export default FormProduct
