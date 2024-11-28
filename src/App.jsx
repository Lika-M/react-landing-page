import { useState, useEffect } from 'react';

import { fetchData } from './util/api.js';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import AgencyServices from './components/agencyServices/AgencyServices.jsx';
import appData from './data.json';

import './App.css';

function App() {
  const [data, setData] = useState(null);
  console.log(data)

 useEffect(() => {
   /* const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
    */
   setData(appData)
  }, []);

  if (!data) {
    return <div className="loader">Loading...</div>; 
  }

  return (
    <>
      <Header logo={data.company_data.logo} menuItems={data.main_menu} />
      <Hero heroData={data.hero} />
      <Services servicesData={data.services} />
      <Portfolio portfolioData={data.portfolio} />
      <AgencyServices servicesData={data['agency_services']}/>
    </>
  );
}

export default App;
