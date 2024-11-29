The project is based on a healthcare application builts using (Node.js, Express.js, MongoDB).
The project has both Front-end and Back-end

VIDEO
watch the Project video on: https://youtu.be/GaRVUzd9X2E

---

# Task Manager Application

### Overview

The **Task Manager Application** is a full-stack web application designed to help users efficiently manage their tasks. It supports features like user authentication, task creation, status tracking, and deadline management. It is tailored for doctors with specific portals and task management functionality.

---

### Features

- User authentication with JWT.
- Separate portals for doctors and patients.
- Create, edit, and delete tasks.
- View task lists with filters (e.g., by status or deadline).
- Integration with MongoDB for persistent data storage.
- Responsive design for usability across devices.

---

### Tech Stack

**Frontend:**

- React.js
- Axios (for API calls)
- CSS and Bootstrap CSS

**Backend:**

- Node.js
- Express.js
- JSON Web Tokens (JWT) for authentication

**Database:**

- MongoDB (Atlas for cloud-hosted DB)

---

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Elegido7/Salus_Final-Project.git
   cd healthcare_app
   ```

2. **Backend Setup:**

   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up environment variables:
     - Create a `.env` file with the following:
       ```env
       PORT=5000
       MONGO_URI=your-mongodb-uri
       ACCESS_TOKEN_SECRET=your-secret-code
       ```
   - Start the server:
     ```bash
     npm start
     ```

3. **Frontend Setup:**

   - Navigate to the `client` directory:
     ```bash
     cd ../client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```

4. Open the application in your browser at `http://localhost:3000`.

---

### Usage

- **Doctors:**
  - Log in to view and manage patient tasks.
  - Create, update, or delete task records.

### API Endpoints

| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| POST   | `/api/register`  | Register a new user      |
| POST   | `/api/login`     | Log in and get a JWT     |
| GET    | `/api/tasks`     | Get all tasks for a user |
| POST   | `/api/tasks`     | Create a new task        |
| PUT    | `/api/tasks/:id` | Update a specific task   |
| DELETE | `/api/tasks/:id` | Delete a specific task   |

---

### Contributing

We welcome contributions! Please fork the repository and submit a pull request.

---

### License

This project is licensed under the [MIT License](LICENSE).

---

### Screenshots (Optional)

Add screenshots or GIFs to showcase the app's functionality and interface.

---

Feel free to adapt this structure to suit your specific project needs. Let me know if you need help with any section!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
