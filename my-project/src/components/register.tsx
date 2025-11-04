"use client";

import React, { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  submit?: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
    
    if (errors[id as keyof Errors]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [id]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Cadastro realizado com sucesso');
    } catch (error) {
      setErrors({ submit: 'Erro ao fazer cadastro. Tente novamente.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-amber-100 flex flex-col items-center justify-center px-4 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Meu VLT</h1>
        <p className="text-gray-600 text-base">Crie sua conta para começar</p>
      </div>

      {/* Divisor */}
      <div className="w-full max-w-sm border-t border-gray-200 mb-8"></div>

      {/* Form */}
      <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700"
          >
            Nome completo
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
            className="w-full px-3 py-3 border-b border-gray-300 text-base focus:outline-none focus:border-blue-500 bg-transparent"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-200"></div>

        {/* Email Field */}
        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="customail@example.com"
            required
            className="w-full px-3 py-3 border-b border-gray-300 text-base focus:outline-none focus:border-blue-500 bg-transparent"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-200"></div>

        {/* Password Field */}
        <div className="space-y-2">
          <label 
            htmlFor="password" 
            className="block text-sm font-medium text-gray-700"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Sua senha"
            required
            className="w-full px-3 py-3 border-b border-gray-300 text-base focus:outline-none focus:border-blue-500 bg-transparent"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-200"></div>

        {/* Confirm Password Field */}
        <div className="space-y-2">
          <label 
            htmlFor="confirmPassword" 
            className="block text-sm font-medium text-gray-700"
          >
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirme sua senha"
            required
            className="w-full px-3 py-3 border-b border-gray-300 text-base focus:outline-none focus:border-blue-500 bg-transparent"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Error Message */}
        {errors.submit && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
            {errors.submit}
          </div>
        )}

        {/* Register Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 px-4 bg-gray-900 text-white text-base font-semibold rounded-lg border-none cursor-pointer hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Criando conta...
            </div>
          ) : (
            'Criar Conta'
          )}
        </button>
      </form>

      {/* Login Link */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          Já tem uma conta?{' '}
          <a 
            href="/login" 
            onClick={handleLogin}
            className="text-gray-900 font-semibold hover:text-gray-700 transition-colors"
          >
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;


