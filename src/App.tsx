import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
        <Heading>Olá mundo 1 
        <button>
         <TimerIcon /> 
        </button>
      
        </Heading> 
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam qui
        temporibus voluptate quae eos neque reiciendis modi harum dignissimos
        hic et adipisci magni quidem, labore, eaque aperiam vel provident
        exercitationem?
      </p>
    </>
  );
}
