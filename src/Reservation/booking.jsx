import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Footer } from "../components/Footer";
import { useState } from "react";
import axios from "axios";

export function SimpleRegistrationForm() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [people, setPeople] = useState(null);
  const [date, setDate] = useState(null);

  const postReservation = async (e) => {
    e.preventDefault();
    try {
      const createReservation = await axios.post(
        "https://final-project-backend-nu.vercel.app/api/reservation",
        {
          name: name,
          email: email,
          phone: phone,
          people: people,
          date: date,
        }
      );
      console.log(createReservation);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className=" w-full text-center ">
        <Card className="place-items-center mt-2 mb-2">
          <img
            src="/capi.png"
            className="  object-cover opacity-15 w-full h-full absolute top-0 left-0 z-0"
            alt="Background image of a home"
          />
          <Typography variant="h4" color="black">
            Table Reservation
          </Typography>
          <Typography color="black" className="mt-1 font-medium">
            🍽️ Online Reservation 🍽️
          </Typography>
          <form
            onSubmit={postReservation}
            className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-wrap justify-evenly gap-4">
              <Typography variant="h6" color="black" className="-mb-3">
                Your Name
              </Typography>
              <Input
                onChange={(e) => setName(e.target.value)}
                size="lg"
                placeholder="name"
                required="true"
                className=" shadow-sm  !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="black" className="-mb-3">
                Your Email
              </Typography>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
                placeholder="name@mail.com"
                required="true"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="black" className="-mb-3">
                Phone
              </Typography>
              <Input
                onChange={(e) => setPhone(e.target.value)}
                type="telephone"
                size="lg"
                placeholder="+1 234 567 890"
                required="true"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="black" className="-mb-3">
                People
              </Typography>
              <Input
                onChange={(e) => setPeople(e.target.value)}
                type="number"
                size="lg"
                placeholder="1"
                required="true"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="black" className="-mb-3">
                Date &amp; time
              </Typography>
              <Input
                onChange={(e) => setDate(e.target.value)}
                type="datetime-local"
                size="lg"
                placeholder="2021-06-01T08:30"
                required="true"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
          </form>
        </Card>
        <Button
          className="mt-6 bg-blue-600"
          onClick={() =>
            postReservation() && alert("Your reservation has been made!")
          }
        >
          Book Now
        </Button>
      </div>
      <Footer />
    </>
  );
}
