import { Box, Text, Input, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { updateProduct } from "../../redux/actions/actions";

const RateArticle = ({id, userId}) => {

    const dispatch = useDispatch();
    const [inputValues, setInputValues] = useState({
        id: null,
        rating: [],
        comments: [{"userId": null, "comment": ""}],
        active: true
    });
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === "rating"){
            setInputValues({
                ...inputValues,
                id: id,
                rating: [value]
            });
        }
        if(name === "comment"){
            setInputValues({
                ...inputValues,
                comments: [{"userId": userId, "comment": value}],
            });
        }
    }
    
    const onSubmit = () => {
        dispatch(updateProduct(inputValues))
    }

    return(
    <Box margin={"10"}>
        <form onSubmit={onSubmit}> 
            <Input
                name="rating"
                onChange={handleChange}
                placeholder='Rate your purchase'
                size='sm'
            />
            <Text mb='8px'>Rating:{inputValues.rating}</Text>
            <Input
                name="comment"
                onChange={handleChange}
                placeholder='Tell us about the purchased item'
                size='sm'
            />
            <Text mb='8px'>Comment: {inputValues.comments.comment}</Text>
            <Button
                backgroundColor="black"
                color="white"
                marginTop="15px"
                type="submit"
                >Submit review
            </Button>
        </form>
    </Box>
    )

}

export default RateArticle