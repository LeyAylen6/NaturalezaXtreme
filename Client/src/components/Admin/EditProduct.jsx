import { Box, Button, Container, FormControl, FormLabel, Input } from "@chakra-ui/react"
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Flex,
	NumberInput,
	NumberInputField
} from "@chakra-ui/react"
import { Table, TableCaption, Tbody, Th, Thead, Tr } from "@chakra-ui/table"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import validateForm from "./helpers/validateForm"
import { updateProduct } from "../../redux/actions/actions"

const initialErrors = {
	name: "",
	description: "",
	price: "",
	size: "",
	shoeSize: "",
}

const EditProduct = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const product = useSelector(state => state.detail)

	const [isAlertOpen, setIsAlertOpen] = useState(false)
	const [errors, setErrors] = useState(initialErrors)
	const [disableSubmit, setDisableSubmit] = useState(true)
	const [form, setForm] = useState({
		id: product.id,
		active: product.active,
		name: product.name,
		description: product.description,
		price: product.price,
		size: product.size,
		shoeSize: product.shoeSize,
		// [product.type === "shoes" ? "shoeSize" : "size"]: product.type === "shoes" ? product.shoeSize : product.size
	})

	// console.log(form)
	// console.log(product)
	console.log(errors)

	useEffect(() => {
		handleDisable({ ...form })
	}, [form])

	const handleDisable = form => {
		const values = Object.values(form)
		const allKeysFilled = values.every(value => !!value)
		setDisableSubmit(!allKeysFilled)
	}

	const handleChange = e => {
		// e.preventDefault()
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
				if (value !== '') value = parseInt(value)
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

	const handleSubmit = event => {
		event.preventDefault()
		setIsAlertOpen(true)
	}

	const handleConfirm = () => {
		dispatch(updateProduct(form))
		setIsAlertOpen(false)
		navigate("/crudProduct")
	}

	const handleCancel = () => {
		setIsAlertOpen(false)
	}

	const handleReset = event => {
		event.preventDefault()
		setForm({
			id: product.id,
			active: product.active,
			name: product.name,
			description: product.description,
			price: product.price,
		})
	}

	const SizeOptions = () => {
		const sizes = product.type === "shoes" ? form.shoeSize : form.size

		return (
			<Flex>
				{Object.entries(sizes).map(([key, value]) => (
					<Box key={key} width="50%" marginBottom="10px">
						<FormLabel>{key}</FormLabel>
						<Input
							type="number"
							value={value}
							name={`${product.type === "shoes" ? "shoeSize" : "size"}.${key}`}
							onChange={handleChange}
						/>
					</Box>
				))}
			</Flex>
		)
	}

	return (
		<Container border="2px" maxWidth="100%" marginTop={10}>
			<Box display={"flex"} justifyContent={"space-between"} border={"1px"} marginBottom="15px">
				<Button colorScheme="cyan" size="lg" variant="solid" m="6">
					<Link to="/CrudProduct">Back</Link>
				</Button>
				<Button colorScheme="orange" size="lg" variant="solid" m="6">
					<Link to="/crudProduct">Product</Link>
				</Button>
			</Box>
			<Table>
				<TableCaption>Imperial to metric conversion factors</TableCaption>
				<Thead>
					<Tr>
						<Th>Product</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Th>
						<form onSubmit={handleSubmit}>
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input
									type="text"
									placeholder={product.name}
									name="name"
									autoComplete="off"
									value={form.name}
									onChange={handleChange}
								/>
								<p>{errors.name}</p>
								<FormLabel mb="8px">Description: </FormLabel>
								<Input
									type="text"
									placeholder={product.description}
									size={"md"}
									name="description"
									autoComplete="off"
									value={form.description}
									onChange={handleChange}
								/>
								<p>{errors.description}</p>
								<FormLabel>Price : </FormLabel>
								<NumberInput
									type="number"
									placeholder={product.price}
									size={"md"}
									name="price"
									autoComplete="off"
									onChange={value => handleChange({ target: { name: "price", value } })}
									value={form.price}
								>
									<NumberInputField />
								</NumberInput>
								<p>{errors.price}</p>
								<FormLabel>Size : </FormLabel>
								<SizeOptions></SizeOptions>
							</FormControl>
							<Button isDisabled={disableSubmit} colorScheme="teal" type="submit" m="6">
								Submit
							</Button>
							<Button colorScheme="teal" type="reset" m="6" onClick={handleReset}>
								Reset
							</Button>
						</form>
					</Th>
				</Tbody>
			</Table>
			{/* AlertDialog para confirmar el envío */}
			<AlertDialog isOpen={isAlertOpen} onClose={handleCancel}>
				<AlertDialogOverlay />
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">
						confirm change
					</AlertDialogHeader>
					<AlertDialogBody>Are you sure you want to submit the form?</AlertDialogBody>
					<AlertDialogFooter>
						<Button colorScheme="red" ml={3} onClick={handleCancel}>
							Cancel
						</Button>
						<Button colorScheme="teal" onClick={handleConfirm}>
							Confirm
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</Container>
	)
}

export default EditProduct
