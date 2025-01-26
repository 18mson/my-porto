
import { Button } from '@headlessui/react';
import { TextField, MonthField } from 'components/ui/Form';
import { FormProvider, UseFormReturn } from 'hooks/useForm';

type FormValues = {
  schoolName?: string;
  degree?: string;
  subject?: string;
  startStudy?: string;
  graduate?: string;
};

interface FormProps {
  form: UseFormReturn<FormValues>;
  onSubmit: (values: FormValues) => void;
}

export default function EducationForm({ form, onSubmit = () => {} }: FormProps) {
  const { handleSubmit } = form;
  
  return (
    <FormProvider {...form}>
      <form className="bg-tertiary p-6 rounded-lg w-full max-w-2xl px-4 shadow-lg" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-2 text-white font-semibold text-end">Education</h3>
        <TextField label="School Name" name="schoolName" rules={{ required: 'School Name is required' }} />
        <TextField label="Degree" name="degree" rules={{ required: 'Degree is required' }} />
        <TextField label="Subject" name="subject" rules={{ required: 'Subject is required' }} />
        <h3 className="text-sm/6 text-white mt-4">Period</h3>
        <div className="grid grid-cols-2 gap-4">
          <MonthField label="From" name="startStudy" rules={{ required: 'From date is required' }} />
          <MonthField label="To" name="graduate" rules={{ required: 'Graduate date is required' }} />
        </div>
        <Button className="hidden items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Save changes
        </Button>
      </form>
    </FormProvider>
  );
}