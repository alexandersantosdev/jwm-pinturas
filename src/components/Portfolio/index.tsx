import { useEffect, useState } from 'react';
import axios from 'axios';

import Modal from '../Modal';
import Service from '../Service';

type serviceType = {
    title: string;
    subtitle: string;
    mainImage: string;
    imageAlt: string;
    description: string;
}

export default function Portfolio() {

    const [services, setServices] = useState<serviceType[]>([]);

    const handleGetServices = async () => {
        let servicesJson = await axios.get('https://opensheet.elk.sh/1nNJA9sfbg432DyRnpv8602v1vMy8y8qqh2m091NWqh4/servicos')
        setServices(servicesJson.data);
    }

    useEffect(() => {
        handleGetServices();
    }, [])

    return (
        <>
            {services && services.map((service: serviceType, i) => <Modal key={i} id={`${i + 1}`} modalData={service} />)}
            <section className="page-section bg-light" id="portfolio" >
                <div className="container">
                    <div className="row">
                        {services && services.map((service: serviceType, i) => <Service key={i} image={service.mainImage} title={service.title} subtitle={service.subtitle} modalId={`#portfolioModal${i + 1}`} />)}
                    </div>
                </div>
            </section>
        </>
    );
}