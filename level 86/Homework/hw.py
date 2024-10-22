def find_max_length():
    lengths = []  # სიგრძეების ჩამონათვალი

    while True:
        user_input = input("შეიყვანეთ სტრიქონი (დასასრულებლად დაწერეთ 'გასასვლელი'): ")
        if user_input.lower() == 'გასასვლელი':  # თუ მომხმარებელი წერს 'გასასვლელი', გამოვალთ ციკლიდან
            break
        lengths.append(len(user_input))  # სიგრძე ვამატებთ ჩამონათვალში

    if lengths:  # თუ lengths არ არის ცარიელი
        max_length = max(lengths)  # ვიპოვით უდიდეს სიგრძეს
        print(f"უდიდესი სტრიქონის სიგრძე: {max_length}")
    else:
        print("არ არსებობს შეყვანილი სტრიქონი.")

# ფუნქციის გაწვერა
find_max_length()
