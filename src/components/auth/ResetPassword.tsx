import { useState } from 'react';
import Form from '../ui/Form/Form';
import Input from '../ui/Input/Input';

function ResetPassword() {
  const [resetEmail, setResetEmail] = useState<string>('');
  return (
    <Form>
      <h1 className="text-2xl font-semibold">{'Admin Recovery Page'}</h1>
      <Input
        id={'Send Recovery Email'}
        label={'Send Recovery Email'}
        type={'text'}
        value={resetEmail}
        onChange={(value: string) => setResetEmail(value)}
      />
    </Form>
  );
}

export default ResetPassword;
