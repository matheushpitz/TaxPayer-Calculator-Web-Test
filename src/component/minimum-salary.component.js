import React from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap'

const MinimumSalaryComponent = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>     
            <h4>Informe o Salário Mínimo</h4>       
            <FormGroup controlId="minimumSalary">
                <FormLabel>Salário Mínimo</FormLabel>
                <FormControl type="text" name="minimumSalary" placeholder="Ex: R$ 1.020,00" value={props.value} onChange={props.onChange}></FormControl>
            </FormGroup>
            <Button variant="primary" type="submit">Calcular</Button>
        </Form>
    );
};

export default MinimumSalaryComponent;