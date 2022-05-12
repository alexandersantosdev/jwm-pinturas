import { useEffect, useState } from 'react';
import axios from 'axios';

import { Contact, Footer, Header, NavBar, Portfolio, Services, Time } from './components'

type siteDataType = {
  mainImage: string;
  title: string;
  subtitle: string;
  phone: string;
  facebook: string;
  instagram: string;
  mainServiceTitle: string;
  mainServiceSubTitle: string;
  mainServiceDescription: string;
  copyRightText: string;
}

function App() {

  const [siteData, setSiteData] = useState<siteDataType>({} as siteDataType);

  const handleGetServices = async () => {
    let siteDataJson = await axios.get('https://opensheet.elk.sh/1nNJA9sfbg432DyRnpv8602v1vMy8y8qqh2m091NWqh4/main')
    setSiteData(siteDataJson.data[0]);
  }

  useEffect(() => {
    handleGetServices();
  }, [])
  return (
    <div className="App">
      <NavBar title={siteData.title} />
      <Header title={siteData.title} subtitle={siteData.subtitle} phone={siteData.phone} image={siteData.mainImage} />
      <Services mainServiceTitle={siteData.mainServiceTitle} mainServiceSubtitle={siteData.mainServiceSubTitle} mainServiceDescription={siteData.mainServiceDescription} />
      <Portfolio />
      <Time />
      <Contact facebook={siteData.facebook} instagram={siteData.instagram} phone={siteData.phone} />
      <Footer copyRightText={siteData.copyRightText} />
    </div>
  )
}

export default App
