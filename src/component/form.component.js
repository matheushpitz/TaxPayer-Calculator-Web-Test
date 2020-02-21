import React from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap'

export const createFormData = () => {
    return {
        cpf: '',
        name: '',
        dependents: '',
        grossSalary: ''
    }
};

export const FormComponent = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            <FormGroup controlId="cpf">
                <FormLabel>CPF</FormLabel>
                <FormControl type="text" name="cpf" placeholder="Ex: 000.000.000-00" value={props.data.cpf} onChange={props.onChange}></FormControl>
            </FormGroup>
            <FormGroup controlId="name">
                <FormLabel>Nome</FormLabel>
                <FormControl type="text" name="name" placeholder="Ex: José da Silva" value={props.data.name} onChange={props.onChange}></FormControl>
            </FormGroup>
            <FormGroup controlId="dependents">
                <FormLabel>Número de Dependentes</FormLabel>
                <FormControl type="text" name="dependents" placeholder="Ex: 4" value={props.data.dependents} onChange={props.onChange}></FormControl>
            </FormGroup>
            <FormGroup controlId="grossSalary">
                <FormLabel>Renda Bruta</FormLabel>
                <FormControl type="text" name="grossSalary" placeholder="Ex: R$ 6.500,00" value={props.data.grossSalary} onChange={props.onChange}></FormControl>
            </FormGroup>
            <Button variant="primary" type="submit">Adicionar</Button>
        </Form>
    );
};