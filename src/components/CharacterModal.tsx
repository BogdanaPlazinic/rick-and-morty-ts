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
    <Modal title={character?.name} open={isOpen} onCancel={onClose} footer={[<Button onClick={onClose} key='cancel'>Cancel</Button>]} >
        {character && (
            <div className={styles.modalContentTEEEST}> {/* test klasa */}
                <img src={character.image} alt={character.name} />
                <p>Status: {character.status} </p>
                <p>Species: {character.species} </p>
                <p>Gender: {character.gender} </p>
            </div>
        )}
    </Modal>
)
}


export default CharacterModal;