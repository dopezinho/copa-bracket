import { Icon } from '../../components'

const Input = ({ name, label, ...props}) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
        <input {...props} name={name} id={name} className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1"/>
    </div>
)

export const Signup = () => {
    return (
        <div>
            <header className="p-4 border-b border-red-300">
                <div className="container max-w-xl flex justify-center">
                <img src="/imgs/logo.svg" className="w-32 md:w-40"/>
                </div>
            </header>
            <main className="container max-w-xl p-4">
                <div className="flex space-x-4 items-center">
                    <a href="/">
                    <Icon name="back" className="h-6"/>
                    </a>
                    <h2 className="text-xl font-bold">Crie sua conta</h2>
                </div>

                <form className="p-4 space-y-6">
                    <Input
                        type="text"
                        name="name"
                        label="Seu nome"
                        placeholder="Digite seu nome"
                    />

                    <Input
                        type="text"
                        name="username"
                        label="Seu nome de usuário"
                        placeholder="Digite um nome de usuário"
                    />
                    <Input
                        type="text"
                        name="email"
                        label="Seu e-mail"
                        placeholder="Digite seu e-mail"
                    />

                    <Input
                        type="password"
                        name="passowrd"
                        label="Sua senha"
                        placeholder="Digite sua senha"
                    />
                    <a href="/dashboard" className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl"text-center >
                        Criar minha Conta
                    </a>
                </form>
            </main>
        </div>
    )
}