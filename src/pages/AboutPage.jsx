import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <h1>About</h1>
      <p>This is a React app to leave a feedback for a product or service</p>
      <p>Version: 1.0.0</p>

      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage