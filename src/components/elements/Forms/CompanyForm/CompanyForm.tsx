
import { Button } from '@headlessui/react';
import { MonthField, TextField } from 'components/ui/Form';
import { FormProvider, UseFormReturn } from 'hooks/useForm';

type FormValues = {
  companyName?: string;
  currentRole?: string;
  startDate?: string;
  endDate?: string;
};

interface FormProps {
  form: UseFormReturn<FormValues>;
  onSubmit: (values: FormValues) => void;
}

export default function CompanyForm({ form, onSubmit = () => {} }: FormProps) {
  const { handleSubmit } = form;
  
  return (
    <FormProvider {...form}>
      <form className="bg-tertiary p-6 rounded-lg w-full max-w-2xl px-4 shadow-lg" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-2 text-white font-semibold text-end">Company</h3>
        <TextField label="Company Name" name="companyName" rules={{ required: 'Name is required' }} />
        <h3 className="text-sm/6 text-white mt-4">Period</h3>
        <div className="grid grid-cols-2 gap-4">
          <MonthField label="Start Date" name="startDate" rules={{ required: 'Start date is required' }} />
          <MonthField label="End Date" name="endDate" rules={{ required: 'End date is required' }} />
        </div>
        <TextField label="Current Role / Position" name="currentRole" rules={{ required: 'role is required' }} />
        <Button className="hidden items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Save changes
        </Button>
      </form>
    </FormProvider>
  );
}