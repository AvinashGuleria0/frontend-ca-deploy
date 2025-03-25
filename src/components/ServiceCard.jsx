function ServiceCard({data}){
    return(
        <div className="parent">
            <h2>Title: {data.title}</h2>
            <br />
            <p>Description: {data.description}</p>
        </div>
    )
}

export default ServiceCard;