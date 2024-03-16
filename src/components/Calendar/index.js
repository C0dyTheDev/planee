import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import "./calendar.css"
export default function Calendar(initialView, dateClick, initialDate, events) {

    const handleDateClick = (arg) => {

    }

    return (
        <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin  ]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
            initialDate="2024-03-19"
            events={[
                {
                    title: "Math Test",
                    start: "2024-03-19",
                    end: "2024-03-19",
                    className: "violet",
                },
                {
                    title: "Working on UUR",
                    start: "2024-03-17",
                    end: "2024-03-20",
                    className: "blue",
                },
                {
                    title: "Meeting with Tam",
                    start: "2024-03-25",
                    end: "2024-03-25",
                    className: "green",
                },
            ]}
            selectable
            editable
        />
    )
}