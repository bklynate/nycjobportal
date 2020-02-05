# NYC JOB PORTAL

This web application is built with Create React App and other various tooling like (eslint, prettier, babel, etc.).

## Installation

Clone the repo locally
`git clone https://github.com/bklynate/nycjobportal.git` for https or `git clone git@github.com:bklynate/nycjobportal.git` for SSH

Within the root folder, you may run `npm run getAll` to install dependencies for both client and root folders. This is the equivalent/alternative to running `npm i` or run `yarn` in both the client and root folders as they both have a `package.json`.

After installation of dependencies, within root folder, execute within the commandline: `npm run dev` to start development and view application.

Ensure that `mongodb` is installed locally and started (macOs with homebrew):

```
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb/brew/mongodb-community
```

***

## Authentication Setup

**Links**

* [NYC Open Data: NYC Jobs Data Set](https://data.cityofnewyork.us/City-Government/NYC-Jobs/kpav-sd4t)
* [Socrata Authentication](https://dev.socrata.com/docs/authentication.html)
* [Socrata API Endpoints](https://dev.socrata.com/docs/endpoints.html)

To run locally, you'll also need to setup API Keys for Google and NYC OpenData and place inside a file you'll create:
`server/config/dev.js`

```json
{
  googleClientID: 'Some key here'
  googleClientSecret: 'Some key here',
  clientID: 'Some key here',
  clientSecret: 'Some key here'
}

```

*For more information on generating Google API keys follow the following guide*: [Using OAuth 2.0 to Access Google APIs](https://support.google.com/googleapi/answer/6158849?hl=en&ref_topic=7013279)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
