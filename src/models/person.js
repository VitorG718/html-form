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
}

module.exports = Person