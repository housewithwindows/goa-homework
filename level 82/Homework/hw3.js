// ქმნის დათაბეიზს სადაც შეინახება ყველაფერი
let dataBase = [];

// ფორმის სუბმიტის ივენთის დამუშავება
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // არ არესეტებს

    // ფორმის ველებიდან მონაცემების წამოღება
    let name = document.getElementById("name").value;// მოაქვს სახელი
    let email = document.getElementById("email").value;//მოაქვს ემაილი
    let password = document.getElementById("password").value;//მოაქვს პაროლი

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
        alert("Account with this email already exists!");//თუ ექაუნთი არსებობს ამ მესიჯს გამოიტანს
    } else {
        // თუ არ არსებობს, დავამატებთ ახალ იუზერს dataBase-ში
        let newUser = {
            name: name,
            email: email,
            password: password
        };
        dataBase.push(newUser);// დაამატებს ახალ აქაუნთს
        alert("Account successfully created!");//გამოიტანს მესიჯს 
    }

    // ფორმის ველების გასუფთავება
    document.getElementById("name").value = '';// სახელის მნიშვნელობა
    document.getElementById("email").value = '';//ემაილის მნიშვნელობა
    document.getElementById("password").value = '';//პაროლის მნიშვნელობა
});