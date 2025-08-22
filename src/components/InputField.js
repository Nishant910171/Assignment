import React, { useState } from "react";

function InputField({ type, name, value, onChange, error, placeholder, label }) {
  const [showPassword, setShowPassword] = useState(false);
  
  // Determine if this is a password field
  const isPasswordField = type === "password";
  
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-div">
      {label && (
        <label 
          style={{ 
            display: "block", 
            marginBottom: "8px", 
            fontWeight: "500",
            fontSize: "14px",
            color: "#333"
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <input
          name={name}
          type={isPasswordField && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: "12px 10px",
            paddingRight: isPasswordField ? "45px" : "10px",
            border: error ? "1px solid #e74c3c" : "1px solid #ddd",
            borderRadius: "6px",
            boxSizing: "border-box",
            fontSize: "14px",
            backgroundColor: "#fff",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            outline: "none"
          }}
          onFocus={(e) => {
            e.target.style.borderColor = error ? "#e74c3c" : "#00695c";
            e.target.style.boxShadow = "0 0 0 2px rgba(0, 105, 92, 0.1)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = error ? "#e74c3c" : "#ddd";
            e.target.style.boxShadow = "none";
          }}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              color: "#666",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              transition: "background-color 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f5f5f5";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        )}
      </div>
      {error && (
        <p style={{ 
          color: "#e74c3c", 
          fontSize: "12px", 
          marginTop: "6px",
          marginBottom: "0",
          fontWeight: "400"
        }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;

