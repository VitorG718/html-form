class Person {
    constructor(jsonData) {
        this.name = jsonData.name
        this.surname = jsonData.surname
        this.email = jsonData.email
        this.phone = jsonData.phone
        this.password = jsonData.password
        this.gender = jsonData.gender
        this.newsletter = (jsonData.newsletter == 'on' ? true:false)
    }
}

module.exports = Person