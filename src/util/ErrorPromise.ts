export default class ErrorPromise<T> extends Promise<T> {
    constructor(message: any) {
        super((resolve, reject) => {
            reject(message);
        });
    }
}
