import { useGetNotesById } from '../../context/NotesContext';
import NotesDetailsModalPresentation from './Presentation';

export default function NotesDetailsModal({ closeModal }) {
  const note = useGetNotesById('1701794712');

  return <NotesDetailsModalPresentation closeModal={closeModal} />;
}
