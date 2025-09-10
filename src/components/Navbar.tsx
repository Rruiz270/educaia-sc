'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-gradient">EducaIA-SC</span>
            <div className="border-l border-gray-300 h-8"></div>
            <a 
              href="https://alumni.org.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              <img 
                src="/alumni-logo.svg" 
                alt="Alumni by Better" 
                className="h-6 w-auto opacity-70 hover:opacity-90 transition-opacity"
              />
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/curso" className="text-gray-700 hover:text-blue-600 font-medium transition">
              O Curso
            </Link>
            <Link href="/disciplinas" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Disciplinas
            </Link>
            <Link href="/recursos" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Recursos IA
            </Link>
            <Link href="/projetos" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Meus Projetos
            </Link>
            <Link href="/comunidade" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Comunidade
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Sobre
            </Link>
            <Link href="/admin-dashboard" className="text-red-600 hover:text-red-800 font-medium transition border border-red-600 px-3 py-1 rounded">
              Admin
            </Link>
            <Link 
              href="/login" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-medium"
            >
              Entrar
            </Link>
            <Link 
              href="/cadastro" 
              className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition font-medium"
            >
              Cadastrar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/curso" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                O Curso
              </Link>
              <Link href="/disciplinas" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Disciplinas
              </Link>
              <Link href="/recursos" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Recursos IA
              </Link>
              <Link href="/projetos" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Meus Projetos
              </Link>
              <Link href="/comunidade" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Comunidade
              </Link>
              <Link href="/sobre" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Sobre
              </Link>
              <Link href="/admin-dashboard" className="block px-3 py-2 text-red-600 hover:text-red-800 font-medium border border-red-600 rounded mx-3 text-center">
                Admin
              </Link>
              <Link href="/login" className="block px-3 py-2 text-blue-600 font-medium">
                Entrar
              </Link>
              <Link href="/cadastro" className="block px-3 py-2 text-blue-600 font-medium">
                Cadastrar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}