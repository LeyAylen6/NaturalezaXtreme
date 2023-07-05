import { useState } from "react"
import { Button, Center, Box, HStack, Select, Text, Flex } from "@chakra-ui/react"
import {RepeatIcon} from '@chakra-ui/icons'
import { useDispatch } from "react-redux"
import { filterCombinated } from "../../redux/actions/actionFilters"
import { articlesTypes, articlesColor, articlesGender } from "../../utils/constants"
import { MdOutlineRefresh } from "react-icons/md"
import { originalColors } from "../../theme/palette"

const Filters = () => {
	const [filters, setFilters] = useState({
		gender: "",
		type: "",
		color: "",
		order: "",
	})

	const dispatch = useDispatch()

	if (filters.gender || filters.type || filters.color || filters.order) dispatch(filterCombinated(filters))

	const handleChangeGender = event => {
		const { value } = event.target
		if (articlesGender.find(article => article.value === value)) {
			setFilters({
				...filters,
				gender: value,
			})
		} else {
			setFilters({
				...filters,
				gender: "",
			})
		}
	}

	const handleChangeType = event => {
		const { value } = event.target
		if (articlesTypes.find(article => article.value === value)) {
			setFilters({
				...filters,
				type: value,
			})
		} else {
			setFilters({
				...filters,
				type: "",
			})
		}
	}
	const handleChangeColor = event => {
		const { value } = event.target
		if (articlesColor.find(article => article.value === value)) {
			setFilters({
				...filters,
				color: value,
			})
		} else {
			setFilters({
				...filters,
				color: "",
			})
		}
	}

	const handleChangeOrder = event => {
		const { value } = event.target
		if (value === "asc" || value === "desc") {
			setFilters({
				...filters,
				order: value,
			})
		} else {
			setFilters({
				...filters,
				order: "",
			})
		}
	}

	const handlerReset = () => {
		setFilters({
			gender: "",
			type: "",
			color: "",
			order: "",
		})

		dispatch(filterCombinated({
			gender: "",
			type: "",
			color: "",
			order: "",
		}))

		document.getElementById("Gender").value = "Gender"
		document.getElementById("Type").value = "Type"
		document.getElementById("Color").value = "Color"
		document.getElementById("Price").value = "Price"
	}

	const selectTagStyles = {
		w: 150,
		bgColor: "white",
		fontSize: 14,
    bgColor: 'white',
    textAlign: 'start',
    h:7
    
	}

	return (
		<HStack display={"flex"} justifyContent={"center"} p="0" marginBottom={"20px"} marginLeft={"0"} marginRight={"0"}>
			<Box
				display={"flex"}
				justifyContent={"space-evenly"}
				alignItems={"center"}
				gap={5}
				w={1000}
				bgColor={'white'}
        borderRadius={'10px'}
				p={"10px 0"}
			>
				<Text fontWeight={'semibold'}>FILTERS:</Text>
				<Select
					name=""
					id="Gender"
					// value={filters.gender}
					defaultValue="Gender"
					variant={"filled"}
					onChange={handleChangeGender}
					{...selectTagStyles}
				>
					<option disabled value="Gender">
						Gender
					</option>
					<option value="none">None</option>
					{articlesGender.map((article, index) => {
						return (
							<option key={index} value={article.value}>
								{article.name}
							</option>
						)
					})}
				</Select>
				<Select
					name=""
					id="Type"
					// value={filters.type}
					defaultValue="Type"
					variant={"filled"}
					onChange={handleChangeType}
					{...selectTagStyles}
				>
					<option disabled value="Type">
						Type
					</option>
					<option value="none">None</option>
					{articlesTypes.map((article, index) => {
						return (
							<option key={index} value={article.value}>
								{article.name}
							</option>
						)
					})}
				</Select>
				<Select
					name=""
					id="Color"
					// value={filters.color}
					defaultValue="Color"
					variant={"filled"}
					onChange={handleChangeColor}
					{...selectTagStyles}
				>
					<option disabled value="Color">
						Color
					</option>
					<option value="none">None</option>
					{articlesColor.map((article, index) => {
						return (
							<option key={index} value={article.value}>
								{article.name}
							</option>
						)
					})}
				</Select>
			</Box>
			<Box
				display={"flex"}
				justifyContent={"space-evenly"}
				alignItems={"center"}
				gap={5}
				w={400}
        borderRadius={'10px'}
				bgColor={'white'}
				p={"10px 0"}
			>
				<Text fontWeight={'semibold'}>PRICE SORT:</Text>
				<Select
					name=""
					id="Price"
					// value={filters.order}
					defaultValue="Price"
					variant={"filled"}
					onChange={handleChangeOrder}
					{...selectTagStyles}
				>
					<option disabled value="Price">
						Price
					</option>
					<option value="none">None</option>
					<option value="desc">Downward</option>
					<option value="asc">Upward</option>
				</Select>
			</Box>
			<Flex alignItems={"center"}>
				<Button
					id="Icon"
					onClick={handlerReset}
          leftIcon={<RepeatIcon />}
					bg="transparent"
          size='sm'
				>Reset</Button>
			</Flex>
		</HStack>
	)
}

export default Filters
