export default class {
    public desc: string = '';
    public name: string = '';
    public value: string = '';

    constructor(param: any) {
        this.desc = param.desc;
        this.name = param.name;
        this.value = param.value;
    }
}
