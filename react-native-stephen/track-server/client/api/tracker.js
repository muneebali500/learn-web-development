import axios from "axios";

export default axios.create({
  baseURL: `http://356e-182-180-15-14.ngrok.io`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// The CORS issue should be fixed in the backend. Temporary workaround uses this option.

// Open the command prompt

// Navigate to chrome installed location OR enter cd "c:\Program Files (x86)\Google\Chrome\Application" OR cd "c:\Program Files\Google\Chrome\Application"

// Execute the command chrome.exe --disable-web-security --user-data-dir="c:/ChromeDevSession"

// Using the above option, you can able to open new chrome without security. this chrome will not throw any cors issue.
