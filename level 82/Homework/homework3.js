let dataBase = [];

// ფორმის სუბმიტის ივენთის დამუშავება
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ფორმის ავტომატური გაგზავნის თავიდან აცილება

    // ფორმის ველებიდან მონაცემების წამოღება
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // უსაფრთხოების ფუნქციონალი - მონაცემების დუბლირების შემოწმება
    let accountExists = false;

    for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].email === email) {
            accountExists = true;
            break;
        }
    }

    // თუ ექაუნთი არსებობს, გამოვიტანთ შეტყობინებას
    if (accountExists) {
        alert("Account with this email already exists!");
    } else {
        // თუ არ არსებობს, დავამატებთ ახალ ობიექტს dataBase-ში
        let newUser = {
            name: name,
            email: email,
            password: password
        };
        dataBase.push(newUser);
        alert("Account successfully created!");
    }

    // ფორმის ველების გასუფთავება
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
});