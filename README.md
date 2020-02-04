# NYC JOB PORTAL

This web application is built with Create React App and other various tooling like (eslint, prettier, babel, etc.).

## Installation

Clone the repo locally
`git clone https://github.com/bklynate/nycjobportal.git` for https

or

`git clone git@github.com:bklynate/nycjobportal.git` for SSH

You'll need to run `npm i` or run `yarn` in both the client and root folders as they both have a `package.json`.

After installation of dependencies, within root folder, execute within the commandline: `npm run dev` to start development and view application.

***

## Authentication Setup

To run locally, you'll also need to setup API Keys for Google inside a file you'll create example:
`server/config/dev.js`

```json
{
  googleClientID: 'Some key here'
  googleClientSecret: 'Some key here'
}

```

*For more information on generating Google API keys follow the following guide*: [Using OAuth 2.0 to Access Google APIs](https://support.google.com/googleapi/answer/6158849?hl=en&ref_topic=7013279)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)