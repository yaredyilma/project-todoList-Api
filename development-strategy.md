# Development Strategy

> `Asyncronous week 3`

## Project-todolist-api

### WIREFRAME

![wireframe](/wireframe-1.png)

---

## 0. Set-Up

_A User can see my initial repository and live demo_

### Repository

- Created a new repository to fork from this [repository](https://github.com/HackYourFutureBelgium/restful-pjs)
- Cloned the repository
- Added a Wireframe
- Completed the development strategy
- Pushed the changes to GitHub
- Turned on GitHub Pages

---

## 1. Initial Structure

__As a user I want to see the initial page when I load the site__

### REPO

- This user story is developed on branch `html-css`.

### Task A

- Create HTML

### Task B

- Create CSS style

---

## 2. Class Object with all methods

### REPO

- This user story is developed on branch `class`.

### Task A

- Create a class object
- Create a method in class object to use fetch POST method
- Create a method in class object to use fetch PUT method
- Create a method in class object to use fetch DELETE method
- Create a render method in class object

---

## 3. Add Button 

__As a user, when I click the Add button, the information I entered must be saved in the database.__

### REPO

- This user story is developed on branch `add`.
- This branch is merged to `master` branch after completion.

### Task A

- Create a add handler with `submit` event
- Use `async await` and a method for `fetch POST` that in class object

---

## 4. Delete Button

__As a user, when I click the Delete button on item, the information of the item in the database should be deleted.__

### REPO

- This user story is developed on branch `delete`.
- This branch is merged to `master` branch after completion.

### Task A

- Create a delete handler with `click` event
- Use `async await` and a method for `fetch DELETE` that in class object

---

## 5. Checkbox

__As a user, when I click the checkbox button on item, `completed` key in `db.json` change.__

### REPO

- This user story is developed on branch `update`.
- This branch is merged to `master` branch after completion.

### Task A

- Create a update handler with `click` event
- Use `async await` and a method for `fetch PUT` that in class object

---

## 6. Displaying

__As a user, when I click buttons, I want to see the changing of user interface__

### REPO

- This user story is developed on branch `display`.
- This branch is merged to `master` branch after completion.

### Task A

- Create a display handler with `DOMContentLoaded` event
- Use render method that in class object
- Print the information in the database to the user interface with 'fetch' every time I press buttons.
- Use async-await

---

## 7. Finish

### REPO

- This user story is developed on branch `finish`.
- This branch is merged to `master` branch after completion.

### Task A

- Checking HTML-CSS-JS validate situation
- Fix bugs