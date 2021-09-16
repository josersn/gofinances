import React from "react";

import {
    Container,
    Header,
    Photo,
    User,
    UserGreeting,
    UserInfo,
    UserName,
    UserContainer,
    Icon
} from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserInfo>
                        <Photo
                            source={{ uri: "https://avatars.githubusercontent.com/u/37668590?v=4" }}
                        />
                        <User>
                            <UserGreeting>Hey,</UserGreeting>
                            <UserName>José Ramos</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserContainer>

            </Header>
        </Container>
    )
}
