import MultiInputForm from "./MultiInputForm";
import SimpleForm from "./SimpleForm";
import AdvancedForm from './AdvancedForm';
import UncontrolledForm from "./UncontrolledForm";
import BasicValidationForm from "./BasicValidationForm";

const App = () => {
  return (
    <div className="container">
      <div className="row">

        <SimpleForm />

        <MultiInputForm />

        <AdvancedForm />

        <UncontrolledForm />

        <BasicValidationForm />
    
      </div>
    </div>
  );
};

export default App;
