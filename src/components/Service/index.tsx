export default function Service({ image, title, subtitle, modalId }: { image: string, title: string, subtitle: string, modalId: string }) {
    return (
        <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" data-bs-target={modalId} href={modalId}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={`https://docs.google.com/uc?id=${image}`} alt="..." />
                </a>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{title}</div>
                    <div className="portfolio-caption-subheading text-muted">{subtitle}</div>
                </div>
            </div>
        </div>
    );
}