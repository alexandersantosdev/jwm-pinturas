import p1 from '../../images/portfolio/1.jpg';
import p2 from '../../images/portfolio/2.jpg';
import p3 from '../../images/portfolio/3.jpg';
import p5 from '../../images/portfolio/5.jpg';
import p6 from '../../images/portfolio/6.jpg';
import p7 from '../../images/portfolio/7.jpg';

import Modal from '../Modal';

export default function Portfolio() {
    return (
        <>
            <Modal image={p1} id="portfolioModal1" imageAlt="Serviços em altura" title='Rapel e serviços em altura' subtitle="Caixas d'água e cilos" description='Descrição do serviço' />
            <Modal image={p2} id="portfolioModal2" imageAlt="Pisos" title='Pisos' subtitle="Pintura industrial de pisos" description='Descrição do serviço' />
            <Modal image={p3} id="portfolioModal3" imageAlt="Telhados" title='Telhados' subtitle="Pintura de telhados" description='Personalize os espaços' />
            <Modal image={p7} id="portfolioModal4" imageAlt="Pinturas decoradas" title='Pinturas decoradas' subtitle="Personalize os espaços" description='Descrição do serviço' />
            <Modal image={p5} id="portfolioModal5" imageAlt="Faixadas" title='Faixadas' subtitle="Restauração de faixadas" description='Descrição do serviço' />
            <Modal image={p6} id="portfolioModal6" imageAlt="Demarcação" title='Demarcação' subtitle="Quadras poliesportivas e estacionamento" description='Descrição do serviço' />

            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" data-bs-target="#portfolioModal1" href='#portfolioModal1'>
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={p1} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Pintura em altura</div>
                                    <div className="portfolio-caption-subheading text-muted">Caixas d'água e Cilos, Lavagem predial e restauração de faixadas</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">

                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={p2} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Pisos</div>
                                    <div className="portfolio-caption-subheading text-muted">Pintura industrial de pisos<br />&nbsp;</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">

                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={p3} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Telhado</div>
                                    <div className="portfolio-caption-subheading text-muted">Pintura de telhados<br />&nbsp;</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">

                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={p7} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Pinturas decoradas</div>
                                    <div className="portfolio-caption-subheading text-muted">Personalize os espaços<br />&nbsp;</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">

                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={p5} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Faixadas</div>
                                    <div className="portfolio-caption-subheading text-muted">Restauração de faixadas<br />&nbsp;</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">

                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={p6} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Demarcação</div>
                                    <div className="portfolio-caption-subheading text-muted">quadras poliesportivas e estacionamento<br />&nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}