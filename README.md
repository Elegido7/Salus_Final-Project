The project is based on a healthcare application builts using (Node.js, Express.js, MongoDB) to offers the following;

Navbar separate for Doctor and patient pages designed to fit the pages names. The Navbar on the login page only allow access to settings, contact details and home page after login.

1. create a code in App.js that allows the patients data to be backup in MongoDB under Database HealthCare and collection patient details and Doctors data save in collection Doctors details in the same Database.

- Have a .env (health.env) for the mongo_url to secure it.
- Define the basic routes and API endpoints for task management (e.g., create, read, update, delete).

2. A doctor login portal that is connected to a doctors page that does the following:
   a. Introduces the doctor with his or her area of expertise (Name, Title, Description).
   b. Indicates a list of hospitals the doctor operates in.
   c. send
   c. Has a lists of patients names with links to a third page that shows patients details:
   -Patient details are Name, contact and symptoms recieved fetched from MongoDB database HealthCare and Collection patient details.

   e. Has the doctors contact details (Name, email, phone number)

3. A patient login portal that is connected to a patient page that does the following:
   a. A page with a list of Doctors (Name, area of expertise) fetched from Doctors details collection.
   A check box to select the Doctor the patient wants to see.
   b. A registration page asking for the following details:
   -Full Name - Contact Number
   -National ID - Home location
   -Nearest health facility
   - Has a message box for symptoms (symptoms experienced and period of the symptoms)

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
