# BlogSpace — React Blog UI Mini Project

A responsive React blog listing page with JSON-backed post data, live search, and category filtering.

## Requirements
- Node.js (current LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Build for production
```bash
npm run build
npm run preview
```

## Features
- Blog cards loaded from `public/posts.json`
- Search by title, description, or author
- Filter by category
- Combined search and category filtering
- Loading, error, and empty-result states
- Responsive layout for desktop, tablet, and mobile

## Project structure
```text
public/posts.json  Blog post data
src/App.jsx        React UI and filtering logic
src/App.css        Styling and responsive layout
src/main.jsx       React entry point
```
