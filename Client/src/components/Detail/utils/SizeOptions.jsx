const SizeOptions = ({detailObject}) => {
	//mapea a string los objetos de talle de ropa
	let clotheSizeOptions = []
	if (detailObject.size && typeof detailObject.size === "object") {
		clotheSizeOptions = Object.entries(detailObject.size).map(([key, value]) => (
			<option key={key} value={key} disabled={!!!value}>
				"{key}"
			</option>
		))
	}

	//mapea a string los objetos de talle de zapatillas
	let shoeSizeOptions = []
	if (detailObject.shoeSize && typeof detailObject.shoeSize === "object") {
		shoeSizeOptions = Object.entries(detailObject.shoeSize).map(([key, value]) => (
			<option key={key} value={key} disabled={!value}>
				N°{key}
			</option>
		))
	}

	console.log(shoeSizeOptions, clotheSizeOptions)

	return detailObject.type === "shoes" ? shoeSizeOptions : clotheSizeOptions
}

export default SizeOptions