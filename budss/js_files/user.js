class User{
    constructor({name, email, phone, company, website_url}){
        this.name = name
        this.email = email
        this.phone = phone
        this.company = company
        this.website_url = website_url
    }
}

class UserList{
    constructor(){
        this.userList = []
    }

    addUser(user) {
        this.userList.push(user)
    }

    showAllUsers(){
        for(let i = 0; i < this.userList.length; i++){
            console.log(this.userList[i])
        }
    }
}

const userList = new UserList();