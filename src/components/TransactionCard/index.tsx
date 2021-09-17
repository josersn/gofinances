import React from "react";

import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
} from "./styles";

interface CategoryProps {
    name: string;
    icon: string;
}

export interface TransactionData {
        title: string;
        amount: string;
        category: CategoryProps
        date: string;
        type: "positive" | "negative";
}

interface Props {
    data: TransactionData
}

export type TransactionType = Pick<TransactionData, "type">;

export function TransactionCard({
    data
}: Props) {
    return (
        <Container>
            <Title>{data.title}</Title>
            <Amount type={data.type}>
                {data.type === "negative" && "- "}
                {data.amount}
            </Amount>
            <Footer>
                <Category>
                    <Icon name={data.category.icon}></Icon>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}