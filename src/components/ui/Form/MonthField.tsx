import { Field, Label } from '@headlessui/react';
import { Controller, useFormContext } from 'hooks/useForm';
import DatePicker from 'react-datepicker';

// assets
import 'react-datepicker/dist/react-datepicker.css';
import './style.module.css';


interface TextFieldProps {
  name: string;
  rules?: object;
  className?: string;
  label?: string;
  mandatory?: boolean;
  [key: string]: unknown;
}

const MonthField: React.FC<TextFieldProps> = ({
  name,
  rules,
  className = '',
  label = '',
  mandatory = false,
}) => {
  const { control } = useFormContext(); 
  const renderMonthContent = (month: number, shortMonth: string, longMonth: string, day: Date) => {
    const fullYear = new Date(day).getFullYear();
    const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;

    return <span title={tooltipText}>{shortMonth}</span>;
  };

  return (
    <div className={className}>
      <Controller 
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <Field className="flex flex-col">
            {label && 
            <Label className="text-sm/6 font-semibold text-white mb-1">
              {label}
              {mandatory && <span className="text-red-500">*</span>}
            </Label>}
            <DatePicker
              className="mb-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
              dateFormat="MMMM / yyyy"
              onChange={field.onChange}
              renderMonthContent={renderMonthContent}
              selected={field.value}
              showMonthYearPicker
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

export default MonthField;