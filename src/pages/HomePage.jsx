import { Link } from "react-router-dom"

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div>
        <ul>
          {props.companies.map((company) => (
            <li
              key={company.id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Link to={`/company/${company.name}`}>
                <h2>{company.name}</h2>
                <img src={company.logo} alt="logo" style={{ height: "7rem" }} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HomePage
