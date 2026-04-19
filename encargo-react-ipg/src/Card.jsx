function Card({ title, description, img }) {
  return (
    <div className="card shadow-sm h-100">       
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <img src={img} className="card-img-top" alt="mascota" style={{ height: '200px', objectFit: 'cover' }} />
            <p className="card-text">{description}</p>
        </div>
    </div>
  );
}

export default Card;