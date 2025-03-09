import React from "react";

import { Button, Modal } from "antd";

import styles from "./CharacterModal.module.scss"

interface Character {
    id: number
    name: string
    status: string
    species: string
    gender: string
    image: string
}

interface CharacterModalProps {
    character: Character | null;
    isOpen: boolean;
    onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, isOpen, onClose }) => {
    return (
    <Modal 
    title={character?.name} 
    open={isOpen} 
    onCancel={onClose} 
    footer={[
    <Button 
    onClick={onClose} 
    key='cancel'>
    Cancel
    </Button>
    ]} >
        {character && (
            <div className={styles.characterModalContainer}>
                <img src={character.image} alt={character.name} />
                <p><span>Status: &nbsp;</span>{character.status} </p>
                <p><span>Species: &nbsp;</span>{character.species} </p>
                <p><span>Gender: &nbsp;</span>{character.gender} </p>
            </div>
        )}
    </Modal>
)
}


export default CharacterModal;