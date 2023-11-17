import { Link, useParams } from "react-router-dom"

function CompanyPage(props) {
  let { companySlug } = useParams()

  const company = props.companies.find(
    (company) => company.slug.toLowerCase() === companySlug.toLowerCase()
  )

  console.log("Company:", company)

  return (
    <div style={{ width: "30vw" }}>
      <div>
        <h1>Company Profile</h1>

        {company && (
          <div>
            <img src={company.logo} alt="logo" style={{ height: "7rem" }} />
            <h2>{company.name}</h2>
            <p>{company.website}</p>
            <p>{company.description}</p>
          </div>
        )}
      </div>

      {company && company.techStack && (
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyle: "none",
          }}
        >
          {company.techStack.map((technology) => (
            <li key={technology.slug} style={{}}>
              <Link to={`/tech/${technology.slug}`}>
                <div>
                  <h3>{technology.name}</h3>
                  <img
                    src={technology.image}
                    alt={technology.name}
                    style={{ width: "5rem" }}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CompanyPage
