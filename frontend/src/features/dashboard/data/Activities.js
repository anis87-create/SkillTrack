import Skill from '../../../assets/competence-react.png'; 
import Target from '../../../assets/objectif-cree.png';
import Note from '../../../assets/note-ajoutee.png';
import Task from '../../../assets/tache-terminee.png';

export const ActivitiesData = [
    {
        id: 0,
        description:'Compétence React mise à jour',
        icon: Skill,
        date:'Il y a 2 jours'
    },
    {   
        id: 1,
        description:'Objectif "Comprendre Context API" Créé',
        icon: Target,
        date:'Il y a 5 jours'
    },
    {
        id: 2,
        description: 'Note ajouté sur TypeScript',
        icon: Note,
        date:'Il y a 6 jours'
    },
    {
        id: 3,
        description: 'Tâche "Lire la doc Next js" terminée',
        icon: Task,
        date:'Il y a 1 semaine'
    }
];