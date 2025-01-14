import { useState, useEffect } from 'react';

import { fetchData } from './util/api.js';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import AgencyServices from './components/agency-services/AgencyServices.jsx';
import GetStarted from './components/get-started/GetStarted.jsx';
import Footer from './components/footer/Footer';
import appData from './data.json';

import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        // const result = null
        const result = await fetchData();
        if (result) {
          setData(result);
        } else {
          console.warn("No data from server, using fallback data");
          setData(appData); 
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data from the server:", error);
        setData(null);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (!data) {
    return (
      <section className="error-container">
        <div className="error">
          <h3> Failed to fetch data from the server.</h3>
          <p>Please try again later.</p>
        </div>
      </section>
    )
      ;
  }

  return (
    <>
      <Header logo={data.company_data.logo} menuItems={data.main_menu} />
      <Hero heroData={data.hero} />
      <Services servicesData={data.services} />
      <Portfolio portfolioData={data.portfolio} />
      <AgencyServices servicesData={data['agency_services']} />
      <GetStarted />
      <Footer companyData={data.company_data} footerMenu={data.footer_menu} />
    </>
  );
}

export default App;
