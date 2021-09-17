import React, { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { CategorySelect } from "../../components/Forms/CategorySelect";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from "./styles";

export function Register() {

    const [transactionType, setTransactionType] = useState('');

    function handleTransactionTypeSelect(type: "up" | "down") {
        setTransactionType(type)
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />
                    <TransactionTypes>
                        <TransactionTypeButton
                            title="Income"
                            type="up"
                            onPress={() => handleTransactionTypeSelect("up")}
                            isActive={transactionType === "up"}
                        />
                        <TransactionTypeButton
                            title="Outcome"
                            type="down"
                            isActive={transactionType === "down"}
                            onPress={() => handleTransactionTypeSelect("down")}
                        />
                    </TransactionTypes>
                    <CategorySelect title="Category"/>
                </Fields>
                <Button title="Enviar" />
            </Form>
        </Container>
    )
}