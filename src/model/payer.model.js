export default class Payer {
    constructor(formData) {
        this.cpf = formData.cpf;
        this.name = formData.name;
        this.numberDependents = formData.dependents;
        this.grossSalary = formData.grossSalary;
        this.netSalary = 0;
    }
}