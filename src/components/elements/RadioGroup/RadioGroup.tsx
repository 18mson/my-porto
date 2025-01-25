import { Radio, RadioGroup } from '@headlessui/react';

interface RadioGroupProps {
  onChange: (value: string) => void;
  value: string;
  data: Array<{ value: string; label: string }>;
}

function RadioGroupComponent({
  onChange,
  value,
  data,
}: RadioGroupProps) {

  return (
    <div>
      <RadioGroup onChange={onChange} value={value}>
        <div className="space-y-2">
          {data.map((item) => (
            <Radio key={item.value} value={item.value}>
              {({ checked }) => (
                <div className={`relative rounded-lg shadow-md px-2 py-1 mb-2 cursor-pointer flex focus:outline-none hover:ring ring-tertiary/50 ${checked ? 'bg-tertiary' : 'bg-white'}`}>
                  <span className={`font-medium ${checked ? 'text-white' : 'text-secondary'}`}>
                    {item.label}
                  </span>
                </div>
              )}
            </Radio>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default RadioGroupComponent;