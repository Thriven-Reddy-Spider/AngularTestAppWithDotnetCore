export class User {
    constructor(
        public name: string,
        public isAuthenticated: boolean,
        public email: string,
        public password: string
    ) { }
}