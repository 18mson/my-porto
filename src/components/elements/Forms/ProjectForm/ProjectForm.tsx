
import { Button } from '@headlessui/react';
import { TextField, TextAreaField } from 'components/ui/Form';
import { FormProvider, UseFormReturn } from 'hooks/useForm';

type FormValues = {
  projectName?: string;
  role?: string;
  customer?: string;
  projectDesc?: string;
  appType?: string;
  framework?: string;
  otherInfo?: string;
};

interface FormProps {
  form: UseFormReturn<FormValues>;
  onSubmit: (values: FormValues) => void;
}

export default function ProjectForm({ form, onSubmit = () => {} }: FormProps) {
  const { handleSubmit } = form;
  
  return (
    <FormProvider {...form}>
      <form className="bg-tertiary p-6 rounded-lg w-full max-w-2xl px-4 shadow-lg" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-2 text-white font-semibold">Project</h3>
        <TextField label="Project Name" name="projectName" rules={{ required: 'Name is required' }} />
        <TextField label="Role" name="role" rules={{ required: 'role is required' }} />
        <TextField label="Customer" name="customer" rules={{ required: 'customer is required' }} />
        <TextAreaField label="Project Description" name="projectDesc" rules={{ required: 'Project description is required' }} />
        <TextField label="App Type" name="appType" rules={{ required: 'App type is required' }} />
        <TextField label="Framework" name="framework" rules={{ required: 'Framework is required' }} />
        <TextField label="Other Info" name="otherInfo" rules={{ required: 'Other info is required' }} />
        <Button className="hidden items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Save changes
        </Button>
      </form>
    </FormProvider>
  );
}