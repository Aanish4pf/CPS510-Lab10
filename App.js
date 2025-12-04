export default function FrameworkPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.6', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh' }}>
      <div style={{ background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
      <h1 style={{ color: '#667eea', borderBottom: '3px solid #667eea', paddingBottom: '10px', fontSize: '2.5em', marginTop: '0' }}>React Framework Assignment</h1>
      
      <section style={{ marginTop: '30px', animation: 'fadeIn 0.6s ease-in' }}>
        <h2 style={{ color: '#333', fontSize: '1.8em' }}>Installation Process</h2>
        <p>To set up React for this project, I used Create React App which is the standard way to start a new React project:</p>
        <ol style={{ marginLeft: '20px', color: '#555' }}>
          <li style={{ marginBottom: '8px' }}>Installed Node.js from nodejs.org</li>
          <li style={{ marginBottom: '8px' }}>Opened terminal and ran: <code style={{ background: '#f0f0ff', padding: '3px 8px', borderRadius: '4px', color: '#667eea', fontFamily: 'monospace', border: '1px solid #e0e0ff' }}>npx create-react-app my-app</code></li>
          <li style={{ marginBottom: '8px' }}>Navigated into the project folder: <code style={{ background: '#f0f0ff', padding: '3px 8px', borderRadius: '4px', color: '#667eea', fontFamily: 'monospace', border: '1px solid #e0e0ff' }}>cd my-app</code></li>
          <li style={{ marginBottom: '8px' }}>Started the development server: <code style={{ background: '#f0f0ff', padding: '3px 8px', borderRadius: '4px', color: '#667eea', fontFamily: 'monospace', border: '1px solid #e0e0ff' }}>npm start</code></li>
        </ol>
        <p style={{ color: '#555' }}>For deployment to GitHub Pages, I installed the gh-pages package with <code style={{ background: '#f0f0ff', padding: '3px 8px', borderRadius: '4px', color: '#667eea', fontFamily: 'monospace', border: '1px solid #e0e0ff' }}>npm install gh-pages --save-dev</code></p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ color: '#333', fontSize: '1.8em' }}>Building the Page</h2>
        <p style={{ color: '#555' }}>Building this page with React was straightforward:</p>
        <ol style={{ marginLeft: '20px', color: '#555' }}>
          <li style={{ marginBottom: '8px' }}>Created a functional component in App.js</li>
          <li style={{ marginBottom: '8px' }}>Used JSX to structure the HTML content</li>
          <li style={{ marginBottom: '8px' }}>Applied inline styles using JavaScript objects</li>
          <li style={{ marginBottom: '8px' }}>Organized content into sections using semantic HTML</li>
          <li style={{ marginBottom: '8px' }}>Built the project for production: <code style={{ background: '#f0f0ff', padding: '3px 8px', borderRadius: '4px', color: '#667eea', fontFamily: 'monospace', border: '1px solid #e0e0ff' }}>npm run build</code></li>
          <li style={{ marginBottom: '8px' }}>Deployed to GitHub Pages: <code style={{ background: '#f0f0ff', padding: '3px 8px', borderRadius: '4px', color: '#667eea', fontFamily: 'monospace', border: '1px solid #e0e0ff' }}>npm run deploy</code></li>
        </ol>
        <p style={{ color: '#555' }}>React components make it easy to create reusable UI elements. Everything on this page is written in JSX, which combines HTML-like syntax with JavaScript.</p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ color: '#333', fontSize: '1.8em' }}>Difficulties and Solutions</h2>
        <div style={{ background: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)', padding: '20px', borderRadius: '8px', marginTop: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginTop: '0', color: '#2d3436' }}>JSX Syntax Errors</h3>
          <p style={{ color: '#2d3436' }}><strong>Problem:</strong> Kept getting errors about className vs class and forgot that all tags need to be closed in JSX.</p>
          <p style={{ color: '#2d3436' }}><strong>Solution:</strong> Learned that JSX is stricter than HTML. Had to use className instead of class and remember to close all tags like img and br with a forward slash.</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)', padding: '20px', borderRadius: '8px', marginTop: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginTop: '0', color: '#fff' }}>Inline Style Object Format</h3>
          <p style={{ color: '#fff' }}><strong>Problem:</strong> CSS properties in inline styles kept throwing errors.</p>
          <p style={{ color: '#fff' }}><strong>Solution:</strong> Realized React uses camelCase for CSS properties (backgroundColor instead of background-color) and values need quotes around them in the JavaScript object.</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)', padding: '20px', borderRadius: '8px', marginTop: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginTop: '0', color: '#fff' }}>Deploy Not Working</h3>
          <p style={{ color: '#fff' }}><strong>Problem:</strong> GitHub Pages showed a blank page after deploying.</p>
          <p style={{ color: '#fff' }}><strong>Solution:</strong> Had to add the homepage field to package.json with the correct GitHub Pages URL. Also made sure to run npm run build before deploying.</p>
        </div>
      </section>

      <footer style={{ marginTop: '50px', paddingTop: '20px', borderTop: '2px solid #e0e0e0', textAlign: 'center', color: '#999' }}>
        <p>Built with React and deployed on GitHub Pages</p>
      </footer>
      </div>
    </div>
  );
}
