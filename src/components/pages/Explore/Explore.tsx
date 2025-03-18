import { useState, JSX } from 'react';

import Tab from 'components/elements/Tab';
import { Button } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import EncriptionForm from 'components/elements/Forms/EncriptionForm';

type FormValues = {
  textArea?: string;
  text?: string;
};

function Projects() {
  const [activeTab, setActiveTab] = useState('project_1');

  const { ref: courseRef } = useInView({
    threshold: 0.7,
  });

        
  const form = useForm<FormValues>({ mode: 'onChange' });

  const { watch } = form;
  const values = watch();

  const listTab = [
    {
      name: 'Company',
      value: 'company-section'
    }, {
      name: 'Project',
      value: 'project-section'
    },
    {
      name: 'Education',
      value: 'education-section'
    },
    {
      name: 'Course and Training',
      value: 'course-section'
    },
  ];

  const handleSelectTab = (value: string) => {
    setActiveTab(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  
  // const maxLen: number = words.length;
  const result: string[][] = [[''], [''], ['']];
  
  const length = values.textArea?.length || 0;
  let totalCol = 0;
  let totalRow = 0;
  
  // calculate row and col
  while (totalRow * totalCol < length) {
    totalCol++;
    while (totalRow * totalCol < length && totalRow < totalCol) {
      totalRow++;
    }
  }
  let col = 0;
  let row = 0;
  // fill the result
  for (let i = 0; i < length; i++) {
    result[row][col] = values.textArea?.charAt(i) || '_';

    
    if (row < totalRow - 1) {
      row++;
    } else if (col < totalCol - 1) {
      col++;
    }
  }



 console.log(result, col + '+' + row);

  
    
  

  const renderSection = (
    id: string,
    formComponent: JSX.Element,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div className="grid grid-cols-12 gap-1 w-full" id={id} ref={ref}>
        <div className={clsx('col-span-6 col-start-4 flex justify-center transition-opacity', {
          'opacity-100 z-10': activeTab === id,
          'opacity-80 z-0': activeTab !== id,
        })}>
          {formComponent}
        </div>
        <div className="whitespace-pre-line">
          /
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-screen">
      <div className="bg-secondary flex justify-center items-center sticky top-0 z-20">
        <Tab activeTab={activeTab} onClickTab={handleSelectTab} tabs={listTab} />
      </div>
      <div className="flex flex-col items-center my-6 gap-6 z-0 h-full">
        {renderSection('course-section', <EncriptionForm form={form} onSubmit={() => {}} />, courseRef)}
      </div>
      <div className="sticky bottom-0 w-full flex justify-end items-center p-4 bg-secondary z-10">
        <Button className="items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Save changes
        </Button>
      </div>
    </div>
  );
}

export default Projects;