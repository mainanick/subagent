# subagent

## An outbound email server (message submission agent)

## [WIP] Exploring dev ux friendly API first

## Challenges

SMTP server are 'stateful', its advisable serverless functions(lambda, GCP Functions) to be stateless

```
Keeping functions stateless enables AWS Lambda to rapidly launch as many copies of the function as needed to scale to the rate of incoming events.
While AWS Lambda’s programming model is stateless, your code can access stateful data by calling other web services, such as Amazon S3 or Amazon DynamoDB.
```

## API

Attempt to send 1,000,000 Emails free of charge using lambda.

```ts
import subagent from "subagent/lambda";
export.default = subagent("<config object>") // Returns an aws lambda handler function
```

Rest API

```sh
curl -s --user 'api:YOUR_API_KEY' \
    https://<YOUR_DOMAIN_NAME>/mail \
    -F from='Excited User <user@YOUR_DOMAIN_NAME>' \
    -F to=bar@example.com \
    -F subject='Hello' \
    -F text='subagent!'
```

SMTP

```ts
const transporter = nodemailer.createTransport({
  host: "smtp.<yourhostname>.com",
  port: 587,
  auth: {
    user: "user",
    pass: "pass"
  }
});

await transporter.sendMail({
  from: '"Fred Foo 👻" <foo@example.com>', // sender address
  to: "bar@example.com, baz@example.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>" // html body
});
```
