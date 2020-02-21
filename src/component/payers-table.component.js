import React from 'react';
import { Table } from 'react-bootstrap';

const renderTableLines = (data) => {
    return data.map((d) => {
        return (
            <tr key={d.cpf}>
                <td>{d.cpf}</td>
                <td>{d.name}</td>
                <td>{d.numberDependents}</td>
                <td>{Number(d.grossSalary).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td>{d.netSalary === 0 ? '' : Number(d.netSalary).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            </tr>   
        );
    });
}

const PayersTableComponent = (props) => {
    if(!props.visible)
        return null;
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