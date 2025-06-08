type User = (name: string,age: number,lastname: string) => {name: string,age: number,lastname: string}

function CreateUser(User: User){
    return User
}