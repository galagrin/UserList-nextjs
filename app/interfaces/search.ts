import { User } from './user';

export interface SearchProps {
    data: User[];
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
}
