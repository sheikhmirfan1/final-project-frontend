import Review from "../pageCard/Review.jsx";
import { Footer } from "../components/Footer.jsx";

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...

  {
    name: "Courtney Henry",
    role: "Chef",
    imageUrl: "/src/assets/1.jpg",
  },
  {
    name: "Tom Cook",
    role: "Chef",
    imageUrl: "/src/assets/3.jpg",
  },

  {
    name: "Whitney Francis",
    role: "Chef",
    imageUrl: "/src/assets/2.jpg",
  },
  {
    name: "Kristin Watson",
    role: "Chef",
    imageUrl: "/src/assets/h3-chef-03.png",
  },
];

export default function About() {
  return (
    <>
      <div className=" py-24 sm:py-32 relative">
        <img
          src="/src/assets/myteam.jpg"
          className="  object-cover opacity-15 w-full h-full absolute top-0 left-0 z-0"
          alt="Background image of a home"
        />

        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-black">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Review />
      </div>
      <Footer />
    </>
  );
}
