import { FormEvent } from "react";

function App() {
    function handleForm(e : FormEvent) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData.entries())
        console.log(data.email)
    }

    return (
        <form className="max-w-xl flex flex-col gap-10 mx-auto my-20" onSubmit={handleForm}>
            <input className="h-10 bg-white border-b-2 border-black focus:outline-none invalid:border-red-500 valid:border-blue-600" type="text" name="name" placeholder="name" required />
            <input className="h-10 bg-white border-b-2 border-black focus:outline-none invalid:border-red-500 valid:border-blue-600" type="text" name="username" placeholder="username" required/>
            <input className="h-10 bg-white border-b-2 border-black focus:outline-none invalid:border-red-500 valid:border-blue-600" type="text" name="email" placeholder="email" required/>
            
            <button type="submit" className="w-full py-2 bg-blue-500">Submit</button>
        </form>
    )
}

export default App;