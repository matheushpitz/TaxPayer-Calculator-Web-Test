import React from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, Row, Col } from 'react-bootstrap'

export const createFormData = () => {
    return {
        cpf: '',
        name: '',
        dependents: '',
        grossSalary: ''
    }
};

const cpfMask = (event, next) => {
    event.target.value = event.target.value.replace(/\D/g, '')
                                            .replace(/(\d{3})(\d)/, '$1.$2')
                                            .replace(/(\d{3})(\d)/, '$1.$2')
                                            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                                            .replace(/(-\d{2})\d+?$/, '$1');
    
    next(event);
}

const numberMask = (event, next) => {
    event.target.value = event.target.value.replace(/\D/g, '');    
    next(event);
}

export const FormComponent = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            <Row>            
                <Col lg={8} md={12} sm={12} xl={8} xs={12}>
                    <FormGroup controlId="name">
                        <FormLabel>Nome</FormLabel>
                        <FormControl type="text" name="name" placeholder="Ex: José da Silva" value={props.data.name} onChange={props.onChange}></FormControl>
                    </FormGroup>
                </Col>                        
                <Col lg={6} md={12} sm={12} xl={4} xs={12}>
                    <FormGroup controlId="cpf">
                        <FormLabel>CPF</FormLabel>
                        <FormControl type="text" name="cpf" placeholder="Ex: 000.000.000-00" value={props.data.cpf} onChange={(e) => cpfMask(e, props.onChange)}></FormControl>
                    </FormGroup>
                </Col>                
                <Col lg={6} md={12} sm={12} xl={4} xs={12}>
                    <FormGroup controlId="dependents">
                        <FormLabel>Número de Dependentes</FormLabel>
                        <FormControl type="text" name="dependents" placeholder="Ex: 4" value={props.data.dependents} onChange={(e) => numberMask(e, props.onChange)}></FormControl>
                    </FormGroup>
                </Col>
                <Col lg={6} md={12} sm={12} xl={4} xs={12}>
                    <FormGroup controlId="grossSalary">
                        <FormLabel>Renda Bruta</FormLabel>
                        <FormControl type="text" name="grossSalary" placeholder="Ex: 6500.00" value={props.data.grossSalary} onChange={props.onChange}></FormControl>
                    </FormGroup>
                </Col> 
            </Row>           
            <Button className="form-submit" variant="primary" type="submit">Adicionar</Button>
        </Form>
    );
};