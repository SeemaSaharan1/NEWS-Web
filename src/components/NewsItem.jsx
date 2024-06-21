import newsImg from "../assets/news.jpeg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 px-2 py-2"
      style={{ maxWidth: "360px" }}
    >
      <img
        src={src ? src : newsImg}
        style={{ height: "200px", width: "335px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 80)
            : "This news is about something important event. It is information about something that just happen."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
