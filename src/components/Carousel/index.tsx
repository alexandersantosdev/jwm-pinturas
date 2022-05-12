
export default function Carousel({ images }: any) {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {images?.map((image: any, i: any) => {
                    if (image) {
                        return <div key={i} className={i == 0 ? 'carousel-item active' : 'carousel-item'}>
                            <img className="d-block w-100" src={`https://docs.google.com/uc?id=${image}`} alt={`imagem ${i + 1}`} />
                        </div>
                    }
                })}
            </div>
        </div>
    )
}