import myFunctions from "./methods/functions";

const UserInputToken = document
    .getElementById("pid-data")
    .getAttribute("data-token"),
  UserInputEndpoint = document
    .getElementById("pid-data")
    .getAttribute("data-endpoint"),
  UserInputReferalUID = document
    .getElementById("pid-data")
    .getAttribute("data-referal-uid");

const GetPidData = (endpoint: string, referalUID: string, token: string) => ({
  prop1: endpoint,
  prop2: referalUID,
  prop3: token
});

console.log(GetPidData(UserInputEndpoint, UserInputReferalUID, UserInputToken));
console.log(myFunctions.init());
