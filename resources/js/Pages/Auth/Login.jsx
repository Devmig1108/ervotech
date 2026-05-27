import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import '../../../css/login.css'; // Make sure to import your new CSS file!

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="login-wrapper">
            <Head title="Log in - Ervotech" />

            <div className="login-header">
                <Link href="/" className="login-logo">
                    Ervotech
                </Link>
            </div>

            <div className="login-card">
                {status && <div className="status-message">{status}</div>}

                <form onSubmit={submit}>
                    
                    {/* Email Address */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="form-control"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoFocus
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="form-control"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>}
                    </div>

                    {/* Remember Me */}
                    <div className="form-group checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span>Remember me</span>
                        </label>
                    </div>

                    {/* Actions */}
                    <div className="form-actions">
                        {canResetPassword && (
                            <Link href={route('password.request')} className="text-link">
                                Forgot your password?
                            </Link>
                        )}

                        <button 
                            type="submit" 
                            className="btn-primary" 
                            disabled={processing}
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}