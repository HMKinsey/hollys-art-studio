export async function login(email:string, password: string){
    const response = await fetch('./api/admin/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email, password})
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.error ?? 'Login Failed')
    }

    return data
}