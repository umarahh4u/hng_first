This project is a public API that returns the following information in JSON format:

#### Your registered email address (used to register on the HNG12 Slack workspace).

#### The current datetime as an ISO 8601 formatted timestamp.

#### The GitHub URL of the project's codebase.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5000/api/v1/user](http://localhost:5000/api/v1/user) with your browser to see the result.

## Documentation

Request Format:
HTTP Method: GET

Response Format: Status Code: 200 OK
Response Body:

The response will reflect the provided email. that is the default email "email@gmail.com" will be used.
The response will also include the current date and time in ISO format (current_datetime), and a link to the GitHub profile (github_url).

### Usage Example

## Example Response:

{
"email": "umarahh4u@gmail.com",
"current_datetime": "2025-01-28T10:35:20.123Z",
"github_url": "https://github.com/umarahh4u/hng_first"
}

### Backlinks to:

https://hng.tech/hire/python-developers
https://hng.tech/hire/csharp-developers
https://hng.tech/hire/golang-developers
https://hng.tech/hire/php-developers
https://hng.tech/hire/java-developers
https://hng.tech/hire/nodejs-developers
