import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  const sectionStyle = {
    padding: "20px 0",
    marginBottom: "16px",
    backgroundColor: "#4F46E5", // Tailwind bg-indigo-700
    color: "white"
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const heroTextStyle = {
    textAlign: "center"
  };

  const heroHeadingStyle = {
    fontSize: "2.25rem", // Tailwind text-4xl
    fontWeight: "800", // Tailwind font-extrabold
    color: "white"
  };

  const heroParagraphStyle = {
    margin: "16px 0",
    fontSize: "1.25rem", // Tailwind text-xl
    color: "white"
  };

  const cardStyle = {
    backgroundColor: "#F3F4F6", // Tailwind bg-gray-100
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  };

  const cardHeadingStyle = {
    fontSize: "1.5rem", // Tailwind text-2xl
    fontWeight: "700"
  };

  const cardLinkStyle = {
    display: "inline-block",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "8px",
    padding: "8px 16px",
    textDecoration: "none",
    hover: { backgroundColor: "#333" } // Tailwind hover:bg-gray-700
  };

  const browseJobsSectionStyle = {
    backgroundColor: "#F0F9FF", // Tailwind bg-blue-50
    padding: "40px 16px"
  };

  const jobCardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    position: "relative"
  };

  const jobHeadingStyle = {
    fontSize: "1.25rem", // Tailwind text-xl
    fontWeight: "700",
    color: "#4F46E5" // Tailwind text-indigo-500
  };

  const jobLinkStyle = {
    height: "36px",
    backgroundColor: "#4F46E5", // Tailwind bg-indigo-500
    color: "#fff",
    padding: "0 16px",
    borderRadius: "8px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "0.875rem", // Tailwind text-sm
    display: "inline-block",
    marginTop: "8px"
  };

  return (
    <>
      <Navbar />
      <Hero />

      {/* Developers and Employers */}
      <section style={{ padding: "16px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", padding: "16px", borderRadius: "8px" }}>
            <div style={cardStyle}>
              <h2 style={cardHeadingStyle}>For Developers</h2>
              <p style={{ margin: "8px 0 16px" }}>Browse our React jobs and start your career today</p>
              <a href="/jobs.html" style={cardLinkStyle}>Browse Jobs</a>
            </div>
            <div style={{ ...cardStyle, backgroundColor: "#E0E7FF" }}> {/* Tailwind bg-indigo-100 */}
              <h2 style={cardHeadingStyle}>For Employers</h2>
              <p style={{ margin: "8px 0 16px" }}>List your job to find the perfect developer for the role</p>
              <a href="/add-job.html" style={{ ...cardLinkStyle, backgroundColor: "#6366F1", hover: { backgroundColor: "#4F46E5" } }}> {/* Tailwind bg-indigo-500 */}
                Add Job
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Jobs */}
      <section style={browseJobsSectionStyle}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#4F46E5", marginBottom: "24px", textAlign: "center" }}>
            Browse Jobs
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
            {/* Job Listing 1 */}
            <div style={jobCardStyle}>
              <div style={{ padding: "16px" }}>
                <div style={{ marginBottom: "24px" }}>
                  <div style={{ color: "#4B5563" }}>Full-Time</div>
                  <h3 style={jobHeadingStyle}>Senior React Developer</h3>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
                </div>

                <h3 style={{ color: "#4F46E5", marginBottom: "8px" }}>$70 - $80K / Year</h3>

                <div style={{ border: "1px solid #E5E7EB", marginBottom: "20px" }}></div>

                <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                  <div style={{ color: "#F97316", marginBottom: "8px" }}>
                    <i className="fa-solid fa-location-dot" style={{ fontSize: "16px" }}></i>
                    Boston, MA
                  </div>
                  <a href="job.html" style={jobLinkStyle}>Read More</a>
                </div>
              </div>
            </div>
            {/* Job Listing 2 */}
            <div style={jobCardStyle}>
              <div style={{ padding: "16px" }}>
                <div style={{ marginBottom: "24px" }}>
                  <div style={{ color: "#4B5563" }}>Remote</div>
                  <h3 style={jobHeadingStyle}>Front-End Engineer (React)</h3>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
                </div>

                <h3 style={{ color: "#4F46E5", marginBottom: "8px" }}>$70K - $80K / Year</h3>

                <div style={{ border: "1px solid #E5E7EB", marginBottom: "20px" }}></div>

                <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                  <div style={{ color: "#F97316", marginBottom: "8px" }}>
                    <i className="fa-solid fa-location-dot" style={{ fontSize: "16px" }}></i>
                    Miami, FL
                  </div>
                  <a href="job.html" style={jobLinkStyle}>Read More</a>
                </div>
              </div>
            </div>
            {/* Job Listing 3 */}
            <div style={jobCardStyle}>
              <div style={{ padding: "16px" }}>
                <div style={{ marginBottom: "24px" }}>
                  <div style={{ color: "#4B5563" }}>Remote</div>
                  <h3 style={jobHeadingStyle}>React.js Developer</h3>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...
                </div>

                <h3 style={{ color: "#4F46E5", marginBottom: "8px" }}>$70K - $80K / Year</h3>

                <div style={{ border: "1px solid #E5E7EB", marginBottom: "20px" }}></div>

                <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                  <div style={{ color: "#F97316", marginBottom: "8px" }}>
                    <i className="fa-solid fa-location-dot" style={{ fontSize: "16px" }}></i>
                    Brooklyn, NY
                  </div>
                  <a href="job.html" style={jobLinkStyle}>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "640px", margin: "40px auto", padding: "0 24px" }}>
        <a href="jobs.html" style={{ display: "block", backgroundColor: "#000", color: "#fff", textAlign: "center", padding: "16px 24px", borderRadius: "12px", textDecoration: "none", hover: { backgroundColor: "#333" } }}>
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
