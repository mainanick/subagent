import Subagent from "subagent";

import express from "express";
import http from "http";

const app = express();
const port = 3000;

const subagent = new Subagent();
subagent.on("bounce", envelope => {
  //Probably call webhook
  const onBounceURL = process.env.BOUNCE_HOOK || process.env.HOOK;
  if (onBounceURL) {
    fetch(onBounceURL, {
      method: "POST",
      body: JSON.stringify({
        type: "bounce",
        email: envelope.email
      })
    });
  }
});
subagent.on("sent", envelope => {
  const onBounceURL = process.env.SENT_HOOK || process.env.HOOK;
  if (onBounceURL) {
    fetch(onBounceURL, {
      method: "POST",
      body: JSON.stringify({
        type: "sent",
        email: envelope.email
      })
    });
  }
});

app.get("/", (req, res) => {
  const { from, to, subject, text } = req.query;
  const mail = subagent.send_mail(from, to, subject, text);
  res.status(200).json({ status: "OK", to, from, text });
});

http.createServer(app).listen(port, () => {
  console.log("Listening on port", port);
});
