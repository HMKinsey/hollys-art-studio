import LoginForm from "../components/auth/AuthLogin"
import { Footer } from "../components/layout/Footer"

// Page for admin login  to be handled
export function AdminPage() {

    return (<main> 
            <LoginForm/>
        <Footer />
    </main>)
}

export default AdminPage