import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

import {
    Container,
    Header,
    Photo,
    User,
    UserGreeting,
    UserInfo,
    UserName,
    UserContainer,
    Icon,
    HighlightCards
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
                    <Icon name="power" />
                </UserContainer>
            </Header>
            <HighlightCards>
                <HighlightCard lastTransaction="Última entrada dia 13 de setembro" title="Entradas" amount="R$ 17.000,90" type="up" />
                <HighlightCard lastTransaction="Última saída dia 08 de setembro" title="Saidas" amount="R$ 2.000,90" type="down" />
                <HighlightCard lastTransaction="Última atualização dia 13 de setembro" title="Total" amount="R$ 15.000,90" type="total" />
            </HighlightCards>
        </Container>
    )
}
