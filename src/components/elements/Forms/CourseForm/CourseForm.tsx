
import { Button } from '@headlessui/react';
import { TextField, MonthField, TextAreaField } from 'components/ui/Form';
import { FormProvider, UseFormReturn } from 'hooks/useForm';

type FormValues = {
  certificate?: boolean;
  courseDate?: string;
  courseDesc?: string;
  courseDuration?: string;
  courseInstitution?: string;
  courseName?: string;
  place?: string;
};

interface FormProps {
  form: UseFormReturn<FormValues>;
  onSubmit: (values: FormValues) => void;
}

export default function CourseForm({ form, onSubmit = () => {} }: FormProps) {
  const { handleSubmit } = form;
  
  return (
    <FormProvider {...form}>
      <form className="bg-tertiary p-6 rounded-lg w-full max-w-2xl px-4 shadow-lg" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-2 text-white font-semibold text-end">Course & Training</h3>
        <TextField label="Course Name" name="courseName" rules={{ required: 'Course Name is required' }} />
        <TextField label="Course Institution" name="courseInstitution" rules={{ required: 'Course Institution is required' }} />
        <TextField label="Place" name="place" rules={{ required: 'Place is required' }} />
        <h3 className="text-sm/6 text-white mt-4">Period</h3>
        <div className="grid grid-cols-2 gap-4">
          <MonthField label="Course Date" name="courseDate" rules={{ required: 'Date is required' }} />
          <TextField label="Course Duration" name="courseDuration" rules={{ required: 'Duration is required' }} />
        </div>
        <TextAreaField label="Course Description" name="courseDesc" rules={{ required: 'Course Description is required' }} />
        <TextField label="Certificate" name="certificate" rules={{ required: 'Certificate is required' }} />
        <Button className="hidden items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Save changes
        </Button>
      </form>
    </FormProvider>
  );
}