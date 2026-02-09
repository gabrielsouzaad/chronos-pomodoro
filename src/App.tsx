import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2= 'String' >Olá mundo 1</Heading> 
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam qui
        temporibus voluptate quae eos neque reiciendis modi harum dignissimos
        hic et adipisci magni quidem, labore, eaque aperiam vel provident
        exercitationem?
      </p>
    </>
  );
}
