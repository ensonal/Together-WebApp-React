import { Card, TextField } from "@mui/material";
import { SportSelectForm } from "./SportSelectForm";
import { UploadEventImage } from "./UploadEventImage";
import { EventDatePicker } from "./EventDatePicker";
import Button from "@mui/material/Button";
import { useState } from "react";
import { addUserEvent } from "../../../api/services/EventService";
import MapComponent from "./MapComponent";
import RichTextEditor from "../../../components/RichTextEditor/RichTextEditor";

export function CreateEventCard() {
  const [userEvent, setUserEvent] = useState<any>({});

  const handleChange = (field: any, value: any) => {
    setUserEvent((prevUserEvent: any) => ({
      ...prevUserEvent,
      [field]: value,
    }));
  };

  const handleLocationSelect = (location: { lat: number; lng: number }) => {
    setUserEvent((prevUserEvent: any) => ({
      ...prevUserEvent,
      latitude: location.lat,
      longitude: location.lng,
    }));
  };

  const handleAddressSelect = (cityFromGeo: string, countryFromGeo: string) => {
    setUserEvent((prevUserEvent: any) => ({
      ...prevUserEvent,
      city: cityFromGeo,
      country: countryFromGeo,
    }));
  };

  const createEvent = async () => {
    const response = await addUserEvent(userEvent);
    if (response) {
      window.location.href = "/events";
    }
  };

  return (
    <Card className="p-4 rounded-3 gap-2">
      <div className="d-flex flex-column gap-2">
        <div className="d-flex flex-row gap-5">
          <div className="d-flex flex-column gap-2 w-100">
            <p className="fs-5 m-0">Event title</p>
            <TextField
              className="w-100"
              variant="outlined"
              color="primary"
              onChange={(e) => handleChange("title", e.target.value)}
            />
            <p className="fs-5 m-0 mt-2">Description</p>
            <RichTextEditor
              onTextChange={(content: string) =>
                handleChange("description", content)
              }
            />
          </div>
        </div>
        <div className="d-flex flex-row gap-4">
          <UploadEventImage setUserEvent={setUserEvent} />
          <div className="d-flex flex-column gap-2 w-100 mt-5">
            <SportSelectForm setUserEvent={setUserEvent} />
          </div>
        </div>
        <EventDatePicker setUserEvent={setUserEvent} />
        <p className="fs-5 m-0 mt-2 mb-2">Location </p>
        <MapComponent
          onLocationSelect={handleLocationSelect}
          onAddressSelect={handleAddressSelect}
        />
        <div className="d-flex flex-row w-100 gap-3">
          <div className="d-flex flex-column w-100">
            <p className="fs-5 m-0 mt-2" style={{ color: "#808080" }}>
              City
            </p>
            <TextField
              value={userEvent?.city}
              disabled
              className="w-100"
              variant="outlined"
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>
          <div className="d-flex flex-column w-100">
            <p className="fs-5 m-0 mt-2" style={{ color: "#808080" }}>
              Country
            </p>
            <TextField
              value={userEvent?.country}
              disabled
              className="w-100"
              variant="outlined"
              onChange={(e) => handleChange("country", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <Button
          variant="contained"
          color="primary"
          fullWidth={false}
          onClick={createEvent}
        >
          Create event
        </Button>
      </div>
    </Card>
  );
}
