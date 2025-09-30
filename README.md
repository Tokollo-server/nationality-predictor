
# React Nationality Predictor

A simple React app that predicts the nationality of a person based on their name using the [Nationalize.io API](https://api.nationalize.io).

---

##  Features

-  Auto-focused input field for entering a name.
-  Button to fetch nationality predictions.
-  Fetches data from the **Nationalize.io API**.
-  Displays details of the **first object** in the returned `country` array.
-  Built using **React function components** with:
  - `useState` → for managing input and results.
  - `useEffect` → for handling API fetch logic.
  - `useRef` → for auto-focusing the input field.

---

##  Project Setup

### 1. Create Project Folder
```bash
npx create-react-app react-nationality-predictor
cd react-nationality-predictor
