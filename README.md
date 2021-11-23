![Repo Sizegit ][repo-size]
![Language][github-language]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![twitter][twitter-shield]][twitter-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
![MIT License][license-shield]

<br />
<p align="center">
<img src="./assets/img/code-logo.svg" alt="Logo" width="80" height="80"/>
<h2 align="center" id="code-command"> Code Command</h2>

<p align="center">
As a web developer I want to continue learning through online courses, so that I can get a promotion / better job.
<br />
<a href="#how-to-download"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="#example">View Demo</a>
.
<a href="https://github.com/Derimarg/code-command/issues">Report Bug</a>
·
<a href="https://github.com/Derimarg/code-command/issues">Request Feature</a>
</p>
</p>
<br />
<br />

> Link web page: https://code-command-team.herokuapp.com

<details open="open">
<summary>Table of Contents</summary>
<ul>
<li><a href="#use-story">User Story</a></li>
<li><a href="#technologies">Technologies</a></li>
<li><a href="#how-to-download">Download</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#roadmap">Roadmap</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#questions">Questions</a></li>
<li><a href="#license">License</a></li>
</ul>
</details>

---

## USER STORIES

### `MVP`

AS A web developer
I WANT to continue learning through online courses
SO THAT I can get a promotion / better job:

GIVEN a technology learning application:

- WHEN I go to the homepage for the first time,
  THEN I see information about how to get started, pricing, and a navigation menu.

- WHEN I view the navigation menu,
  THEN I see options for home, contact, courses, log-in and sign-up.

- WHEN I view the courses page,
  THEN I can view all or sort through courses by category.

- WHEN I click on a course,
  THEN I am taken to the course details page.

- WHEN I click on the home button,
  THEN I am taken to the home page.

- WHEN I click on the contact button,
  THEN I am taken to the contact page.

- WHEN I click on the cart button,
  THEN I see a cart modal pop up.

- WHEN I decide to purchase a course,
  THEN I will be required to sign-up or log-in.

- WHEN I click on the log-in button,
  THEN I am taken to the log-in page.

- WHEN I click on the sign-up button,
  THEN I am taken to the sign-up page.

- WHEN I sign-up with my email, password, and name,
  THEN I am authenticated and then to the courses page.

### `AUTHENTICATION`

GIVEN I am an authenticated user:

- WHEN I log-in with my email and password,
  THEN I am authenticated and taken to the homepage which now displays courses.

- WHEN I click on the cart button,
  THEN I see my products in the cart or an empty cart.

- WHEN I click on the checkout button,
  THEN I am redirected to the checkout page.

- WHEN I am done with my purchases,
  THEN I am redirected to the success page to go back to homepage.

- WHEN I view my purchased course,
  THEN I will be able to watch the videos and complete the practices on my own.

- WHEN I click on the log-out button,
  THEN I am taken to the home page.

### `BONUS`

GIVEN I am a user who has completed at least one course:

- WHEN I complete a course,
  THEN it will be saved to my completed courses and I earn points in the corresponding category.

- WHEN I earn enough points in a category,
  THEN I will earn a badge for that category.

- WHEN I view my completed courses,
  THEN I will see a list of all my completed courses.

- WHEN I click on the badge,
  THEN I will see a modal with the badge details.

<br/>

### Example:

<br/>
<br/>

![Demo](./assets/img/code-command.gif)

<br/>
<br/>

## Technologies

- <p><a href="https://nodejs.org/">Node.js</a></p>
- <p><a href="https://www.npmjs.com/">NPM</a></p>
- <p><a href="https://reactjs.org/">React</a></p>
- <p><a href="https://www.npmjs.com/package/graphql">NPM GrapghQL</a></p>
- <p><a href="apollographql.com/docs/react/get-started/">NPM Apollo Client</a></p>
- <p><a href="https://www.npmjs.com/package/apollo-server-express">NPM Apollo Server Express</a></p>
- <p><a href="https://www.npmjs.com/package/react-router">NPM React Router</a></p>
- <p><a href="https://www.npmjs.com/package/react-scripts">NPM React Scripts</a></p>
- <p><a href="https://www.npmjs.com/package/react-router-dom">NPM React Router DOM</a></p>
- <p><a href="https://www.npmjs.com/package/concurrently">NPM Concurrently</a></p>
- <p><a href="https://www.npmjs.com/package/jsonwebtoken">NPM JSON Web Tokens</a></p>
- <p><a href="https://www.npmjs.com/package/jwt-decode">NPM JWT Decode</a></p>
- <p><a href="https://www.npmjs.com/package/nodemon">NPM Nodemon</a></p>
- <p><a href="https://www.npmjs.com/package/if-env">NPM If Env</a></p>
- <p><a href="https://www.npmjs.com/package/stripe">NPM Stripe</a></p>
- <p><a href="https://www.npmjs.com/package/styled-components">NPM Syled Components</a></p>
- <p><a href="https://www.npmjs.com/package/bcrypt">NPM Bcrypt</a></p>
- <p><a href="https://www.npmjs.com/package/express">NPM Express</a></p>
- <p><a href="https://www.npmjs.com/package/react-reveal">NPM React Reveal</a></p>
- <p><a href="https://www.npmjs.com/package/react-icons">NPM React Icons</a></p>
- <p><a href="https://www.npmjs.com/package/react-cookie-consent">NPM React Cookie Consent</a></p>
- <p><a href="https://www.npmjs.com/package/graphql-tag">NPM GraphQL Tag</a></p>
- <p><a href="https://www.npmjs.com/package/glamor">NPM Glamor</a></p>
- <p><a href="https://www.npmjs.com/package/emailjs">Eamiljs</a></p>
- <p><a href="https://www.npmjs.com/package/emailjs-com">NPM Emailjs Com</a></p>
- <p><a href="https://redux.js.org/">NPM Apollo Link Context</a></p>
- <p><a href="https://www.npmjs.com/package/apollo-boost">NPM Apollo Boost</a></p>
- <p><a href="https://redux.js.org/">Redux</a></p>
- <p><a href="https://www.mongodb.com/">MongoDB</a></p>
- <p><a href="https://www.npmjs.com/package/react-column-resizer">react-column-resizer</a></p>
- <p><a href="https://www.npmjs.com/package/@monaco-editor/react">@monaco-editor/react

[Back To Top](#code-command)

---

## How to Download

- Simply copy the **SSH** to the terminal or Download the **ZIP File**:

## Installation

- Use the follow command at your terminal, **git clone** (Create a working copy at your local repository):

  ```
  git clone git@github.com:Derimarg/code-command.git
  ```

- After cloning the repository, create your own repository, copy the files to your repository and type the following commands in your terminal.

  ```
  git status

  git add -A

  git commit -m "Message to commit."

  git push or git push origin main
  ```

## Prerequisites

Before using this application, you must install dependencies by running the following command in your terminal at the root of the application:

```
npm install
```

[Back To Top](#code-command)

---

## Usage

This is an open source program, feel free to use it, contact me to request features.

```js script
 "scripts": {
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "cd server && npm start",
    "start:dev": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
    "install": "cd server && npm i && cd ../client && npm i",
    "seed": "cd server && npm run seed",
    "heroku-postbuild": "cd client && npm run build"
  }
```

### `npm run start:dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `git push heroku main`

Will deploy app to heroku

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/Derimarg/code-command/issues) for a list of proposed features (and known issues).

[Back To Top](#code-command)

---

<!-- CONTRIBUTORS -->

## Contributing

Contributions are part of this open source project. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/name-of-feature`)
3. Commit your Changes (`git commit -m "Add some feature"`)
4. Push to the Branch (`git push origin feature/name-of-feature`)
5. Open a Pull Request

## Contributors

Thanks goes to these wonderful people:

<!-- CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<a href="https://github.com/Derimarg"> Derimar Gray</a> |
<a href="https://github.com/georgedmendoza"> George Gomez</a> |
<a href="https://github.com/audryf"> Audry Ford</a> |
<a href="https://github.com/ratalla816"> Rob Atalla</a>

## Questions

For additional help or questions about collaboration, contact us at:

- Project Repository Link: https://github.com/Derimarg/code-command
- Live application Link: https://code-command-team.herokuapp.com/
- Video demo link:

[Back To Top](#code-command)

---

## License

MIT License

Copyright (c) 2021 Audry Ford, Derimar Gray, Rob Atalla, George Mendoza

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[repo-size]: https://img.shields.io/github/repo-size/Derimarg/code-command?style=for-the-badge
[github-language]: https://img.shields.io/github/languages/top/Derimarg/code-command?color=yellow&style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/Derimarg/code-command.svg?style=for-the-badge
[contributors-url]: https://github.com/Derimarg/code-command/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Derimarg/code-command.svg?color=9cf&style=for-the-badge
[forks-url]: https://github.com/Derimarg/code-command/network/members
[stars-shield]: https://img.shields.io/github/stars/Derimarg/code-command.svg?color=blueviolet&style=for-the-badge
[stars-url]: https://github.com/Derimarg/code-command/stargazers
[issues-shield]: https://img.shields.io/github/issues/Derimarg/code-command.svg?style=for-the-badge
[issues-url]: https://github.com/Derimarg/code-command/issues
[license-shield]: https://img.shields.io/static/v1?label=license&message=MIT&color=yellowgreen.svg&style=for-the-badge
[twitter-shield]: https://img.shields.io/badge/-Twitter-red.svg?&logo=twitter&style=for-the-badge&color=9cf
[twitter-url]: https://twitter.com/DerimarGray
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/derimar-gray-676275132/
