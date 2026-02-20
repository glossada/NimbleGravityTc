# Job Application Portal

A React application that displays open job positions and allows candidates to submit their GitHub repository as part of a job application.

## Tech Stack

- **React 19** + **Vite**
- **Redux Toolkit** — global state management
- **React Router v7** — client-side routing

## Project Structure

```
src/
├── features/
│   ├── candidate/
│   │   ├── candidateActions.js   # async thunks
│   │   └── candidateSlice.js     # reducer + state shape
│   └── jobs/
│       ├── jobsActions.js
│       └── jobsSlice.js
├── services/
│   └── api.js                    # API calls (fetch)
├── store/
│   └── index.js                  # Redux store
├── components/
│   ├── JobItem.jsx
│   └── JobList.jsx
├── views/
│   └── JobsView.jsx
├── config.js                     # BASE_URL and candidate email
└── App.jsx
```

## Requirements

- Node.js >= 18

## Installation

```bash
npm install
```

## Running locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

## How it works

1. On load, the app fetches the candidate data and the list of open positions from the API.
2. Each position shows an input field where you can enter a GitHub repository URL.
3. Clicking **Submit** sends the application to the API with the candidate and job data.
4. The list is paginated — 5 positions per page.
