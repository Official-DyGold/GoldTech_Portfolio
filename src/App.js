import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';
import HomeContent from './components/HomeContent';
import AboutUs from './components/AboutUs';
import 'font-awesome/css/font-awesome.min.css';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import ContactUS from './components/ContactUS';

function App() {

    return (
        <div className="App">
            <div>
                <Header />
            </div>
            <main>
                <HomeContent />
                <AboutUs />
               <Service /> 
                <Portfolio /> 
                <ContactUS />             
            </main>
            <Footer />
        </div>
    );
};

export default App;
