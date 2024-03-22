#day 11 # 2)მომხარებელს შემოატანინეთ მშობლების ასაკი დედის და მამის ასაკი, შემდეგ თუ დედის ასაკი მეტი იქნება მამის ასაკზე#  დაგვიბეჭდოს რომ დედა დიდი მამაზე, თუ პირიქით მამის ასაკი მეტი იქნება დედის ასაკზე მაგ შემთხვევაში დაგვიბეჭდოს 
# რომ მამა დიდია დედაზე. მინიშნება დაგჭირდებათ (if)
Your_dad_age=int(input("How old is your dad?:   "))
Your_mom_age=int(input("How old is your mom?:   "))

if Your_mom_age>Your_dad_age:
    print("Your mom is older than your dad")

if Your_dad_age>Your_mom_age:
    print("Your dad is older than your mom")
