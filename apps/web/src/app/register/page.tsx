'use client';

import { FormEvent, useState } from 'react';

import { registerUser } from '../auth/client';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    setMessage('');

    try {
      const result = await registerUser({ name, email, password });
      setMessage(`Account created for ${result.user.email}.`);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Registration failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#f8fafc',
        color: '#0f172a',
        padding: '32px 20px 80px',
      }}
    >
      <div
        style={{
          maxWidth: 460,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 24,
          padding: 28,
          boxShadow: '0 10px 30px rgba(15,23,42,0.06)',
        }}
      >
        <h1 style={{ marginTop: 0 }}>Create account</h1>
        <p style={{ color: '#64748b' }}>Join to save your listening history and bookmarks.</p>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            required
            style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid #cbd5e1' }}
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            type="email"
            required
            style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid #cbd5e1' }}
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            type="password"
            required
            style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid #cbd5e1' }}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '12px 14px',
              borderRadius: 10,
              border: 0,
              background: '#111827',
              color: '#fff',
              cursor: isSubmitting ? 'wait' : 'pointer',
            }}
          >
            {isSubmitting ? 'Creating account…' : 'Create account'}
          </button>
        </form>
        {message ? <p style={{ color: '#0f766e', marginTop: 12 }}>{message}</p> : null}
        {error ? <p style={{ color: '#b91c1c', marginTop: 12 }}>{error}</p> : null}
      </div>
    </main>
  );
}
