let account = [
  { name: "Abdullahi", accountNumber: "1234567890", balance: 1000 },
  { name: "Amadi", accountNumber: "9876543210", balance: 500 }
];

let fromAccountName = prompt("Enter account name to transfer from");
let fromAccountNumber = prompt("Enter account number to transfer from");
let toAccountName = prompt("Enter account name to receive fund");
let toAccountNumber = prompt("Enter account number to receive fund");
let amount = parseInt(prompt("Enter amount to transfer"));

let fromAccount = account.find((acc) => acc.name === fromAccountName && acc.accountNumber === fromAccountNumber);
let toAccount = account.find((acc) => acc.name === toAccountName && acc.accountNumber === toAccountNumber);

function transferFund(from, to, amount) {
  if (!from || !to) {
    alert("No account found");
    return;
  }
  if (from.balance < amount) {
    alert("Insufficient balance");
    return;
  }
  from.balance -= amount;
  to.balance += amount;
  alert(`Confirm amount ${amount} transferred from ${from.name} (${from.accountNumber}) to ${to.name} (${to.accountNumber})`);
}

transferFund(fromAccount, toAccount, amount);

