import React, { useState } from "react";

import { Modal } from "react-native";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

interface FormData {
    name: string;
    amount: string;
}

import { CategorySelect } from "../CategorySelect";

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
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: "Categoria",
    });


    const { control, handleSubmit } = useForm();

    function handleTransactionTypeSelect(type: "up" | "down") {
        setTransactionType(type)
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryMOdal() {
        setCategoryModalOpen(true);
    }
    function handleRegister(form: FormData) {
        console.log(form);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <InputForm
                        placeholder="Nome"
                        name="name"
                        control={control}
                    />
                    <InputForm
                        control={control}
                        name="amount"
                        placeholder="Preço"
                    />
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

                    <CategorySelectButton
                        title={category.name}
                        onPress={handleOpenSelectCategoryMOdal}
                    />

                </Fields>
                <Button
                    title="Enviar"
                    onPress={handleSubmit(handleRegister)}
                />
            </Form>
            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
        </Container>
    )
}