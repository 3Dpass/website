import "../styles/news.css";

const News = ({ title, description, date, link }) => {
  return (
    <a href={link} className="news-link">
      <div className="news-holder">
        <div className="news-date">{date}</div>
        <div className="news-title">{title}</div>
        <div className="news-description">{description}</div>
      </div>
    </a>
  );
};

export default News;
