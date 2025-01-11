import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./../firebase";
import { signOut } from "firebase/auth";
import { db } from "./../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "./Profile.css";
import Footer from "../components/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [originalData, setOriginalData] = useState(null);
  const [profilePic, setProfilePic] = useState("/Brothers/blank-pfp.webp"); // Default profile picture

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      if (!user) {
        navigate("/login");
        return;
      }

      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserData(data);
          setOriginalData(data); // Save original data for cancellation

          // Generate the profile picture filename if name exists
          if (data.name) {
            updateProfilePic(data.name);
          }
        } else {
          console.error("User data not found!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const updateProfilePic = (name) => {
    if (name) {
      const formattedName = name.replace(/\s+/g, "") + ".webp";
      console.log(`Profile picture filename: ${formattedName}`);
      setProfilePic(`/Brothers/${formattedName}`);
    } else {
      setProfilePic("/Brothers/blank-pfp.webp"); // Fallback to default picture
    }
  };

  const logoutUser = async (e) => {
    e.preventDefault();
    await signOut(auth);
    navigate("/");
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
    setOriginalData(userData); // Save current data as original when entering edit mode
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    if (!auth.currentUser) return;

    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userDocRef, userData, { merge: true });

      // Update the profile picture after saving
      if (userData.name) {
        updateProfilePic(userData.name);
      }

      setIsEditing(false);
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const handleCancel = () => {
    setUserData(originalData); // Restore original data
    setIsEditing(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="profile-container">
        <div className="user-container">
          <img src={profilePic} alt="User profile" className="pfp" />
          <button type="submit" className="logout" onClick={logoutUser}>
            Logout
          </button>
        </div>

        <div className="user-info">
          {[
            { field: "name", label: "Name" },
            { field: "major", label: "Major" },
            { field: "className", label: "Class" },
            { field: "gradYear", label: "Graduation Year" },
            { field: "position", label: "Position" },
            { field: "linkedIn", label: "LinkedIn" },
          ].map(({ field, label }) => (
            <div key={field} className="info-field">
              <p className="label">{label}:</p>
              {isEditing ? (
                <input
                  type="text"
                  name={field}
                  value={userData?.[field] || ""}
                  onChange={handleInputChange}
                  className="user-input"
                />
              ) : (
                <p className="user-data">
                  {field === "linkedIn" && userData?.[field] ? (
                    <a
                      href={userData[field]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="user-data-link"
                    >
                      {userData[field]}
                    </a>
                  ) : (
                    userData?.[field] || "N/A"
                  )}
                </p>
              )}
            </div>
          ))}
          {isEditing ? (
            <div className="button-group">
              <button className="save" onClick={handleSave}>
                Save
              </button>
              <button className="cancel" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          ) : (
            <button className="edit" onClick={handleEditToggle}>
              Edit Profile <img src="edit.png" alt="pen" id="EditIcon" />
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
