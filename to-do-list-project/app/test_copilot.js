// create functions to connect to the database and check if the user already exists
import { connectToDB } from "@utils/database";
import User from "@models/user";

function connectToDB() {
  return new Promise(function (resolve, reject) {
    // Do async job
    setTimeout(function () {
      console.log("Connection to DB established");
      resolve("Connection to DB established");
    }, 1000);
  });
}

function checkIfUserExists() {
  return new Promise(function (resolve, reject) {
    // Do async job
    setTimeout(function () {
      console.log("User exists");
      resolve("User exists");
    }, 1000);
  });
}
