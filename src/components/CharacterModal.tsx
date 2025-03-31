import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { toast } from "react-toastify";

import styles from "./CharacterModal.module.scss";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  isOpen,
  onClose,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (character) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(
        favorites.some((fav: Character) => fav.id === character.id)
      );
    }
  }, [character]);

  const handleFavoriteClick = () => {
    if (!character) return;

    let favorites: Character[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== character.id);
      toast.error("Removed from favorites!");
    } else {
      favorites.push(character);
      toast.success("Added to favorites!");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);

    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <Modal
      title={
        <div className={styles.modalHeader}>
          <span className={styles.modalIcon}>
            <div className={styles.favoriteIcon} onClick={handleFavoriteClick}>
              {isFavorite ? (
                <HeartFilled className={`${styles.favouriteIcon}`} />
              ) : (
                <HeartOutlined className={styles.favouriteIcon} />
              )}
            </div>
          </span>
          <span className={styles.modalTitle}>{character?.name}</span>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button onClick={onClose} key="cancel">
          Cancel
        </Button>,
      ]}
    >
      {character && (
        <div className={styles.characterModalContainer}>
          <img src={character.image} alt={character.name} />
          <p>
            <span>Status: &nbsp;</span>
            {character.status}{" "}
          </p>
          <p>
            <span>Species: &nbsp;</span>
            {character.species}{" "}
          </p>
          <p>
            <span>Gender: &nbsp;</span>
            {character.gender}{" "}
          </p>
        </div>
      )}
    </Modal>
  );
};

export default CharacterModal;
