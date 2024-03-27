// // MyCalendarComponent.js

// import React, { useState } from 'react';
// import Calendar from 'react-calendar'; // Importing the Calendar component
// import 'react-calendar/dist/Calendar.css'; // Importing the Calendar CSS
// import './MyCalendarComponent.css';

// export default function MyCalendarComponent() {
//     // Step 1: Create state for calendar date
//     const [calDate, setCalDate] = useState(new Date());

//     // Step 2: Define onChange handler
//     function onChange(calDate) {
//         setCalDate(calDate);

//         // Step 3 (Optional): Filter data based on calendar date
//         // const filteredData = userResults.filter(result => {
//         //     const resultDate = new Date(result.created_at).toLocaleDateString();
//         //     const calDateFormatted = calDate.toLocaleDateString();
//         //     return resultDate === calDateFormatted;
//         // });
//         // Do something with filteredData
//     }

//     // Step 4: Render Calendar component
//     return (
//         <div className="result-calendar">
//             <Calendar onChange={onChange} value={calDate} />
//         </div>
//     );
// }
import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Importing the Calendar component
import 'react-calendar/dist/Calendar.css'; // Importing the Calendar CSS
import './MyCalendarComponent.css';

export default function MyCalendarComponent() {
    // Step 1: Create state for calendar date
    const [calDate, setCalDate] = useState(new Date());
    
    // Step 5: State for showing/hiding link
    const [showLink, setShowLink] = useState(false);

    // Step 2: Define onChange handler
    function onChange(calDate) {
        setCalDate(calDate);
        setShowLink(true); // Show the link when date is clicked


    }


    return (
        <div className="result-calendar">
            <Calendar
                onChange={onChange}
                value={calDate}
            />
            {showLink && (
                <div>
                    {/* <p>Book your call for {calDate.toDateString()}</p> */}
                    <p> Share your Details here!</p>
                    <a href="/Contacts">Contact Here</a>
                </div>
            )}
        </div>
    );
}
//with book call form

// import React, { useState } from 'react';
// import Calendar from 'react-calendar'; // Importing the Calendar component
// import 'react-calendar/dist/Calendar.css'; // Importing the Calendar CSS

// export default function MyCalendarComponent() {
//     // Step 1: Create state for calendar date
//     const [calDate, setCalDate] = useState(new Date());
    
//     // Step 2: State for showing/hiding booking form
//     const [showBookingForm, setShowBookingForm] = useState(false);

//     // Step 3: State variables for form inputs
//     const [name, setName] = useState('');
//     const [classLevel, setClassLevel] = useState('');
//     const [selectedTime, setSelectedTime] = useState('');

//     // Step 4: Define onChange handler for calendar
//     function onChange(calDate) {
//         setCalDate(calDate);
//         setShowBookingForm(true); // Show booking form when date is clicked
//     }

//     // Step 5: Function to handle form submission
//     function handleFormSubmit(event) {
//         event.preventDefault();
//         // Process the form data
//         console.log("Name:", name);
//         console.log("Class:", classLevel);
//         console.log("Selected Time:", selectedTime);
//         // You can submit this data to your backend or perform any other action
//     }

//     // Step 6: Render Calendar component and booking form
//     return (
//         <div className="result-calendar">
//             <Calendar
//                 onChange={onChange}
//                 value={calDate}
//             />
//             {showBookingForm && (
//                 <div className="booking-form">
//                     <h2>Book your call for {calDate.toDateString()}</h2>
//                     <form onSubmit={handleFormSubmit}>
//                         <div>
//                             <label>Name:</label>
//                             <input
//                                 type="text"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label>Class:</label>
//                             <input
//                                 type="text"
//                                 value={classLevel}
//                                 onChange={(e) => setClassLevel(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label>Select Time:</label>
//                             <input
//                                 type="time"
//                                 value={selectedTime}
//                                 onChange={(e) => setSelectedTime(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// }
