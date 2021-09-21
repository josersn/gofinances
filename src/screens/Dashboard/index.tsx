import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionData } from "../../components/TransactionCard";

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
    HighlightCards,
    Transactions,
    Title,
    TransactionList,
    LogoutButton
} from "./styles";

export interface DataListProps extends TransactionData {
    id: string;
}

export function Dashboard() {

    const data: DataListProps[] = [
        {
            id: "1",
            title: "Desenvolvimento de Site",
            amount: "R$ 1.200,00",
            date: "16/09/2021",
            category: {
                name: "Trabalho",
                icon: "dollar-sign",
            },
            type: "positive"
        },
        {
            id: "2",
            title: "Compra de tênis",
            amount: "R$ 259",
            date: "06/09/2021",
            category: {
                name: "Compras",
                icon: "coffee",
            },
            type: "negative"
        },
        {
            id: "3",
            title: "Desenvolvimento de APP",
            amount: "R$ 1.200,00",
            date: "16/09/2021",
            category: {
                name: "Vendas",
                icon: "dollar-sign",
            },
            type: "positive"
        }
    ];

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
                    <LogoutButton onPress={() => {}}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserContainer>
            </Header>

            <HighlightCards>
                <HighlightCard lastTransaction="Última entrada dia 13 de setembro" title="Entradas" amount="R$ 17.000,90" type="up" />
                <HighlightCard lastTransaction="Última saída dia 08 de setembro" title="Saidas" amount="R$ 2.000,90" type="down" />
                <HighlightCard lastTransaction="Última atualização dia 13 de setembro" title="Total" amount="R$ 15.000,90" type="total" />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (<TransactionCard
                        data={item}
                    />)}
                >

                </TransactionList>
            </Transactions>
        </Container>
    )
}
