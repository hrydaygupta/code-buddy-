import React from 'react';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>CodeBuddy</div>
      <ul style={styles.navItems}>
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1e1e2f',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navItems: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
    fontSize: '1rem',
  },
};

export default Navbar;
