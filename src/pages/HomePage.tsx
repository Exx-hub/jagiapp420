import { collection, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { Context } from "../context/context";
import CreateLocation from "../components/CreateLocation";
import LocationCard from "../components/LocationCard";

export interface Item {
  completed: boolean;
  name: string;
}

interface Location {
  title: string;
  items: Item[];
  id: string;
}

function HomePage() {
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
    <div className={`mx-auto w-full max-w-lg  h-full`}>
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
  );
}

export default HomePage;
