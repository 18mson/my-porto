import { Button } from '@headlessui/react';
import clsx from 'clsx';

type TabProps = {
  tabs: { name: string; value: string }[];
  activeTab: string;
  onClickTab: (tab: string) => void;
};

export default function Tab({ tabs, activeTab, onClickTab }: TabProps) {

 

  return (
    <div className="h-16 bg-secondary flex justify-center items-center gap-4">
      {tabs.map((tab, index) => (
        <div className="" key={index}>
          <Button className={clsx('items-center gap-2 rounded-lg py-1.5 px-3 text-sm/6 font-semibold text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 h-12', {
            'bg-gray-600': tab.value === activeTab,
          })} onClick={() => onClickTab(tab.value)}>
            {tab.name}
          </Button>
        </div>
      ))}
    </div>
  );
}