// // @ts-nocheck

import { useContext, useEffect, useState } from "react";
import LocationCard from "./components/LocationCard";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase-config";
import CreateLocation from "./components/CreateLocation";
import Navbar from "./components/Navbar";
import { Context } from "./context/context";

export interface Item {
  completed: boolean;
  name: string;
}

interface Location {
  title: string;
  items: Item[];
  id: string;
}

function App() {
  const [bg] = useState("bg-camping2");

  const [locations, setLocations] = useState<Location[] | null>([]);

  console.log(locations);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "locations"), (snapshot) => {
      const parsedData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      }) as Location[];

      setLocations(parsedData);

      return () => unsubscribe();
    });
  }, []);

  const { showContent } = useContext(Context);

  return (
    <main className="h-screen">
      <div className={`mx-auto w-full max-w-lg bg-cover bg-center bg-no-repeat h-full ${bg}`}>
        <Navbar />

        {showContent ? (
          <div className="h-full">
            {/* <h2>of Food and Places</h2> */}
            <CreateLocation />
            <hr className="my-1 w-[90%] mx-auto" />

            {locations?.map((location) => (
              <LocationCard key={location.title} {...location} />
            ))}

            <div className="h-5 opacity-0" />
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default App;
