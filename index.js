const express = require("express");
const postmark = require("postmark");
const sgMail = require("@sendgrid/mail");
const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

const app = express();

// GOOGLE SHEETS INFO
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const TOKEN_PATH = "token.json";

// Load client secrets from a local file.
fs.readFile("credentials.json", (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
  // Authorize a client with credentials, then call the Google Sheets API.
  console.log(JSON.parse(content));
  authorize(JSON.parse(content), listMajors);
});

function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter the code from that page here: ", (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err)
        return console.error(
          "Error while trying to retrieve access token",
          err
        );
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

function listMajors(auth) {
  const sheets = google.sheets({ version: "v4", auth });
  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
      range: "Class Data!A2:E",
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      const rows = res.data.values;
      if (rows.length) {
        console.log("Name, Major:");
        // Print columns A and E, which correspond to indices 0 and 4.
        rows.map((row) => {
          console.log(`${row[0]}, ${row[4]}`);
        });
      } else {
        console.log("No data found.");
      }
    }
  );
}

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_ZERO_API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", (req, res) => {
  res.send("hi");
});

app.post("/api/post", (req, res) => {
  console.clear();
  // console.log("-----------------------------------------");
  // console.log(req.body);
  // console.log("-----------------------------------------");
  try {
    let str = "";
    for (let x in req.body) {
      if (x !== "currentStep" && x !== "lastStep") {
        console.log(`${x}: ${req.body[x]}`);
        str += `<p>${x}: ${req.body[x]}</p>`;
      }
    }
    const msg = {
      to: "santibout@yahoo.com", // Change to your recipient
      from: "samuel.santibout@gmail.com", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: req.body.toString(),
      html: `${str}`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.log("error error error");
        console.error(error);
      });
    res.send("fin");
  } catch (err) {
    console.log("Error Error Error");
    res.send("Error... Error... Error...", err);
  }
});

app.listen(3201, () => console.log("server running on port 3201"));
