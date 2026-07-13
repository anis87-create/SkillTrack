import React, { useCallback, useMemo, useState } from 'react'
import Stats from '../features/goals/layouts/Stats'
import MainDataContainer from '../features/goals/layouts/MainDataContainer'
import CloseIcon from "@mui/icons-material/Close";
import { Typography, IconButton, Modal, Button, Box, TextField, TextareaAutosize } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from "uuid";
import Swal from 'sweetalert2';
import target  from '../assets/objectif-cree.png';

const GoalsPage = ({ goals, setGoals }) => {

  const [open, setOpen] = useState(false);
  const date = dayjs();
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [title, setTitle] = useState();
  const [description, setDescription] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const {data:goalsData} = useGetGoalsQuery();
  console.log(goalsData);
  
  
  
  const filteredTargets = useMemo(() => {
      const lowerCaseQuery = searchValue.toLowerCase().trim();
      if(!lowerCaseQuery) {        
        return goals;
      }
      return goals.filter(target => target.title.toLowerCase().includes(lowerCaseQuery));
  }, [searchValue, goals]);

  
  
  const addTarget = () => {
    setGoals([
      ...goals, 
      {
        id: uuidv4(),
        title,
        description,
        date:  selectedDate.format('YYYY-MM-DD')
      }
     ]);
     setOpen(false);
     Swal.fire({
    html: `
      <div class="flex flex-col items-center gap-3 pt-2">
        <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 class="text-[18px] font-semibold text-gray-900 leading-snug">
          Objectif ajouté avec succès&nbsp;!
        </h2>
        <p class="text-sm text-gray-500 leading-relaxed">
          Ton objectif a été ajouté à la liste.
        </p>
      </div>
    `,
    showConfirmButton: true,
    confirmButtonText: "Voir la liste",
    showCloseButton: true,
    width: 400,
    padding: "2rem",
    backdrop: "rgba(0,0,0,0.45)",
    customClass: {
      popup:         "!rounded-2xl !shadow-xl",
      confirmButton: "!bg-indigo-600 hover:!bg-indigo-700 !text-white !text-sm !font-semibold !rounded-xl !px-6 !py-2.5 !w-full !transition-colors",
      closeButton:   "!text-gray-400 hover:!text-gray-600 !text-xl",
      actions:       "!w-full !px-2",
    },
    buttonsStyling: false,
  }).then((result) => {
  
  });
  };

  const deleteTarget = useCallback((objectif) => {

     Swal.fire({
      html: `
        <div class="flex flex-col items-start gap-4 pt-1">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" stroke-width="2.2"
                  stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h2 class="text-[17px] font-semibold text-gray-900 leading-snug text-left">
              Supprimer l'objectif
            </h2>
          </div>
  
          <p class="text-sm text-gray-500 leading-relaxed text-left">
            Es-tu sûr de vouloir supprimer cet objectif ?<br/>
            <span class="text-gray-400">Cette action est irréversible.</span>
          </p>
  
          <div class="w-full flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
            <div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
              <img src=${target} alt=''/>
            </div>
            <div class="text-left">
              <p class="text-sm font-semibold text-gray-800">${objectif?.title ?? "Objectif"}</p>
              <p class="text-xs text-gray-400">${objectif?.date ?? ""}</p>
            </div>
          </div>
        </div>
      `,
      showConfirmButton: true,
      confirmButtonText: "Supprimer",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      showCloseButton: true,
      width: 380,
      padding: "1.75rem",
      backdrop: "rgba(0,0,0,0.45)",
      reverseButtons: true,
      customClass: {
        popup:          "!rounded-2xl !shadow-xl",
        confirmButton:  "!bg-red-500 hover:!bg-red-600 !text-white !text-sm !font-semibold !rounded-xl !px-6 !py-2.5 !transition-colors",
        cancelButton:   "!bg-white !border !border-gray-200 !text-gray-700 !text-sm !font-medium !rounded-xl !px-6 !py-2.5 !transition-colors hover:!bg-gray-50",
        closeButton:    "!text-gray-400 hover:!text-gray-600 !text-xl",
        actions:        "!gap-3 !mt-2",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
         const goalsFiltered = goals.filter(target => target.id !== objectif.id);
         setGoals(goalsFiltered);
      }
    });
  }, [goals]);

  const editTarget = useCallback((id, newItem, selectedDate) => {
     setGoals(prevGoals => prevGoals.map(item => (
      item.id === id ? {
        ...item,
        ...newItem,
        date: selectedDate ? selectedDate.format("YYYY-MM-DD") : (newItem.date ?? item.date)
      } : item
     )));
  }, []);

    
  
  return (
    <div className='p-4'>
       <div className='flex flex-col justify-between gap-4 md:flex-row md:items-center mb-2'>
            <div className='flex flex-col'>
              <span className='text-sm font-medium text-gray-500 whitespace-nowrap'>Pages / Objectifs</span>
              <div className='mt-2'>
                <h2 className='text-[30px] font-semibold mb-1.5'>Mes objectifs</h2>
                <p className='text-[14px] text-gray-500'>Organise tes priorités d'apprentissage</p>
              </div>
            </div>
            <button className='bg-primary text-white rounded-lg px-4 h-10 cursor-pointer' onClick={() => setOpen(true)}>+ Ajouter un objectif</button>
            {
              <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                <Box
                  className="
                    absolute top-1/2 left-1/2
                    w-107.5
                    -translate-x-1/2 -translate-y-1/2
                    bg-white rounded-xl shadow-2xl
                    p-6
                  "
                  >
                  <div className="flex items-center justify-between mb-4">
                    <Typography variant="h6">
                      Ajouter un objectif
                    </Typography>
                    <IconButton onClick={() => setOpen(false)}>
                     <CloseIcon />
                   </IconButton>
                  </div>
                  <div className="flex flex-col">
                    <TextField
                      fullWidth
                      label="Titre"
                      placeholder="Ex : Apprendre TypeScript"
                      variant="outlined"
                      size="small"
                      onChange={(e) => {
                        setTitle(e.target.value)
                      }}
                   />
                  </div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date cible"
                      value={selectedDate}
                      onChange={(newDate) => setSelectedDate(newDate)}
                      sx={{marginTop:'14px'}}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          size: "small",
                          variant: "outlined",
                        },
                      }}
                    />
                  </LocalizationProvider>
                  <div className="flex flex-col mt-4">
                     <label className='text-sm'>Description (optionelle)</label>
                     <TextareaAutosize
                        minRows={4}
                        placeholder="Décris ton objectif..."
                        className="
                          w-full border border-gray-300 rounded-md
                          p-3 text-sm outline-none
                          focus:border-primary
                        "
                        onChange={(e) => setDescription(e.target.value)}
                     />
                  </div>
                  <div className="flex justify-end gap-3 mt-6">
                    <Button onClick={() => setOpen(false)}
                    sx={{color:'#000'}}  
                    >
                      Annuler
                    </Button>

                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#4d38f8",
                        textTransform: "none",
                      }}
                      onClick={addTarget}
                    >
                      Ajouter
                    </Button>
                  </div>
                </Box>
              </Modal>
            }
       </div>
       <Stats 
       />
       <MainDataContainer 
          targets={searchValue.length>0 ? filteredTargets : goals}
          deleteTarget={deleteTarget} 
          editTarget={editTarget}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
       />
    </div>
  )
}

export default GoalsPage
