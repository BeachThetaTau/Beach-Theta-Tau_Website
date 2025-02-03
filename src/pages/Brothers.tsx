import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "./Brothers.css";

interface User {
  name: string;
  class: string;
  gradYear?: string;
  major?: string;
}

const baseGreekAlphabet = [
  "Alpha",
  "Beta",
  "Gamma",
  "Delta",
  "Epsilon",
  "Zeta",
  "Eta",
  "Theta",
  "Iota",
  "Kappa",
  "Lambda",
  "Mu",
  "Nu",
  "Xi",
  "Omicron",
  "Pi",
  "Rho",
  "Sigma",
  "Tau",
  "Upsilon",
  "Phi",
  "Chi",
  "Psi",
  "Omega",
];

const generateExtendedGreekAlphabet = (
  baseAlphabet: string[],
  levels: number
): string[] => {
  const extendedAlphabet: string[] = [...baseAlphabet];

  for (let i = 1; i < levels; i++) {
    baseAlphabet.forEach((first) => {
      baseAlphabet.forEach((second) => {
        extendedAlphabet.push(`${first} ${second}`);
      });
    });
  }

  return extendedAlphabet.reverse();
};

const greekAlphabetOrder = generateExtendedGreekAlphabet(baseGreekAlphabet, 2);

function Brothers() {
  // State to hold the users grouped by their class (Greek letter)
  const [usersByClass, setUsersByClass] = useState<Record<string, User[]>>(
    Object.fromEntries(greekAlphabetOrder.map((letter) => [letter, []]))
  );

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      const db = getFirestore();
      const usersCollection = collection(db, "users");
      const querySnapshot = await getDocs(usersCollection);

      const updatedUsersMap: Record<string, User[]> = Object.fromEntries(
        greekAlphabetOrder.map((letter) => [letter, []])
      );

      querySnapshot.forEach((doc) => {
        const userData = doc.data() as User;
        if (
          userData.name &&
          userData.class &&
          greekAlphabetOrder.includes(userData.class)
        ) {
          updatedUsersMap[userData.class].push(userData);
        }
      });

      // Sort each class's users alphabetically by name
      Object.keys(updatedUsersMap).forEach((letter) => {
        updatedUsersMap[letter].sort((a, b) => a.name.localeCompare(b.name));
      });

      setUsersByClass(updatedUsersMap);
    };

    fetchUsers();
  }, []);

  return (
    <>
      {/* Brothers listing */}
      <div className="brothers-wrapper">
        {greekAlphabetOrder
          .filter((letter) => usersByClass[letter].length > 0)
          .map((letter) => (
            <div key={letter} className="brother-group">
              <h2>{letter}</h2>
              <div className="brothers-container">
                {usersByClass[letter].map((user, index) => (
                  <div key={index} className="brother">
                    <img
                      src="/Brothers/blank-pfp.webp"
                      alt={`${user.name}'s profile`}
                    />
                    <h1>{user.name}</h1>
                    <p>
                      {user.major} | {user.gradYear}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Brothers;
