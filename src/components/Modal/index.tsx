import close from '../../images/close-icon.svg';
import Carousel from '../Carousel';

type ModalData = {
    modalData: {
        title: string;
        subtitle: string;
        mainImage: string;
        image1?: string;
        image2?: string;
        image3?: string;
        image4?: string;
        image5?: string;
        image6?: string;
        imageAlt: string;
        description: string;
    },
    id: string;
}

export default function Modal({ modalData: { title, subtitle, description, image1, image2, image3, image4, image5, image6 }, id }: ModalData) {
    return (
        <div className="portfolio-modal modal fade" id={`portfolioModal${id}`} role="dialog" aria-labelledby={`portfolioModal${id}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={close} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">{title}</h2>
                                    <p className="item-intro text-muted">{subtitle}</p>
                                    <Carousel images={[image1, image2, image3, image4, image5, image6]} />
                                    <p>{description}</p>

                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-xmark me-1"></i>
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}