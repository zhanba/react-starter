import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './App.css';

const Home = () => <h1>Home comp</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const Links = () => (
  <nav>
    <Link to="/" className={styles.app}>Home</Link>
    <Link to={{ pathname: '/about' }}>About</Link>
    <Link replace to="/contact">Contact</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
