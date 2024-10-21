class User {
    #validatePassword(password) {  // private method
        return password.length >= 8;
    }

    setPassword(password) {
        if (this.#validatePassword(password)) {
            this.password = password;
            console.log("Password set successfully.");
        } else {
            console.log("Password is too weak.");
        }
    }
}

// Create an instance of User
let user = new User();
user.setPassword("strongPass");  // Password set successfully.
user.setPassword("weak");  // Password is too weak.
