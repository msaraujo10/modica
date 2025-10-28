export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-2 font-semibold">DiMod Clean</p>
                <p className="text-gray-400 text-sm">
                    Serviço de limpeza especializado para anfitriões do Airbnb em Copacabana — Rio de Janeiro
                </p>
                <p className="mt-4 text-gray-500 text-xs">
                    © {new Date().getFullYear()} Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}