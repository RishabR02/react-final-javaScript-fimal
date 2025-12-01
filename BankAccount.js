function Bank(name, balance){
  this.name = name;
  this.balance = balance;

  this.deposit = a => {
    this.balance += a;
    console.log(this.name, "Deposited:", a);
  };

  this.withdraw = a => {
    this.balance -= a;
    console.log(this.name, "Withdrawn:", a);
  };

  this.show = () => console.log("Name:", this.name, "Balance:", this.balance);
}

const p1 = new Bank("Jordan", 1000);
p1.deposit(500);
p1.withdraw(300);
p1.show();

const p2 = new Bank("Ravi", 2000);
p2.deposit(1000);
p2.withdraw(1500);
p2.show();
