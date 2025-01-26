import { useEffect, useState, JSX } from 'react';

import Tab from 'components/elements/Tab';
import ProjectForm from 'components/elements/Forms/ProjectForm';
import CompanyForm from 'components/elements/Forms/CompanyForm';
import { Button } from '@headlessui/react';
import RadioGroupComponent from 'components/elements/RadioGroup/RadioGroup';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import EducationForm from 'components/elements/Forms/EducationForm';
import { dataCompany, dataEducation, dataProjects, dataCourse } from 'constants/sampleData';
import CourseForm from 'components/elements/Forms/CourseForm';

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
  schoolName?: string;
  degree?: string;
  subject?: string;
  startStudy?: string;
  graduate?: string;
  certificate?: boolean;
  courseDate?: string;
  courseDesc?: string;
  courseDuration?: string;
  courseInstitution?: string;
  courseName?: string;
  place?: string;
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
  const [EducationActive, setEducationActive] = useState({
    degree: 'Frontend Developer',
    graduate: '2021-12',
    label: 'University of Google',
    schoolName: 'Google',
    startStudy: '2021-01',
    subject: 'React',
    value: 'education1',
  });
  const [CourseActive, setCourseActive] = useState({
    certificate: true,
    courseDate: '2021-01 - 2021-03',
    courseDesc: 'React course description',
    courseDuration: '3 months',
    courseInstitution: 'University of React',
    courseName: 'React',
    label: 'React',
    place: 'Online',
    value: 'course1',
  });

  
  const { ref: companyRef, inView: companyInView } = useInView({
    threshold: 0.8,
  });

  const { ref: projectRef, inView: projectInView } = useInView({
    threshold: 0.7,
  });

  const { ref: educationRef, inView: educationInView } = useInView({
    threshold: 0.7,
  });

  const { ref: courseRef, inView: courseInView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (companyInView) {
      setActiveTab('company-section');
    } if (projectInView) {
      setActiveTab('project-section');
    } if (educationInView) {
      setActiveTab('education-section');
    } if (courseInView) {
      setActiveTab('course-section');
    }
  }, [companyInView, projectInView, educationInView, courseInView]);

        
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

  const handleSetData = <T extends { value: string; [key: string]: string | boolean }>(
    data: T[],
    setActive: React.Dispatch<React.SetStateAction<T>>,
    fields: string[],
    value: string
  ) => {
    const item = data.find((item) => item.value === value);
    if (item) {
      setActive(item);
      fields.forEach((field) => setValue(field as keyof FormValues, item[field]));
    }
  };

  const handleSetCompany = (value: string) => {
    handleSetData(dataCompany, setCompanyActive, ['companyName', 'currentRole', 'startDate', 'endDate'], value);
  };

  const handleSetProject = (value: string) => {
    handleSetData(dataProjects, setProjectActive, ['appType', 'customer', 'framework', 'otherInfo', 'projectDesc', 'projectName', 'role'], value);
  };

  const handleSetEducation = (value: string) => {
    handleSetData(dataEducation, setEducationActive, ['degree', 'graduate', 'schoolName', 'startStudy', 'subject'], value);
  };

  const handleSetCourse = (value: string) => {
    handleSetData(dataCourse, setCourseActive, ['certificate', 'courseDate', 'courseName'], value);
  };

  const handleSelectTab = (value: string) => {
    setActiveTab(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const renderSection = (
    id: string,
    formComponent: JSX.Element,
    data: { value: string; label: string }[],
    activeValue: string,
    handleChange: (value: string) => void,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div className="grid grid-cols-12 gap-1 w-full" id={id} ref={ref}>
        <div className={clsx('col-span-6 col-start-4 flex justify-center z-10 transition-opacity', {
          'opacity-100': activeTab === id,
          'opacity-80': activeTab !== id,
        })}>
          {formComponent}
        </div>
        <div className={`flex col-span-2 pl-1 transition-all duration-400 z-0 ${activeTab === id ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'}`}>
          <RadioGroupComponent 
            data={data} 
            onChange={handleChange} 
            value={activeValue}  
          />
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="bg-secondary flex justify-center items-center sticky top-0 z-20">
        <Tab activeTab={activeTab} onClickTab={handleSelectTab} tabs={listTab} />
      </div>
      <div className="flex flex-col justify-center items-center my-6 gap-6 z-0">
        {renderSection('company-section', <CompanyForm form={form} onSubmit={() => {}} />, dataCompany, CompanyActive.value, handleSetCompany, companyRef)}
        {renderSection('project-section', <ProjectForm form={form} onSubmit={() => {}} />, dataProjects, ProjectActive.value, handleSetProject, projectRef)}
        {renderSection('education-section', <EducationForm form={form} onSubmit={() => {}} />, dataEducation, EducationActive.value, handleSetEducation, educationRef)}
        {renderSection('course-section', <CourseForm form={form} onSubmit={() => {}} />, dataCourse, CourseActive.value, handleSetCourse, courseRef)}
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