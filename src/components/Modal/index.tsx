import close from '../../images/close-icon.svg';

type modalData = {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    description: string;
    id: string;
}

export default function Modal({ title, subtitle, id, image, imageAlt, description }: modalData) {
    return (
        <div className="portfolio-modal modal fade" id={id} role="dialog" aria-labelledby={id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={close} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">{title}</h2>
                                    <p className="item-intro text-muted">{subtitle}</p>
                                    <img className="img-fluid d-block mx-auto" src={image} alt={imageAlt} />
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