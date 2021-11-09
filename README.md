# Boardgame Reviews Website

## Summary

This is a multi-page ReactJS website with which users can read, post comments to and vote on pre-written boardgame reviews. Users can also log in and log out of existing user accounts, view all reviews, filter reviews by category, sort reviews by created date and view a home page containing an introduction, a link to all reviews and card links to 3 random reviews.
<br></br>
The hosted version can be found here:
https://boardgame-reviews.netlify.app/
<br></br>
A combination of HTML, CSS and React Bootstrap have been used for componenet construction and styling.
<br></br>

This website makes calls to an SQL database API of reviews, comments and users, the repo for which can be found here:
https://github.com/cjplatten/cjp-nc-boardgames
and the hosted version here:
https://nc-boardgames-cjp.herokuapp.com/api
<br></br>

---

## Instructions for running locally

### 1 - Clone repo

1. In the terminal, enter the directory you wish to clone the repo to by running the following:

```bash
cd <directory_path>
```

2. On the github page fork the repo and, once forked, click the green Code button and copy the link.

3. In the directory run the following to create a new directory containing the repo:

```bash
git clone <github_clone_link>
```

4. Once cloning is complete you wil now be able to access the repo on your local machine from the new directory created.

---

### 2 - Install dependencies

1. Enter the repo directory on your local machine by running the following in the terminal.

```bash
cd <repo_directory_path>
```

2. Run the following command in the terminal:

```bash
npm install
```

- This will install the following dependencies as specified in `package.json`

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.23.0",
    "bootstrap": "^5.1.1",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-rc.1",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
  },
```

---

### 3 - Run using localhost

1. While still in the repo directory run the following in the terminal:

```bash
npm run start
```

2. Npm will serve the react app on port 3000, and should automatically open the browser of your choice.
   If your browser doesn't open, the link is: http://localhost:3000/

---

## Minimum Requirements

- Node v16.5.0

Version information can be found by running the following command in the terminal:

```bash
node --version
```
