import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Prehome() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => navigate("/home"), 1000);
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
        background:
          "linear-gradient(135deg, #0d1117, #1a1f2b, #243b55, #141e30, #0f2027)",
        backgroundSize: "400% 400%",
        color: "#e6edf3",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        transition: "opacity 1s ease",
        opacity: fadeOut ? 0 : 1,
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          background: "linear-gradient(to right, #00c6ff, #0072ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          marginBottom: "20px",
        }}
      >
        Dive into a World of Technology & Innovation
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#b0bec5",
          maxWidth: "700px",
        }}
      >
        Step into my portfolio, where creativity meets code.
        From <strong style={{ color: "#00c6ff" }}>Java backends</strong> to
        sleek <strong style={{ color: "#ff758c" }}>React frontends</strong>,
        every project is crafted with precision and passion.
        Explore my journey through{" "}
        <strong style={{ color: "#ffb347" }}>Spring Boot</strong>,{" "}
        <strong style={{ color: "#80ffdb" }}>Cloud Deployments</strong> and
        modern web design trends.
      </p>

      <button
        onClick={() => navigate("/home")}
        style={{
          marginTop: "30px",
          padding: "12px 30px",
          background: "linear-gradient(90deg, #6a11cb, #2575fc)",
          border: "none",
          borderRadius: "30px",
          color: "#fff",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0px 4px 20px rgba(37, 117, 252, 0.5)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.05)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
         Explore My Portfolio
      </button>
    </div>
  );
}
export default Prehome;
