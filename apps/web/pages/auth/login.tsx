import { Button, ButtonType, FormGroup, Input, InputType } from '@nvoice/ui';
import Head from 'next/head';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-row h-screen overflow-hidden">
        <div className="bg-red-200 text-red-500 w-3/12">
          <div className="flex flex-col justify-between h-full"></div>
        </div>
        <div className="flex flex-1  justify-center items-center">
          <div className="w-4/12">
            <h2 className="mb-6 text-slate-900">Sign in to Nvoiced</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('submitted');
              }}
              action="/"
            >
              <FormGroup>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type={InputType.email}
                  placeholder="Email"
                  id={'email'}
                  label={'Email'}
                  required={true}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? InputType.text : InputType.password}
                  placeholder="Password"
                  id={'password'}
                  label={'Password'}
                  error={null}
                />
                <div className="block clear-right py-1">
                  <button
                    className="text-xs text-blue-700 underline"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    {showPassword ? 'Hide Password' : 'Show Password'}
                  </button>
                </div>
              </FormGroup>
              <FormGroup>
                <Button type={ButtonType.submit}>Login</Button>
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
