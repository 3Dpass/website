import "../styles/table.css";

const Table = ({ headers, data }) => {
  return (
    <table className="table-main">
      <tbody>
        <tr>
          {headers.map((title, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            {item.map((info, k) => (
              <td key={k}>{info}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
