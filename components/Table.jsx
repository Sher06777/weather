const Table = ({ data, message }) => {
  return (
    <div>
      {message.length > 0 ? <p>{message}</p> : ""}
      {JSON.stringify(data) === "{}" ? (
        ""
      ) : (
        <table>
          <tr>
            <td>Country</td>
            <td>{data.sys.country}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Temperature</td>
            <td>{Math.round(data.main.temp - 273.15)+'°C'}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{data.weather[0].description}</td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default Table;
