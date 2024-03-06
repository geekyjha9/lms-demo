/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

////////////////ABOVE IS JS OF LANDING PAGE//////////////////

const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// js code to appear signup and login form
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});

///////////Content of Login & Signup////////////////

document.addEventListener("DOMContentLoaded", function () {


  // Perform initial authentication check
  checkAuthentication();

  // Listen for changes in the url
  window.addEventListener("hashchange", checkAuthentication);


  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  const userTypeSelects = document.querySelectorAll(".forms select");

  // Open or create the IndexedDB database
  const dbPromise = openDatabase();

  // Event listener for switching between login and signup forms
  document.querySelectorAll(".login-link, .signup-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      loginForm.classList.toggle("active");
      signupForm.classList.toggle("active");
    });
  });

  // Event listener for signup button
  signupForm.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Call a function to handle signup logic (store data in IndexedDB)
    handleSignup(this);
  });

  // Event listener for login button
  loginForm.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Call a function to handle login logic (check credentials, redirect to dashboard)
    handleLogin(this);
  });

  // Function to open or create the IndexedDB database
  function openDatabase() {
    const dbName = "LearningManagementDB";
    const version = 1;

    const dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, version);

      request.onupgradeneeded = function (event) {
        const db = event.target.result;

        // Create object stores
        if (!db.objectStoreNames.contains("students")) {
          const studentStore = db.createObjectStore("students", {
            keyPath: "studentId",
            autoIncrement: true,
          });
          studentStore.createIndex("username", "username", { unique: true });
        }

        if (!db.objectStoreNames.contains("creators")) {
          const creatorStore = db.createObjectStore("creators", {
            keyPath: "creatorId",
            autoIncrement: true,
          });
          creatorStore.createIndex("username", "username", { unique: true });
        }

        if (!db.objectStoreNames.contains("courses")) {
          const courseStore = db.createObjectStore("courses", {
            keyPath: "courseId",
            autoIncrement: true,
          });
          courseStore.createIndex("title", "title", { unique: true });
          courseStore.createIndex("creatorId", "creatorId");
        }

        if (!db.objectStoreNames.contains("comments")) {
          const commentStore = db.createObjectStore("comments", {
            keyPath: "commentId",
            autoIncrement: true,
          });
          commentStore.createIndex("studentId", "studentId");
          commentStore.createIndex("courseId", "courseId");
        }

        // if (!db.objectStoreNames.contains("sessions")) {
        //     const sessionStore = db.createObjectStore("sessions", {
        //         keyPath: "sessionId",
        //         autoIncrement: true,
        //     });
        //     sessionStore.createIndex("userId", "userId");
        // }

        if (!db.objectStoreNames.contains("enrollments")) {
          const enrollmentStore = db.createObjectStore("enrollments", {
            keyPath: "enrollmentId",
            autoIncrement: true,
          });
          enrollmentStore.createIndex("studentId", "studentId");
          enrollmentStore.createIndex("courseId", "courseId");
        }
      };

      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function () {
        reject(request.error);
      };
    });

    return dbPromise;
  }

  // TODO: Implement the handleSignup function
  function handleSignup(form) {
    const userType = form.parentElement.querySelector("select").value;
    const usernameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');

    // Check if the required elements are found
    if (!usernameInput || !emailInput || !passwordInput) {
      console.error("Error: Could not find required form elements.");
      return;
    }

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    console.log(
      "We are in signup function",
      userType,
      username,
      email,
      password
    );

    openDatabase().then((db) => {
      const transaction = db.transaction([userType + "s"], "readwrite");
      const store = transaction.objectStore(userType + "s");

      // Check if the username or email is already registered
      const index = store.index("username");
      const request = index.get(username);

      request.onsuccess = function (event) {
        const existingUser = event.target.result;

        if (!existingUser) {
          // Create a user object with signup data
          const userObject = {
            username,
            email,
            password,
            // Add other properties as needed
          };

          // Store the userObject in the appropriate object store
          const addRequest = store.add(userObject);

          addRequest.onsuccess = function () {
            console.log("User registered successfully!");
            // Optionally, redirect the user to the dashboard or show a success message
          };

          addRequest.onerror = function () {
            console.error("Error registering user:", addRequest.error);
            // Handle the error, e.g., show an error message to the user
          };
        } else {
          console.error("Username is already taken.");
          // Handle the case where the username is already registered, show an error message to the user
        }
      };

      request.onerror = function () {
        console.error("Error checking existing user:", request.error);
        // Handle the error, e.g., show an error message to the user
      };
    });
  }

  // Function to handle login logic
  function handleLogin(form) {
    const userType = form.parentElement.querySelector("select").value;
    const usernameOrEmail = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    openDatabase().then((db) => {
      const transaction = db.transaction(userType + "s", "readonly");
      const store = transaction.objectStore(userType + "s");
      const index = store.index("username"); // Assuming 'username' is the key path

      // Retrieve user data based on usernameOrEmail
      const request = index.get(usernameOrEmail);

      request.onsuccess = function (event) {
        const userObject = event.target.result;

        if (userObject && userObject.password === password) {
          console.log("Login successful!");

          //   // Store a token or user ID in sessionStorage
          // const userId = userObject.studentId || userObject.creatorId;
          // sessionStorage.setItem("token", userId);

          // // Add a session record to indexedDB
          // createSession(userId, userType); // Pass userType as an argument

          // // Redirect to the dashboard or do other actions
          // redirectToDashboard(userType); // Pass userType as an argument

          // Store a token or user ID in sessionStorage
          // sessionStorage.setItem("token", userObject.studentId || userObject.creatorId);

          const token = userObject.studentId || userObject.creatorId;

          console.log(token);

          // Check if token is a valid number
          if (!isNaN(token) && token > 0) {
            sessionStorage.setItem("token", token);
          } else {
            console.error("Error: Invalid token");
          }

          // Redirect to the appropriate dashboard
          if (userType === "student") {
            window.location.href = "./studentdashboard.html";
          } else if (userType === "creator") {
            window.location.href = "./teacherdashboard.html";
          }
        } else {
          console.error("Invalid credentials");
          // Handle invalid login, e.g., show an error message to the user
        }
      };

      request.onerror = function () {
        console.error("Error retrieving user:", request.error);
        // Handle the error, e.g., show an error message to the user
      };
    });
  }

  function checkAuthentication() {
    // Check if the token exists in session storage
    const tokens = sessionStorage.getItem("token");
  
    console.log("tokens for moving to the next page", tokens);
  
    // Specify the URLs that require authentication
    const authenticatedUrls = [
      "/teacherdashboard.html",
      "/studentdashboard.html",
      "/newcourse.html"
    ];
  
    // Get the current URL path
    const currentPath = window.location.pathname;
  
    console.log("currentPath", currentPath);
  
    // Check if the current URL requires authentication
    if (authenticatedUrls.includes(currentPath) && !tokens) {
      console.log("You should log in first......");
      // Redirect to the login page
      window.location.href = "/userManagement.html"; // Replace with your actual login page URL
    }
  }

  
});






































// // Function to handle login logic
// function handleLogin(form) {
//     const userType = form.parentElement.querySelector("select").value;
//     const usernameOrEmail = form.querySelector('input[type="text"]').value;
//     const password = form.querySelector('input[type="password"]').value;

//     openDatabase().then((db) => {
//       const transaction = db.transaction(userType + "s", "readonly");
//       const store = transaction.objectStore(userType + "s");
//       const index = store.index("username");

//       // Retrieve user data based on usernameOrEmail
//       const request = index.get(usernameOrEmail);

//       request.onsuccess = function (event) {
//         const userObject = event.target.result;

//         if (userObject && userObject.password === password) {
//           console.log("Login successful!");

//           // Store a token or user ID in sessionStorage
//           const userId = userObject.studentId || userObject.creatorId;
//           sessionStorage.setItem("token", userId);

//           // Check if the token is set correctly
//           console.log("Token set:", sessionStorage.getItem("token"));

//           // Create a session record in indexedDB before redirecting
//           createSession(userId, userType); // Pass userType as an argument

//           // Redirect to the dashboard or do other actions
//           redirectToDashboard(userType); // Pass userType as an argument
//         } else {
//           console.error("Invalid credentials");
//           // Handle invalid login, e.g., show an error message to the user
//         }
//       };

//       request.onerror = function () {
//         console.error("Error retrieving user:", request.error);
//         // Handle the error, e.g., show an error message to the user
//       };
//     });
//   }

//   function createSession(userId, userType) {
//     openDatabase().then((db) => {
//       const transaction = db.transaction(["sessions"], "readwrite");
//       const store = transaction.objectStore("sessions");

//       const sessionObject = {
//         userId,
//         userType, // Add userType to the session data
//         // Add other properties as needed
//       };

//       const addRequest = store.add(sessionObject);

//       addRequest.onsuccess = function () {
//         console.log("Session created successfully!");
//       };

//       addRequest.onerror = function () {
//         console.error("Error creating session:", addRequest.error);
//       };
//     });
//   }

//   function redirectToDashboard(userType) {
//     openDatabase().then((db) => {
//       const token = sessionStorage.getItem("token");

//       if (!token) {
//         console.error("Token not found");
//         return;
//       }

//       const transaction = db.transaction(["sessions"], "readonly");
//       const store = transaction.objectStore("sessions");
//       const index = store.index("userId");

//       const request = index.get(token);

//       request.onsuccess = function (event) {
//         const sessionObject = event.target.result;

//         if (sessionObject) {
//           // Check the userType and redirect accordingly
//           if (sessionObject.userType === "student") {
//             window.location.href = "./studentdashboard.html";
//           } else if (sessionObject.userType === "teacher") {
//             window.location.href = "./teacherdashboard.html";
//           }
//         } else {
//           console.error("Session not found");
//         }
//       };

//       request.onerror = function () {
//         console.error("Error checking session:", request.error);
//       };
//     });
//   }

//   function isValidSession() {
//     return new Promise((resolve) => {
//         const token = sessionStorage.getItem("token");

//         if (token) {
//             // Check if the session exists in the IndexedDB 'sessions' object store
//             openDatabase().then((db) => {
//                 const transaction = db.transaction(["sessions"], "readonly");
//                 const store = transaction.objectStore("sessions");
//                 const request = store.get(token);

//                 request.onsuccess = function (event) {
//                     const sessionObject = event.target.result;
//                     resolve(!!sessionObject); // Resolve with true if session exists, false otherwise
//                 };

//                 request.onerror = function () {
//                     console.error("Error checking session:", request.error);
//                     resolve(false); // Resolve with false in case of an error
//                 };
//             });
//         } else {
//             resolve(false); // Resolve with false if no token is found
//         }
//     });
// }

// isValidSession().then((isValid) => {
//     const dashboardLink = document.getElementById("dashboardLink");

//     console.log(isValid);
//     if (isValid) {
//         // User is logged in, enable dashboard link
//         dashboardLink.addEventListener("click", function (event) {
//             event.preventDefault();
//             redirectToDashboard();
//         });
//     } else {
//         // User is not logged in, disable dashboard link or redirect to the login page
//         dashboardLink.addEventListener("click", function (event) {
//             event.preventDefault();
//             alert("Please log in first.");
//             // Redirect to the login page or show a login modal
//         });
//     }
// });
