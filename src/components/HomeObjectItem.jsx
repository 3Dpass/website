import "../styles/homeobjectitem.css";

const HomeObjectItem = ({ icon, title }) => {
  return (
    <div className="home-object-item">
      <div className={"home-object-item-square " + icon}></div>
      <div
        className="home-object-title"
        dangerouslySetInnerHTML={{ __html: `<p>${title}</p>` }}
      ></div>
    </div>
  );
};

export default HomeObjectItem;
