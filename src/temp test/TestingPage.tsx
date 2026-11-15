import { Link } from 'react-router-dom';
import UseQueryTestingPlayground from './UseQueryTestingPlayground';

function TestingPage() {
  return (
    <div>
      <h1>Testing Page</h1>
      <Link to="/admin">Admin page</Link>
      <UseQueryTestingPlayground />
    </div>
  );
}

export default TestingPage;
