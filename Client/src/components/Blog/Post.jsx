import { Card, CardHeader, CardBody, Heading, Text, Image, Badge } from "@chakra-ui/react";

const Post = (post) => {
const {name, image, content, role} = post;
    return(
        <Card>
            <CardHeader>
                <Heading size='md'>{name}</Heading>
            </CardHeader>
            <CardBody>
            <Image
            src={image}
            alt={name}
            borderRadius='lg'
            />
            <Text>{content}</Text>
            <Badge>{role}</Badge>
            </CardBody>
        </Card>

    )
}

export default Post;