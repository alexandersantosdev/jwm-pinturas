
export default function Header({ title, subtitle, phone, image }: { title: string, subtitle: string, phone: string, image: string }) {
    return (
        <header className="masthead" style={{ backgroundImage: `url('https://docs.google.com/uc?id=${image}')` }}>
            <div className="container">
                <div className="masthead-subheading">{title}</div>
                <div className="masthead-heading text-uppercase">{subtitle}</div>
                <a className="btn btn-whatsapp btn-xl text-uppercase" href={`https://api.whatsapp.com/send?phone=${phone}&text=Olá, estou entrando em contato para saber mais sobre seus serviços de pintura`} aria-label="Whatsapp"><i className="fab fa-whatsapp"></i> &nbsp;Quero saber mais</a>
            </div>
        </header>
    );
}