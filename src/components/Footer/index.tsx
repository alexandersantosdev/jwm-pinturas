export default function Footer({ copyRightText }: { copyRightText: string }) {

    const year = new Date().getFullYear();
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center justify-content-around">
                    <div className="col-lg-6 text-lg-start">Copyright &reg; {copyRightText} - {year}</div>

                    <div className="col-lg-6 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" target="_blank" href="https://www.linkedin.com/in/alexander-roberto-dos-santos-030bb786/">Criado com <i className="fas fa-heart text-danger"></i> por Alexander Roberto dos Santos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}