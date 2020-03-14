import AllAlone from "all-alone";

import express from "express";
import http from "http";

const app = express();
const port = 3000;

const all_alone = new AllAlone();
all_alone.on("bounce", envelope => {
  //Probably call webhook process.env.ALL_ALONE_BOUNCE
  const onBounceURL = process.env.ALL_ALONE_BOUNCE_HOOK || process.env.ALL_ALONE_HOOK;
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
all_alone.on("sent", envelope => {
  const onBounceURL = process.env.ALL_ALONE_BOUNCE_HOOK || process.env.ALL_ALONE_HOOK;
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
  const mail = all_alone.send_mail(from, to, subject, text);
  res.status(200).json({ status: "OK", to, from, text });
});

http.createServer(app).listen(port, () => {
  console.log("Listening on port", port);
});
