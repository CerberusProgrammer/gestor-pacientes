import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-4xl text-center ">Veterinaria</h1>
      </div>

      <div className="mt-12 md:flex">
        <PatientForm />
        <PatientList />
      </div>
    </>
  );
}

export default App;
