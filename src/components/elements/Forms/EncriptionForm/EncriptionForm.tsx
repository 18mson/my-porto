
import { Button } from '@headlessui/react';
import { TextAreaField } from 'components/ui/Form';
import { FormProvider, UseFormReturn } from 'hooks/useForm';

type FormValues = {
    textArea?: string;
    text?: string;
};

interface FormProps {
  form: UseFormReturn<FormValues>;
  onSubmit: (values: FormValues) => void;
}

export default function EncriptionForm({ form, onSubmit = () => {} }: FormProps) {
  const { handleSubmit } = form;
  
  return (
    <FormProvider {...form}>
      <form className="bg-tertiary p-6 rounded-lg w-full max-w-2xl px-4 shadow-lg" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-2 text-white font-semibold">Text to Encript</h3>
        <TextAreaField label="Text Area" name="textArea" rules={{ required: 'Course Description is required' }} />
        <Button className="hidden items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Save changes
        </Button>
      </form>
    </FormProvider>
  );
}