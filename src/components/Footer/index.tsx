export default function Footer() {

    const year = new Date().getFullYear();
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &reg; JWM serviços de pinturas LTDA - {year}</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" target="_blank" href="https://www.linkedin.com/in/alexander-roberto-dos-santos-030bb786/">Criado com <i className="fas fa-heart text-danger"></i> por Alexander Roberto dos Santos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}