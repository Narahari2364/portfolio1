import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Cognifyz Technologies · Remote</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built 4 Java applications (Task Manager, Temperature Converter,
              Guessing Game, Pyramid Pattern) applying core OOP principles—
              encapsulation, getter/setter methods, and constructor-based
              initialization. Implemented full CRUD operations with ArrayList
              and Scanner-driven menus, and applied structured techniques
              (nested loops, conditional validation, method extraction) for
              clean, reusable code. Skills: Java, Control Flow, Module Design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software & Data Projects</h4>
                <h5>Personal &amp; Academic</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Shipped multiple end-to-end projects including a stock-market
              ETL pipeline (Python, PostgreSQL, Alpha Vantage) and several
              full-stack applications. Deepened skills in React, Node.js,
              Azure, and applied machine learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer &amp; Software Developer</h4>
                <h5>Open to Internships &amp; Co-ops</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently building scalable data pipelines, AI-powered
              applications, and cloud-native solutions. Actively seeking
              data engineering and software development opportunities where
              I can solve complex technical challenges with data and code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
