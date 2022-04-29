import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Statistics from '../components/Statistics/Statistics';
import Boost from '../components/Boost/Boost';
import Footer from '../components/Footer/Footer';

const App = () => {
   return (
      <>
         <Header />
         <main>
            <Intro />
            <Statistics />
            <Boost />
         </main>
         <Footer />
      </>
   );
};

export default App;
