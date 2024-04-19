import { toast } from "react-toastify";
import { usePatientStore } from "../store/store";
import { Patient } from "../types/Patient";

type PatientDetailProps = {
  patient: Patient;
};

export default function PatientDetail({ patient }: PatientDetailProps) {
  const { getPatientById, deletePatient } = usePatientStore();

  const handleDelete = () => {
    toast.error("Paciente eliminado");
    deletePatient(patient.id);
  };

  return (
    <div className="rounded-lg mx-5 my-10 py-10 px-10 bg-white shadow-md gap-3">
      <p>ID: {patient.id}</p>
      <p>caretaker: {patient.caretaker}</p>
      <p>name: {patient.name}</p>
      <p>email: {patient.email}</p>
      <p>symptoms: {patient.symptoms}</p>

      <div className="flex justify-between gap-3 mt-10">
        <button
          onClick={() => getPatientById(patient.id)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          onClick={() => handleDelete()}
          className="py-2 px-10 bg-indigo-100 hover:bg-indigo-200 text-indigo-600 font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
