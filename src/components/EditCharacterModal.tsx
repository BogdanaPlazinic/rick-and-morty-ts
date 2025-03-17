import React, { useEffect } from "react";

import { Modal, Form, Input, Select, Button } from "antd";
import { Character } from "../types/Character";

import styles from "./EditCharacterModal.module.scss"

interface EditCharacterModalProps {
    isOpen: boolean;
    character: Character | null;
    onClose: () => void;
    onSave: (updatedCharacter: Character) => void;
}

const { Option } = Select;

const EditCharacterModal: React.FC<EditCharacterModalProps> = ({ isOpen, character, onClose, onSave }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (character) {
            form.setFieldsValue(character);
        }
    }, [character, form]);

    const handleFinish = (values: Character) => {
        if (character) {
            onSave({ ...character, ...values });
            onClose();
        }
    };

    return (
        <Modal title="Edit Character" open={isOpen} onCancel={onClose} footer={null}>
            <Form form={form} layout="vertical" onFinish={handleFinish}>
                <Form.Item className={styles.formItem} label="Name" name="name" rules={[{ required: true, message: "Name is required" }]}>
                    <Input 
                    className={styles.inputForm}
                    />
                </Form.Item>
                
                <Form.Item className={styles.formItem} label="Species" name="species" rules={[{ required: true, message: "Species is required" }]}>
                    <Input 
                    className={styles.inputForm}
                    />
                </Form.Item>

                <Form.Item className={styles.formItem} label="Status" name="status">
                    <Select>
                        <Option value="Alive">Alive</Option>
                        <Option value="Dead">Dead</Option>
                        <Option value="Unknown">Unknown</Option>
                    </Select>
                </Form.Item>

                <Form.Item className={styles.formItem} label="Gender" name="gender">
                    <Select>
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        <Option value="Genderless">Genderless</Option>
                        <Option value="Unknown">Unknown</Option>
                    </Select>
                </Form.Item>

                <Form.Item className={styles.formItem}>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditCharacterModal;
