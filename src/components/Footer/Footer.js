import React from "react";
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; Karl Jones {year}</p>
    </footer>
  );
}
