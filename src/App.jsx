// Bringing in the required import from 'react-router-dom'
// import Header from './components/header'
import { Outlet } from 'react-router-dom';
// import Header from './components/header';
import Nav from './components/Nav/navigation';
import Footer from './components/footer';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default App;