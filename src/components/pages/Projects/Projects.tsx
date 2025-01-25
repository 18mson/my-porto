import { useEffect, useState } from 'react';

import Tab from 'components/elements/Tab';
import ProjectForm from 'components/elements/Forms/ProjectForm';
import CompanyForm from 'components/elements/Forms/CompanyForm';
import { Button } from '@headlessui/react';
import RadioGroupComponent from 'components/elements/RadioGroup/RadioGroup';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

type FormValues = {
  companyName?: string;
  currentRole?: string;
  startDate?: string;
  endDate?: string;
  appType?: string;
  customer?: string;
  framework?: string;
  otherInfo?: string;
  projectDesc?: string;
  projectName?: string;
  role?: string;
};

function Projects() {
  const [activeTab, setActiveTab] = useState('project_1');
  const [CompanyActive, setCompanyActive] = useState({
    companyName: 'Google',
    currentRole: 'Frontend Developer',
    endDate: '2021-12',
    label: 'Google',
    startDate: '2021-01',
    value: 'company1',
  });
  const [ProjectActive, setProjectActive] = useState({
    appType: 'Web App',
    customer: 'Google',
    framework: 'React',
    label: 'Project 1',
    otherInfo: 'Additional info for project 1',
    projectDesc: 'This is a description for project 1',
    projectName: 'Project 1',
    role: 'Frontend Developer',
    value: 'project1',
  });

  
  const { ref: companyRef, inView: companyInView } = useInView({
    threshold: 0.8,
  });

  const { ref: projectRef, inView: projectInView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (companyInView) {
      setActiveTab('company-section');
    } else if (projectInView) {
      setActiveTab('project-section');
    }
  }, [companyInView, projectInView]);

        
  const form = useForm({
    mode: 'onChange',
  }) as unknown as UseFormReturn<FormValues>;

  const { setValue } = form;

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

  const dataCompany = [
    {
      companyName: 'Google',
      currentRole: 'Frontend Developer',
      endDate: '2025-03',
      label: 'Google',
      startDate: '2024-04',
      value: 'company1',
    },
    {
      companyName: 'Facebook',
      currentRole: 'Frontend Developer',
      endDate: '2023-03',
      label: 'Facebook',
      startDate: '2022-01',
      value: 'company2',
    }
  ];

  const dataProjects = [
    {
      appType: 'Web App',
      customer: 'Google',
      framework: 'React',
      label: 'Project 1',
      otherInfo: 'Additional info for project 1',
      projectDesc: 'This is a description for project 1',
      projectName: 'Project 1',
      role: 'Frontend Developer',
      value: 'project1',
    },
    {
      appType: 'Mobile App',
      customer: 'Facebook',
      framework: 'React Native',
      label: 'Project 2',
      otherInfo: 'Additional info for project 2',
      projectDesc: 'This is a description for project 2',
      projectName: 'Project 2',
      role: 'Frontend Developer',
      value: 'project2',
    }
  ];
  const handleSetCompany = (value: string) => {
    const company = dataCompany.find((item) => item.value === value);
    if (company) {
      setCompanyActive(company);
      setValue('companyName', company.companyName);
      setValue('currentRole', company.currentRole);
      setValue('startDate', company.startDate);
      setValue('endDate', company.endDate);
    }
  };

  const handleSetProject = (value: string) => {
    const project = dataProjects.find((item) => item.value === value);
    if (project) {
      setProjectActive(project);
      setValue('appType', project.appType);
      setValue('customer', project.customer);
      setValue('framework', project.framework);
      setValue('otherInfo', project.otherInfo);
      setValue('projectDesc', project.projectDesc);
      setValue('projectName', project.projectName);
      setValue('role', project.role);
    }
  };
  const handleSelectTab = (value: string) => {
    setActiveTab(value);
    const element = document.getElementById(value);
    if (element) {
      if (value === 'company-section') {
        window.scrollTo({ behavior: 'smooth', top: 0 });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };



  const renderCompanySection = () => {
    return (
      <div className="grid grid-cols-12 gap-1 w-full" id="company-section" ref={companyRef}>
        <div className={clsx('col-span-6 col-start-4 flex justify-center z-10 transition-opacity', {
          'opacity-100': activeTab === 'company-section',
          'opacity-80': activeTab !== 'company-section',
        })}>
          <CompanyForm form={form} onSubmit={() => {}} />
        </div>
        <div className={clsx(`flex pl-1 transition-all duration-400 z-0 ${activeTab === 'company-section' ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'}`)}>
          <RadioGroupComponent 
            data={dataCompany} 
            onChange={handleSetCompany} 
            value={CompanyActive.value}  
          />
        </div>
      </div>
    );
  };

  const renderProjectSection = () => {
    return (
      <div className="grid grid-cols-12 gap-1 w-full" id="project-section" ref={projectRef}>
        <div className={clsx('col-span-6 col-start-4 flex justify-center z-10 transition-opacity', {
          'opacity-100': activeTab === 'project-section',
          'opacity-80': activeTab !== 'project-section',
        })}>
          <ProjectForm form={form} onSubmit={() => {}} />
        </div>
        <div className={`flex pl-1 transition-all duration-400 z-0 ${activeTab === 'project-section' ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'}`}>
          <RadioGroupComponent 
            data={dataProjects} 
            onChange={handleSetProject} 
            value={ProjectActive.value}  
          />
        </div>
      </div>
    );
  };

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col">
      <div className="h-20 bg-secondary flex justify-center items-center sticky top-0 z-10">
        <Tab activeTab={activeTab} onClickTab={handleSelectTab} tabs={listTab} />
      </div>
      <div className="flex flex-col justify-center items-center my-6 gap-4 z-0">
        {renderCompanySection()}
        {renderProjectSection()}
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