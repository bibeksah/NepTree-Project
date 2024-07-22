// App.js
import React from 'react';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My App</h1>
      </header>
      <main>
        <section>
          <h2>Introduction</h2>
          <p>This is a sample home page for my React app.</p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
}

export default App;