import React from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, Col, Row } from 'react-bootstrap'

const MinimumSalaryComponent = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>                   
            <Row>
                <Col lg={6} md={12} sm={12} xl={4} xs={12}>
                    <FormGroup controlId="minimumSalary">
                        <FormLabel>Informe o Salário Mínimo</FormLabel>
                        <FormControl type="text" name="minimumSalary" placeholder="Ex: 1020.00" value={props.value} onChange={props.onChange}></FormControl>
                    </FormGroup>
                </Col>
            </Row>                 
            <Button variant="primary" type="submit">Calcular</Button>
        </Form>
    );
};

export default MinimumSalaryComponent;