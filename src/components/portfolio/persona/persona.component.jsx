import "./persona.styles.scss";

const Persona = () => {
  return (
    <article className="persona">
      <h2 className="persona__name">John Smith</h2>

      <table className="persona__details">
        <tbody>
          <tr>
            <th>Age</th>
            <td>29</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>Toronto</td>
          </tr>
          <tr>
            <th>Occupation</th>
            <td>Student</td>
          </tr>
          <tr>
            <th>Family</th>
            <td>None</td>
          </tr>
        </tbody>
      </table>

      <q>Why isn't it working?!</q>

      <div className="persona__pain-goal">
        <div className="persona__pain">
          <h3>Pain</h3>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </div>

        <div className="persona__goal">
          <h2>Goal</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Persona;
