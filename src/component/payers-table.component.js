import React from 'react';
import { Table } from 'react-bootstrap';

const renderTableLines = (data) => {
    return data.map((d, i) => {
        return (
            <tr>
                <td>{d.cpf}</td>
                <td>{d.name}</td>
                <td>{d.dependents}</td>
                <td>{d.grossSalary}</td>
                <td>{d.netSalary === 0 ? '' : d.netSalary}</td>
            </tr>   
        );
    });
}

const PayersTableComponent = (props) => {
    return (
        <div>
            <h4>Contribuintes Cadastrados</h4>
            <Table>
                <tbody>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Dependentes</th>
                        <th>Salário Bruto</th>
                        <th>Salário Limpo</th>
                    </tr>
                    {renderTableLines(props.data)}                                     
                </tbody>
            </Table>
        </div>
    );
}

export default PayersTableComponent;