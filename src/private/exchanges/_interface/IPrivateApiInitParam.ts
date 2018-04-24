export default interface IPrivateApiInitParam {
    key: string;
    secret: string;
    password?: string;   // GDAX requires a password
    uid?: string;   // QuadrigaCX requires uid
}
