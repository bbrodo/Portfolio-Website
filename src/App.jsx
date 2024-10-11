import { Navbar } from "./components/Navbar/Navbar";
import styles from './App.module.css'
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";

function App() {
  return <div className={styles.app}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
  </div>
}

export default App
