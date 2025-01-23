import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import "./Profile.css";
import Footer from "../components/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const db = getFirestore();
  const user = auth.currentUser;

  const logoutUser = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          const defaultData = {
            name: "",
            major: "",
            class: "",
            gradYear: "",
            linkedIn: "",
            email: user.email || "",
            verified: false,
          };
          await setDoc(userDocRef, defaultData);
          setUserData(defaultData);
          setIsEditing(true);
        }
      } catch (error) {
        console.error("Error fetching or creating user data: ", error);
      }
    };

    fetchUserData();
  }, [user, db, navigate]);

  const handleEditClick = () => {
    setEditedData(userData);
    setIsEditing(true);
  };

  const handleInputChange = (field, value) => {
    setEditedData((prevData) => ({ ...prevData, [field]: value }));
  };

  const validateData = () => {
    if (!editedData.name || editedData.name.trim() === "") {
      return false;
    }

    if (editedData.gradYear && isNaN(editedData.gradYear)) {
      return false;
    }

    const urlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/i;
    if (editedData.linkedIn && !urlPattern.test(editedData.linkedIn)) {
      return false;
    }

    return true;
  };

  const handleSave = async () => {
    if (!validateData()) return;

    setIsLoading(true);
    try {
      const userDocRef = doc(db, "users", user.uid);
      // Add 'verified: false' to the updated data
      const updatedData = {
        ...editedData,
        email: user.email || "",
        verified: false,
      };
      await updateDoc(userDocRef, updatedData);
      setUserData(updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const getPfpPath = () => {
    if (userData?.verified) {
      const name = userData.name
        ? userData.name.replace(/[^a-zA-Z]/g, "")
        : "blankpfp";
      return `Brothers/${name}.webp`;
    }
    return "/Brothers/blankpfp.webp";
  };

  const pfpPath = getPfpPath();

  if (!user) return null;

  return (
    <>
      <div className="profile-container">
        <div className="user-container">
          <img
            className="pfp"
            src={pfpPath}
            alt="profile picture"
            aria-label="User profile picture"
          />
          <button
            type="button"
            className="logout"
            onClick={logoutUser}
            aria-label="Logout button"
          >
            Logout
          </button>
        </div>

        <div className="user-info">
          {["name", "major", "class", "gradYear", "linkedIn", "email"].map(
            (field) => (
              <div className="info-field" key={field}>
                <p className="label">
                  {field === "gradYear"
                    ? "Graduation Year:"
                    : `${field.charAt(0).toUpperCase() + field.slice(1)}:`}
                </p>
                {isEditing && field !== "email" ? (
                  <input
                    type="text"
                    className="user-input"
                    value={editedData[field] || ""}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    aria-label={`Edit ${field}`}
                  />
                ) : (
                  <p className="user-data">{userData?.[field] || "N/A"}</p>
                )}
              </div>
            )
          )}

          {isEditing ? (
            <div className="button-group">
              <button
                className="save"
                onClick={handleSave}
                disabled={isLoading}
                aria-label="Save button"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
              <button
                className="cancel"
                onClick={handleCancel}
                disabled={isLoading}
                aria-label="Cancel button"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="edit-container">
              <button
                className="edit"
                onClick={handleEditClick}
                aria-label="Edit profile button"
              >
                Edit Profile <img id="EditIcon" src="edit.png" alt="edit" />
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
