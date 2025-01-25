import { useForm as useReactHookForm } from 'react-hook-form';
import type { UseFormProps, RegisterOptions } from 'react-hook-form';

export * from 'react-hook-form';

export const useForm = (props: UseFormProps) => {
  const form = useReactHookForm(props);
  
  const register = (name: string, options?: RegisterOptions) => {
    return {
      ...form.register(name, options),
      message:  form.formState.errors[name]?.message,
      status: form.formState.errors[name]?.message ? 'error' : 'normal',
    };
  };

  return {
    ...form,
    register
  };

};