# Login & Signup App

A modern, responsive React application for user authentication with comprehensive form validation and a beautiful UI.

## 🚀 Live Demo

[Add your live demo link here]

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## ⚡ Features

### 🔐 Authentication System
- **User Registration**: Complete signup process with comprehensive validation
- **User Login**: Secure login with credential verification
- **Local Storage**: User data persistence using browser's localStorage
- **Session Management**: Automatic user session handling

### 📝 Form Validation
#### Login Page Validation:
- ✅ Username required
- ✅ Password required
- ✅ Username and password must not be identical
- ✅ Credential verification against stored user data

#### Signup Page Validation:
- ✅ **Name**: Alphabets and spaces only (e.g., "John Doe")
- ✅ **Username**: Alphanumeric + special characters (`@`, `.`, `_`, `-`)
- ✅ **Email**: Valid Gmail format only (`example@gmail.com`)
- ✅ **Phone**: Country code + 10 digits (e.g., `+919876543210`)
- ✅ **Password**: Alphanumeric + special characters (`@`, `.`, `_`, `-`)
- ✅ **Confirm Password**: Must match password exactly
- ✅ **Duplicate Username Check**: Prevents registration with existing usernames

### 🎨 User Interface
- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Interactive Elements**: Hover effects, focus states, and visual feedback
- **Password Visibility Toggle**: Show/hide password functionality
- **Error Handling**: Clear error messages with visual indicators

### 🔧 Reusable Components
- **InputField Component**: Universal input component with built-in validation display
- **Form Validation**: Centralized validation logic
- **Error Management**: Consistent error handling across all forms

## 🛠️ Technologies Used

- **React 19.1.1** - Frontend framework
- **React Router DOM 7.8.1** - Client-side routing
- **CSS3** - Styling and responsive design
- **LocalStorage API** - Client-side data persistence
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-link>
   cd login-signup-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🎯 Usage

### For Users

1. **First Time Users**:
   - Click "Sign Up" on the login page
   - Fill in all required fields with valid information
   - Submit the form to create your account
   - You'll be redirected to the login page

2. **Returning Users**:
   - Enter your username and password
   - Click "Login" to access your account
   - Successful login will show a welcome message

### For Developers

The application uses localStorage for data persistence. User data is stored in the following format:

```javascript
{
  name: "John Doe",
  username: "johndoe",
  email: "john@gmail.com",
  phone: "+919876543210",
  password: "password123"
}
```

## 📁 Project Structure

```
login-signup-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── InputField.js          # Reusable input component
│   ├── pages/
│   │   ├── Login.js              # Login page component
│   │   └── Signup.js             # Signup page component
│   ├── App.js                    # Main app component with routing
│   ├── App.css                   # Main stylesheet
│   └── index.js                  # Application entry point
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

## 🔌 API Documentation

### Local Storage API

The application uses browser localStorage for data persistence:

#### Store User Data
```javascript
localStorage.setItem('users', JSON.stringify(usersArray));
```

#### Retrieve User Data
```javascript
const users = JSON.parse(localStorage.getItem('users') || '[]');
```

#### Store Current User Session
```javascript
localStorage.setItem('currentUser', JSON.stringify(userData));
```

### Component Props

#### InputField Component
```javascript
<InputField
  label="Field Label"           // Display label for the input
  type="text|password|email"    // Input type
  name="fieldName"              // Field name for form handling
  value={fieldValue}            // Controlled input value
  onChange={handleChange}       // Change handler function
  error={errorMessage}          // Error message to display
  placeholder="Placeholder text" // Input placeholder
/>
```

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Styling
The application uses CSS for styling. Main styles are in `src/App.css`. You can customize:
- Color scheme
- Typography
- Layout spacing
- Component dimensions
- Animation effects

### Validation Rules
Validation logic is centralized in the respective page components. You can modify:
- Regex patterns for field validation
- Error message text
- Required field rules

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Create React App for the development setup
- React Router for client-side routing

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

**Made with ❤️ using React**
