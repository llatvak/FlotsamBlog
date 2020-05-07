import React from "react";
import { Title, Container, Level} from "rbx";

const title = {
    'marginTop': '100px',
}

export default function NotFound() {
    return (
        <div>
            <Container>
            <Level>
                <Level.Item textAlign="centered">
                    <Title style={title}>404 Page not found</Title>
                </Level.Item>
            </Level>
            </Container>
        </div>
    );
}