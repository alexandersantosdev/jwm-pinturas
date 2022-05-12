export default function Services({ mainServiceTitle, mainServiceSubtitle, mainServiceDescription }: { mainServiceTitle: string, mainServiceSubtitle: string, mainServiceDescription: string }) {
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{mainServiceTitle}</h2>
                    <h3 className="section-subheading text-muted">{mainServiceSubtitle}</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-15">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-solid fa-brush fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Pinturas em geral</h4>
                        <p className="text-muted">{mainServiceDescription}</p>
                    </div>

                </div>
            </div>
        </section>
    );
}