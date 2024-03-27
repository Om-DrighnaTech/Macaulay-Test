import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Imagesc from '../../assests/images/about/contact1.png';
import F1 from '../f1/f1';

const Enquiry = ({ backgroundImage }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        handleClose(); // Close the modal after form submission
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
        <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', backgroundImage: `url(${Imagesc})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5" component="div" sx={{ color: 'white', fontFamily: '"Roboto", sans-serif', fontSize: '27px', fontWeight: 800, letterSpacing: '2.5px', marginBottom: '10px' }}>
                    Admissions Open for 2024 - 2025
                </Typography>
                <Button
                    variant="contained"
                    className="rounded-pill"
                    style={{ color: 'white', backgroundColor: 'black', fontFamily: '"Roboto", Sans-serif', fontSize: '15px', fontWeight: 500, lineHeight: '1em', letterSpacing: '1px', textShadow: 'white', borderColor: 'white', borderRadius: '25px', padding: '10px 20px', marginTop: '10px' }}
                    startIcon={<LocalPhoneIcon />}
                    onClick={handleOpen}
                >
                    Enquiry Now
                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 5,
                            right: 5,
                            color: 'inherit',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        School Enquiry Form
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                        <div style={{ marginBottom: '10px', }}>
                            <label htmlFor="name" style={{ display: 'block' }}>Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                style={{
                                    width: '100%',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="email" style={{ display: 'block' }}>Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                style={{
                                    width: '100%',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="query" style={{ display: 'block' }}>Query:</label>
                            <select
                                id="query"
                                name="query"
                                required
                                style={{
                                    width: '100%',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            >
                                <option value="">Select a query</option>
                                <option value="Admission">Admission</option>
                                <option value="Curriculum">Curriculum</option>
                                <option value="Facilities">Facilities</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                textTransform: 'capitalize',
                                textAlign: "center"
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
        
        </>
    )
}

export default Enquiry;
