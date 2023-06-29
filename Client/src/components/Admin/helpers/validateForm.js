const validateForm = (form, property, errors, setErrors) => {
	console.log("formvalue:", form[property], "property:", property)

	if(property.startsWith("shoeSize") || property.startsWith("size")) return

	if (!form[property] || form[property] === 'none') {
		setErrors({ ...errors, [property]: "Required field" })
	} else {
		setErrors({ ...errors, [property]: "" })
	}
}

export default validateForm
