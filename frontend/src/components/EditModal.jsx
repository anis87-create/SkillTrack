import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { Typography, IconButton, Modal, Button, Box, TextField, TextareaAutosize } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import dayjs from 'dayjs';
const EditModal = ({ item, onClose, editTarget, open, setOpen }) => {
const [selectedDate, setSelectedDate] = useState(dayjs(item.date));


const [title, setTitle] = useState(item.title);
const [description, setDescription] = useState(item.description);
  return (
    <Modal
      open={open}
      onClose={onClose}
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
          <Typography variant="h6">Modifier un objectif</Typography>
          <IconButton onClick={onClose}>
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
            value={title}
          />
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date cible"
            onChange={(newDate) => {
                setSelectedDate(newDate);
            }
                
            }
            value={selectedDate}
            sx={{ marginTop: '14px' }}
            slotProps={{
              textField: {
                fullWidth: true,
                size: 'small',
                variant: 'outlined',
              },
            }}
          />
        </LocalizationProvider>

        <div className="flex flex-col mt-4">
          <label className="text-sm">Description (optionelle)</label>
          <TextareaAutosize
            minRows={4}
            placeholder="Décris ton objectif..."
            className="
              w-full border border-gray-300 rounded-md
              p-3 text-sm outline-none
              focus:border-primary
            "
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button
            onClick={onClose}
            sx={{ color: '#000' }}
          >
            Annuler
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4d38f8',
              textTransform: 'none',
            }}
            onClick={() =>{editTarget(item.id, {id: item.id,
                 title,
                 description
            },
            selectedDate
          )
         setOpen(false);
        }
        }

          >
            Modifier
          </Button>
        </div>
      </Box>
    </Modal>
  )
}

export default EditModal
