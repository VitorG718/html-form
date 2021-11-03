class Person {
    constructor(data) {
        this.name = data.name
        this.surname = data.surname
        this.email = data.email
        this.phone = data.phone
        this.password = data.password
        this.gender = data.gender
        this.newsletter = (data.newsletter == 'on' || data.newsletter == 1 ? true:false)
    }

    convertForDatabase() {
        return {
            name: this.name,
            surname: this.surname,
            email: this.email,
            phone: this.phone,
            password: this.password,
            gender: this.gender,
            newsletter: (this.newsletter ? 1:0)
        }
    }

    convertToArray() {
        let person = this.convertForDatabase()
        return [
            person.name,
            person.surname,
            person.email,
            person.phone,
            person.password,
            person.gender,
            person.newsletter
        ]
    }
}

module.exports = Person