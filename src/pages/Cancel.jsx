import { Link } from "react-router-dom";

export default function Cancel() {
  return (
    <main className="page cancel">
      <h1>Payment canceled</h1>
      <p>You can return and try again at any time.</p>
      <Link to="/" className="btn">Back to home</Link>
    </main>
  );
}
