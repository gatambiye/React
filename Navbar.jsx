import React from 'react';
import logo from '../assets/images/logo.png'; // Correct path to your logo image

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#4F46E5", // Tailwind bg-indigo-700
    borderBottom: "1px solid #4F46E5", // Tailwind border-indigo-500
    padding: "0 16px",
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 16px",
  };

  const flexContainerStyle = {
    display: "flex",
    height: "80px",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    marginRight: "16px",
  };

  const logoImageStyle = {
    height: "40px", // Tailwind h-10
    width: "auto",
  };

  const logoTextStyle = {
    display: "none",
    color: "white",
    fontSize: "1.5rem", // Tailwind text-2xl
    fontWeight: "700", // Tailwind font-bold
    marginLeft: "8px",
  };

  const linksContainerStyle = {
    display: "flex",
    gap: "8px",
  };

  const linkStyle = {
    color: "white",
    padding: "8px 12px",
    borderRadius: "6px",
    textDecoration: "none",
    backgroundColor: "black",
  };

  const linkHoverStyle = {
    backgroundColor: "#1F2937", // Tailwind hover:bg-gray-900
    color: "white",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={flexContainerStyle}>
          <div style={{ ...logoStyle, display: "flex", alignItems: "center", flex: 1, justifyContent: "center" }}>
            <a href="/index.html" style={logoStyle}>
              <img
                style={logoImageStyle}
                src={logo} // Use the imported logo variable here
                alt='React Jobs'
              />
              <span style={logoTextStyle}>
                React Jobs
              </span>
            </a>
            <div style={{ marginLeft: "auto" }}>
              <div style={linksContainerStyle}>
                <a
                  href="/index.html"
                  style={{ ...linkStyle, backgroundColor: "black", ...linkHoverStyle }}
                >
                  Home
                </a>
                <a
                  href="/jobs.html"
                  style={{ ...linkStyle, backgroundColor: "transparent", ...linkHoverStyle }}
                >
                  Jobs
                </a>
                <a
                  href="/add-job.html"
                  style={{ ...linkStyle, backgroundColor: "transparent", ...linkHoverStyle }}
                >
                  Add Job
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
