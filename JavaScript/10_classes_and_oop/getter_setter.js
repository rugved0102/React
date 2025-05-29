class User{
    constructor(email,password) {
        this.email = email
        this.password = password
        // yaha pe mene email aur password values bana diye hai pr mujhe ye chahiye ki koi aur ise access na kr paye that's why hum getter aur setter use karenge
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}rugved`
    }

    set password(value) {
        this._password = value
    }
    // upar constructor me password ke value ko overwrite hoga get set se

}

const chai = new User('rugved@gmail.com','abc')
console.log(chai.password);
