For a live demo : https://lms-uiet.web.app  or  
                  https://vineet8588.github.io/lmsuiet/


## Setting up firebase

Prerequisites.
1. Create a Firebase project.
2. Register your app with Firebase.
3. Add Firebase SDKs and initialize Firebase. Copy the var firebaseConfig onject to src/config/fbConfig.js and repace the one already present there. Keep everything else as it is.
4. Install firebase CLI.
5. Access Firebase in your app.
6. Go to firebase console in your browser and initalize firestore.
7. Set the following firebase rules: 

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{category}/{course} {
      allow read,update,write: if request.auth.uid != null && request.auth.uid==resource.data.authorId;
      allow read;
      allow create: if request.auth.uid != null;
    }
    match /{category}/{course}/{videos}/{fff} {
      allow read;
      allow update,write: if request.auth.uid != null && get(/databases/$(database)/documents/$(category)/$(course)).data.authorId == request.auth.uid
    }
    match /users/{userId} {
      allow read, update, delete: if request.auth != null && request.auth.uid == userId;
      allow create;
    }
  }
}
```
8. Initialize firebase storage and deploy as you wish.

9. Use yarn install to install all dependencies of your react project.



### Available basic pregenerated scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

