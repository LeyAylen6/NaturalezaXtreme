import { Card, CardHeader, CardBody, Heading, Text, Image, Badge, Center } from "@chakra-ui/react";

const Post = (post) => {
const {name, image, content, role} = post;
    return(
        <Card margin="10px" padding="10px" w={570}>
            <CardHeader>
                <Heading fontSize={"27px"} m={"2"}>{name}</Heading>
            </CardHeader>
            <Image src={image} alt={name} borderRadius='lg' m={"2"} boxSize='90%' alignSelf={"center"}/>
            <CardBody>
            <Text m={5}>{content}</Text>
            </CardBody>
            <Badge p={3} color="green" fontSize={"sm"}>{role}</Badge>
        </Card>
    )
}

export default Post;