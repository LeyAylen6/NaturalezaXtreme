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
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/actions";
import { useState } from "react";
import { Link } from "react-router-dom";

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
	size: "",
	shoeSize: "",
};

const FormProduct = () => {
	const dispatch = useDispatch();
	const [form, setForm] = useState(initialFormState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	console.log(form);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addProduct(form));
	};
	const handleReset = (event) => {
		event.preventDefault();
		setForm(initialFormState);
	};

	const sizes = {
		shoeSizes: Array.from({ length: 12 }, (_, index) => index + 35),
		clotheSizes: ["S", "M", "L", "XL", "Unique"],
	};

	const sizeOptionsRender = () => {
		if (form.type === "shoes") {
			return (
				<Select
					name="shoeSize"
					value={form.shoeSize}
					onChange={handleChange}
				>
					<option key="none" value="none">
						Select size
					</option>
					{sizes.shoeSizes?.map((size) => (
						<option key={size} value={size}>
							{size}
						</option>
					))}
				</Select>
			);
		} else
			return (
				<Select name="size" value={form.size} onChange={handleChange}>
					<option key="none" value="none">
						Select size
					</option>
					{sizes.clotheSizes?.map((size) => (
						<option key={size} value={size}>
							{size}
						</option>
					))}
				</Select>
			);
	};

	const sizeOptionsRender2 = () => {
		if (form.type === "shoes") {
			return "opciones de zapatilla";
		} else return "opciones de ropa";
	};
	return (
		<Container marginTop={10}>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				border={"1px"}
				marginBottom="15px"
			>
				<Button colorScheme="cyan" size="lg" variant="solid" m="6">
					<Link to="/CrudProduct">Back</Link>
				</Button>
				<Button colorScheme="orange" size="lg" variant="solid" m="6">
					<Link to="/">Home</Link>
				</Button>
			</Box>
			<Card padding={4}>
				<Heading>Add Product</Heading>
				<form onSubmit={handleSubmit}>
					<FormControl>
						<FormLabel>Name</FormLabel>
						<Input
							type="text"
							name="name"
							placeholder="name of product"
						/>
						<FormLabel mb="8px">Description:</FormLabel>
						<Input
							type="text"
							name="description"
							placeholder="description"
							value={form.name}
							onChange={handleChange}
							size={"md"}
						/>
						<FormLabel>Type</FormLabel>
						<Select
							name="type"
							value={form.type}
							onChange={handleChange}
						>
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
						<Select
							name="gender"
							value={form.gender}
							onChange={handleChange}
						>
							<option value="none">none</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</Select>
						<FormLabel>Color</FormLabel>
						<Select
							name="color"
							value={form.color}
							onChange={handleChange}
						>
							<option value="option1">none</option>
							<option value="option2">Black</option>
							<option value="option3">White</option>
							<option value="option4">Grey</option>
							<option value="option5">Blue</option>
							<option value="option6">Red</option>
							<option value="option7">Yellow</option>
							<option value="option8">Brown</option>
							<option value="option9">Pink</option>
						</Select>

						<FormLabel>Size</FormLabel>
						{sizeOptionsRender()}

						<FormLabel>ArticleID</FormLabel>
						<Input
							type="text"
							placeholder="ArticleID"
							name="articleID"
							value={form.articleID}
							onChange={handleChange}
						/>
						<FormLabel>Stock</FormLabel>
						<Input
							type="number"
							placeholder="Stock"
							name="stock"
							value={form.stock}
							onChange={handleChange}
						/>
						<FormLabel>Price: U$S</FormLabel>
						<Input
							type="number"
							placeholder="Price"
							name="price"
							value={form.price}
							onChange={handleChange}
						/>
						<FormLabel>Image</FormLabel>
						<Input
							type="text"
							placeholder="Image"
							name="image"
							value={form.image}
							onChange={handleChange}
						/>
					</FormControl>
					<Box
						marginTop={4}
						display={"flex"}
						justifyContent={"space-between"}
					>
						<Button type="submit">Add</Button>
						<Button onClick={handleReset}>Cancel</Button>
					</Box>
				</form>
			</Card>
		</Container>
	);
};

export default FormProduct;
