import { useState } from 'react';

export const useEdit = () => {
    const [isEditing, setEditing] = useState(false);
    const handlerEditClick = () => setEditing(!isEditing);

    return {
        isEditing,
        setEditing,
        handlerEditClick,
    };
};