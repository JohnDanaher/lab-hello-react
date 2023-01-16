// src/App.js
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" className='logo' alt="logo" />
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" className='menu' alt="menu" />
      </nav>
      <div className="headerSorta">
      <h1>Say hello to <br /> ReactJS</h1>
      <p>You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer.</p>
      <button>Awesome!</button>
      </div>
      <div className='buttons'>
        <div className='button1'>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="declarative" />
        <h4>Declarative</h4>
        <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='button2'>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="declarative" />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className='button3'>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="declarative" />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className='button4'>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="declarative" />
        <h4>JSX</h4>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;