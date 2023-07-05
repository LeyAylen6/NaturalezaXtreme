import { Box, Text, Input, Button } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateProduct } from "../../redux/actions/actions";
import validate from "../Validation/validationComments";

const RateArticle = ({id, userId}) => {

    const dispatch = useDispatch();
    const [inputValues, setInputValues] = useState({
        id: null,
        rating: [],
        comments: [{"userId": null, "comment": ""}],
        active: true
    });

    const [errors, setErrors] = useState({
        rating: "*Select a score from one to five",
        comment: "*Leave a comment",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
      
        let updatedInputValues = { ...inputValues };
      
        if (name === "rating") {
          updatedInputValues = {
            ...inputValues,
            id: id,
            rating: [value],
          };
        }
        if (name === "comment") {
          updatedInputValues = {
            ...inputValues,
            comments: [{ userId: userId, comment: value }],
          };
        }
      
        setInputValues(updatedInputValues); 
        validate(updatedInputValues, name, setErrors); 
      };
    
    const onSubmit = () => {
        dispatch(updateProduct(inputValues))
    }

    return(
    <Box margin={"10"} width={"md"}>
        <form onSubmit={onSubmit}> 
            <Input
                placeholder='Rate your purchase'
                name="rating"
                onChange={handleChange}
                size='md'
            />
            <Text mb='8px' color={"tomato"}>{errors.rating}</Text>
            <Input
                name="comment"
                onChange={handleChange}
                placeholder='Tell us about the purchased item'
                size='md'
            />
            <Text mb='8px' color={"tomato"}>{errors.comment}</Text>
            <Button
                backgroundColor="black"
                color="white"
                marginTop="15px"
                type="submit"
                isDisabled={errors.rating || errors.comment}
                >Submit review
            </Button>
        </form>
    </Box>
    )
}

export default RateArticle