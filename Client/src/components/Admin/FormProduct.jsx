import {
	Box,
	Button,
	Card,
	Container,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Select,
	Text,
	Flex,
	WrapItem,
	Wrap,
	NumberInput,
	NumberInputField,
} from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/actions/actions"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
	active: "",
	image: "",
	size: "",
	shoeSize: "",
}

const FormProduct = () => {
	const dispatch = useDispatch()
	const [form, setForm] = useState(initialFormState)
	const [disableSubmit, setDisableSubmit] = useState(true)
	const [errors, setErrors] = useState(initialErrors)

	console.log("disable submit :", disableSubmit)
	console.log('form', form)

	useEffect(() => {
		handleDisable({ ...form })
	}, [form])

	const handleChange = e => {
		e.preventDefault()
		let { name, value } = e.target

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
				if (value === "") value = 0
				return {
					...prev,
					price: parseInt(value),
				}
			}

			return {
				...prev,
				[name]: value,
			}
		})
	}

	console.log(form)

	const handleDisable = form => {
		const values = Object.values(form)
		console.log("values: ", values)
		// const allKeysFilled = values.every(value => value.length > 0)
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
					<FormControl>
						<FormLabel>Name</FormLabel>
						<Input type="text" name="name" placeholder="name of product" onChange={handleChange} />
						<FormLabel mb="8px">Description:</FormLabel>
						<Input
							type="text"
							name="description"
							placeholder="description"
							value={form.description}
							onChange={handleChange}
							size={"md"}
						/>
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
						<FormLabel>Gender</FormLabel>
						<Select name="gender" value={form.gender} onChange={handleChange}>
							<option value="none">none</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</Select>
						<FormLabel>Color</FormLabel>
						<Select name="color" value={form.color} onChange={handleChange}>
							<option value="option1">none</option>
							<option value="Black">Black</option>
							<option value="White">White</option>
							<option value="Grey">Grey</option>
							<option value="Blue">Blue</option>
							<option value="Red">Red</option>
							<option value="Yellow">Yellow</option>
							<option value="Brown">Brown</option>
							<option value="Pink">Pink</option>
						</Select>

						<FormLabel>Sizes</FormLabel>
						<SizeOptions />

						<FormLabel>ArticleID</FormLabel>
						<Input
							type="text"
							placeholder="ArticleID"
							name="articleID"
							value={form.articleID}
							onChange={handleChange}
						/>
						<FormLabel>Price $</FormLabel>
						<NumberInput
							name="price"
							value={form.price}
							onChange={value => handleChange({ target: { name: "price", value: parseInt(value) } })}
						>
							<NumberInputField />
						</NumberInput>
						<FormLabel>Image</FormLabel>
						<Input type="text" placeholder="Image" name="image" value={form.image} onChange={handleChange} />
					</FormControl>
					<Box marginTop={4} display={"flex"} justifyContent={"space-between"}>
						<Button onClick={handleReset}>Cancel</Button>
						<Button type="submit" isDisabled={disableSubmit}>
							Add
						</Button>
					</Box>
				</form>
			</Box>
		</Container>
	)
}

export default FormProduct
