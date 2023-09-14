import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
  return (
    <div className='flex items-center'>
      <CheckCircleIcon className="h-5 w-5 text-orange-600"/> 
      <span className='p-1'>{feature}</span>
    </div>
  );
};

export default Feature;