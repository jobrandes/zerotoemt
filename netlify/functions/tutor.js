const https = require("https");

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  try {
    const body = JSON.parse(event.body);

    console.log("API Key present:", !!process.env.ANTHROPIC_API_KEY);
    console.log("API Key prefix:", process.env.ANTHROPIC_API_KEY?.slice(0, 10));
    console.log("Messages count:", body.messages?.length);

    const payload = JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: body.system,
      messages: body.messages
    });

    const result = await new Promise((resolve, reject) => {
      const req = https.request({
        hostname: "api.anthropic.com",
        path: "/v1/messages",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "Content-Length": Buffer.byteLength(payload)
        }
      }, (res) => {
        let data = "";
        res.on("data", chunk => data += chunk);
        res.on("end", () => {
          console.log("Anthropic status:", res.statusCode);
          console.log("Anthropic response preview:", data.slice(0, 200));
          resolve({ status: res.statusCode, body: data });
        });
      });
      req.on("error", (err) => {
        console.error("Request error:", err.message);
        reject(err);
      });
      req.write(payload);
      req.end();
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: result.body
    };

  } catch (err) {
    console.error("Tutor function error:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};