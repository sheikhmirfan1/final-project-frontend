import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Footer } from "../components/Footer";

export function SimpleRegistrationForm() {
  return (
    <>
      <div className=" text-center">
        <Card color="white" shadow={false} className="place-items-center">
          <Typography variant="h4" color="blue-gray">
            Table Reservation
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            🍽️ Online Reservation 🍽️
          </Typography>
          <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-wrap justify-evenly gap-4">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                required="true"
                className=" shadow-sm  !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                required="true"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Phone
              </Typography>
              <Input
                type="telephone"
                size="lg"
                placeholder="+1 234 567 890"
                required="true"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                People
              </Typography>
              <Input
                type="number"
                size="lg"
                placeholder="1"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Date &amp; time
              </Typography>
              <Input
                type="datetime-local"
                size="lg"
                placeholder="2021-06-01T08:30"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              
            </div>

            <Button className="mt-6 bg-blue-600" fullWidth>
              Book Now
            </Button>
          </form>
        </Card>
      </div>
      <Footer />
    </>
  );
}
