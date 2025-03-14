import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

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
        <GuestLayout>
            <Head title="Log in" />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

                    {status && (
                        <div className="mb-4 text-sm text-green-600 text-center">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <InputLabel htmlFor="email" value="Email Address" className="font-semibold" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="w-full mt-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            {errors.email && <InputError message={errors.email} className="mt-2 text-red-600" />}
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" className="font-semibold" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="w-full mt-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            {errors.password && <InputError message={errors.password} className="mt-2 text-red-600" />}
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-indigo-600 hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        <div className="mt-4">
                            <PrimaryButton className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" disabled={processing}>
                                {processing ? 'Logging in...' : 'Log in'}
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Need an account?{' '}
                        <Link href="/register" className="text-indigo-600 hover:underline">
                            Sign up here
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
