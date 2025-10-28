'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-wide">
                    DiMod Clean
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><Link href="/sobre" className="hover:text-blue-200 transition">Sobre</Link></li>
                        <li><Link href="/servicos" className="hover:text-blue-200 transition">Serviços</Link></li>
                        <li><Link href="/atuacao" className="hover:text-blue-200 transition">Atuação</Link></li>
                        <li><Link href="/contato" className="hover:text-blue-200 transition">Contato</Link></li>
                    </ul>
                </nav>
                <a
                    href="https://wa.me/5521999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden bg-green-500 text-white px-3 py-1 rounded text-sm"
                >
                    WhatsApp
                </a>
            </div>
        </header>
    );
}