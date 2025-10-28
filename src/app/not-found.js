import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="bg-white text-gray-800">

            <main className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold text-blue-900 mb-4">404</h1>
                <p className="text-xl mb-8">Página não encontrada 😕</p>
                <p className="mb-8">
                    A página que você procurou não existe ou ainda está sendo construída.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition"
                >
                    Voltar para a Home
                </Link>
            </main>

        </div>
    );
}