import { usePatientStore } from "../store/store";

export default function PatientList() {
  const patients = usePatientStore((state) => state.patients);

  return <div>PatientList</div>;
}
