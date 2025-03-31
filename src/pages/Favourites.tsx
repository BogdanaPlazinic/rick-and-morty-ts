import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { toast } from "react-toastify";

import Header from "../components/Header";
import CharacterModal from "../components/CharacterModal";
import EditCharacterModal from "../components/EditCharacterModal";

import styles from "./Favouites.module.scss";
import { safelyParseJSON } from "../helpers";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

const Favourites: React.FC = () => {
  const [favourites, setFavourites] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const storedFavourites = safelyParseJSON(
      localStorage.getItem("favorites") || "[]"
    );
    setFavourites(storedFavourites);
  }, []);

  const handleRemove = (id: number) => {
    const updatedFavourites = favourites.filter(
      (character) => character.id !== id
    );
    toast.error("Character removed!");
    setFavourites(updatedFavourites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavourites));
  };

  const openModal = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const openEditModal = (character: Character) => {
    setSelectedCharacter(character);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (updatedCharacter: Character) => {
    const updatedFavourites = favourites.map((char) =>
      char.id === updatedCharacter.id ? updatedCharacter : char
    );
    setFavourites(updatedFavourites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className={styles.favouritesMainContainer}>
      <Header />
      <h1 className={styles.favouritesHeading}>Favourites Characters</h1>

      {favourites.length === 0 ? (
        <p>No favourite characters yet.</p>
      ) : (
        <div className={styles.charactersGrid}>
          {favourites.map((character) => (
            <Card
              key={character.id}
              cover={<img src={character.image} alt={character.name} />}
              onClick={() => openModal(character)}
              className={styles.characterCard}
            >
              <Card.Meta
                title={character.name}
                description={character.species}
              />
              <div className={styles.btnContainer}>
                <Button
                  className={styles.editBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    openEditModal(character);
                  }}
                >
                  Edit
                </Button>

                <Button
                  className={styles.removeBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(character.id);
                  }}
                >
                  Remove
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <CharacterModal
        character={selectedCharacter}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <EditCharacterModal
        isOpen={isEditModalOpen}
        character={selectedCharacter}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveEdit}
      />
    </div>
  );
};

export default Favourites;
