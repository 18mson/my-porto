import { Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import { Controller, useFormContext } from 'hooks/useForm';
interface TextFieldProps {
  name: string;
  rules?: object;
  className?: string;
  label?: string;
  mandatory?: boolean;
  [key: string]: unknown;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  rules,
  className = '',
  label = '',
  mandatory = false,
  ...inputProps 
}) => {
  const { control } = useFormContext(); 

  return (
    <div className={className}>
      <Controller 
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <Field>
            {label && 
            <Label className="text-sm/6 font-semibold text-white">
              {label}
              {mandatory && <span className="text-red-500">*</span>}
            </Label>}
            <Input 
              {...field}
              {...inputProps}
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />
            {fieldState.error && (
              <span className="text-red-500 text-sm/6">{fieldState.error.message}</span>
            )}
          </Field>
        )}
        rules={rules}
      />
      
    </div>
  );
};

export default TextField;