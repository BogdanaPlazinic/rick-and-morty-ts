import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CharacterModal from "../components/CharacterModal";
import Filters from "../components/Filters";
import PaginationComponent from "../components/PaginationComponent";

import styles from "./CharactersPage.module.scss";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  page: number;
}

const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [currentPage, setCurrenPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);


  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get( 
          "https://rickandmortyapi.com/api/character/", {
            params: {
              name: searchTerm,
              status: status,
              species: species,
              gender: gender,
              page: currentPage
            }
          }
        );
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
        setError("No characters found");
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [searchTerm, status, species, gender, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrenPage(page)
  }

  const openModal = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={styles.charactersBackground}>
        <div className={styles.stickyHeader}>
        <Header />
        </div>
        <div className={styles.container}>
          <h1>Character List</h1>

          <div className={styles.searchContainer}>
          <Filters
            setStatus={setStatus}
            setSpecies={setSpecies}
            setGender={setGender}
          />
          <SearchBar setSearchTerm={setSearchTerm} />
          </div>
          {error ? (
            <p>{error}</p>
          ) : (
            <div className={styles.charactersGridContainer}>
              {characters.map((character) => (
                <div
                  key={character.id}
                  className={styles.characterCard}
                  onClick={() => openModal(character)}
                >
                  <img src={character.image} alt={character.name} />
                  <h3>{character.name}</h3>
                  <p className={styles.characterStatus}>{character.status}</p>
                  <p>{character.species}</p>
                </div>
                
              ))}
            </div>
          )}
          <CharacterModal
            character={selectedCharacter}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        </div>

        <PaginationComponent 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default CharactersPage;
