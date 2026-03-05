import { useState, useRef } from "react";
import "./App.css";

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const [attendees, setAttendees] = useState("");
  const [dietary, setDietry] = useState("");
  const [isExtraGuest, setIsExtraGuest] = useState(false);

  const responseRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    responseRef.current.textContent = `RSVP Submitted!
Name: ${name}
Email: ${email}
Number of attendees: ${attendees}
Dietary preferences: ${dietary ? dietary : "none"}
Bringing additional guests: ${isExtraGuest ? "Yes" : "No"}`;
  }

  return (
    <div className="container">
      <form id="registration-form" onSubmit={handleSubmit}>
        <h2>Event RSVP Form</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEamil(e.target.value)}
        />

        <label htmlFor="attendees">Number of Attendees:</label>
        <input
          type="number"
          id="attendees"
          name="attendees"
          min="1"
          required
          placeholder="Number of Attendees"
          value={attendees}
          onChange={(e) => setAttendees(e.target.value)}
        />

        <label htmlFor="dietary">Dietary Preferences:</label>
        <input
          type="text"
          id="dietary"
          name="dietary"
          placeholder="Dietary Preferences (optional)"
          value={dietary}
          onChange={(e) => setDietry(e.target.value)}
        />

        <label>
          <input
            value={isExtraGuest}
            type="checkbox"
            id="extraGuests"
            name="extraGuests"
            onChange={(e) => {
              e.target.value ? setIsExtraGuest(true) : setIsExtraGuest(false);
            }}
          />
          Bringing additional guests?
        </label>

        <button type="submit">Submit</button>
      </form>

      <div id="responseMessage" ref={responseRef}></div>
    </div>
  );
}
