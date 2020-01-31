const token = document.getElementById("pid-data").getAttribute("data-endpoint");

const GetPidData = (endpoint: string, referalUID: string, token: string) => ({
  prop1: endpoint,
  prop2: referalUID,
  prop3: token
});

console.log(GetPidData("hey", "Yo", "Help"));
console.log(token);
