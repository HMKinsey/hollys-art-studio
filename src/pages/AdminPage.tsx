import LoginForm from '../components/auth/AuthLogin';
import { Footer } from '../components/layout/Footer';

export function AdminPage() {
  return (
    <main>
      <LoginForm />
      <Footer />
    </main>
  );
}

export default AdminPage;
