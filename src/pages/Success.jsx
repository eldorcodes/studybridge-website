import { Link } from "react-router-dom";

export default function Success() {
  return (
    <main className="page success">
      <h1>Payment successful</h1>
      <p>Thanks for subscribing to StudyBridge LLC.</p>
      <Link to="/" className="btn">Back to home</Link>
    </main>
  );
}
