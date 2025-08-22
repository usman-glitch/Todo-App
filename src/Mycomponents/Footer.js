import React from "react";

export default function Footer() {
  let FooterStyle = {
    marginTop: "fixed", // pushes footer down
    textAlign: "center",
    padding: "100px",
    backgroundColor: "#212529",
    color: "white",
  };

  return (
    <footer className="bg-dark text-light text-center p-3" style={FooterStyle}>
      <p>Copyright &copy; My Todo App</p>
    </footer>
  );
}
