enum Characters{
    MAIN = "Joe",
    Side = "Dato",
    ANTAGONIST = "Luka"
}
enum Roles{
    ADMIN,
    MODERATOR,
    USER
}

let Player: { Role:Roles, Character:Characters, username:string, password:string} = {Role:Roles.ADMIN, Character:Characters.ANTAGONIST, username:"GAMER120", password:"12345"}