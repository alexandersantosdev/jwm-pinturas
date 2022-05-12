export default function Contact({ facebook, instagram, phone }: { facebook: string, instagram: string, phone: string }) {
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contato</h2>
                    <h3 className="section-subheading text-muted">Entre em contato conosco que tão logo te responderemos</h3>
                </div>
                <div className="text-center" id="socialMedia">
                    <a className="btn btn-whatsapp btn-xl text-uppercase" href={`https://api.whatsapp.com/send?phone=${phone}&text=Olá, estou entrando em contato para saber mais sobre seus serviços de pintura`} aria-label="Whatsapp"><i className="fab fa-whatsapp"></i> &nbsp;WhatsApp</a>
                    <a className="btn btn-facebook btn-xl text-uppercase" href={facebook} aria-label="Facebook"><i className="fab fa-facebook-f"></i> &nbsp;Facebook</a>
                    <a className="btn btn-instagram btn-xl text-uppercase" href={instagram} aria-label="Instagram"><i className="fab fa-instagram"></i> &nbsp;Instagram</a>
                </div>
                <br /><br />
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Seu Nome *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="name:required">Digite um nome.</div>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Seu Email *" data-sb-validations="required,email" />
                                <div className="invalid-feedback" data-sb-feedback="email:required">Digite seu email.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email inválido.</div>
                            </div>
                            <div className="form-group mb-md-0">

                                <input className="form-control" id="phone" type="tel" placeholder="Seu telefone *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">Digite um telefone.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">

                                <textarea className="form-control" id="message" placeholder="Sua Mensagem *" data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">Digite uma mensagem.</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Mensagem enviada com sucesso!</div>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Erro ao enviar a mensagem!</div></div>
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Enviar</button></div>

                </form>
            </div>
        </section>
    );
}