import axios from "axios";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization: `Bearer _63Ceiw_Jps9vsryMHqYYQRE6n545_YpvwiD8w0E5burnN6HwFoYPxOeEhf5-5nCy2BvonjKy_fKeA1BVxlCY-TrMD6qVa2T7pcOxQWHW3hci8J1DaISFB0__HMEY3Yx`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
  },
});

// The CORS issue should be fixed in the backend. Temporary workaround uses this option.

// Open the command prompt

// Navigate to chrome installed location OR enter cd "c:\Program Files (x86)\Google\Chrome\Application" OR cd "c:\Program Files\Google\Chrome\Application"

// Execute the command chrome.exe --disable-web-security --user-data-dir="c:/ChromeDevSession"

// Using the above option, you can able to open new chrome without security. this chrome will not throw any cors issue.
