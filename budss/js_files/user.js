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
        this.user_list = []
    }

    add_user(user) {
        this.user_list.push(user)
    }

    show_all_users(){
        for(let i = 0; i < this.user_list.length; i++){
            console.log(this.user_list[i])
        }
    }
}

const userList = new UserList();