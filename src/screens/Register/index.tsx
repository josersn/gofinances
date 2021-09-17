import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Keyboard,
    Modal,
    TouchableWithoutFeedback,
    Alert
} from "react-native";
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

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Nome é obrigatório"),
    amount: yup
        .number()
        .positive("O valor precisa ser positivo")
        .required("O valor é obrigatório")
        .typeError("Informe um valor númerico"),
});

export function Register() {

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: "Categoria",
    });


    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

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
        if (!transactionType) {
            return Alert.alert("Selecione o tipo da transação.")
        }

        if (category.key === 'category') {
            return Alert.alert("Selecione o tipo de categoria.")
        }

        console.log(form);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm
                            error={errors.name && errors.name.message}
                            placeholder="Nome"
                            name="name"
                            autoCapitalize="sentences"
                            control={control}
                        />
                        <InputForm
                            error={errors.name && errors.name.message}
                            control={control}
                            name="amount"
                            placeholder="Preço"
                            keyboardType="numeric"
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
        </TouchableWithoutFeedback>
    )
}