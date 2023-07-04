import { Card, CardHeader, CardBody, Heading, Text, Image, Badge, Center } from "@chakra-ui/react";

const Post = (post) => {
const {name, image, content, role} = post;
    return(
        <Card margin="10px" padding="10px">
            <CardHeader>
                <Heading size='md' m={"2"}>{name}</Heading>
            </CardHeader>
            <Image src={image} alt={name} borderRadius='lg' m={"2"} boxSize='65%' alignSelf={"center"}/>
            <CardBody>
            <Text m={10}>{content}</Text>
            </CardBody>
            <Badge p={3} colorScheme="green" fontSize={"sm"}>{role}</Badge>
        </Card>

    )
}

export default Post;