import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface AdminLoginProps {
    onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    // Contraseña temporal - luego se conectará con backend
    // Contraseña actualizada
    const ADMIN_PASSWORD = 'SeguridadTotal2026';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password === ADMIN_PASSWORD) {
            setError('');
            onLogin();
        } else {
            setError('Contraseña incorrecta');
            setPassword('');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md w-full">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                        <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Panel Administrativo</h1>
                    <p className="text-white/80">Ingresa la contraseña para acceder</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="password" className="block text-white/90 mb-2 font-medium">
                            Contraseña
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 pr-12"
                                placeholder="Ingresa tu contraseña"
                                autoFocus
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-200 text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105"
                    >
                        Ingresar
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <a
                        href="/"
                        className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                        ← Volver al inicio
                    </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-white/50 text-xs text-center">
                        Acceso restringido para administradores
                    </p>
                </div>
            </div>
        </div>
    );
}
