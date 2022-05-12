export default function NavBar({ title }: { title: string }) {

    return (

        <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Serviços</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contato</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}