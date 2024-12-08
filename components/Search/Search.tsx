'use client';
import { SearchProps } from '@/app/interfaces/search';

const Search = ({ handleSubmit, handleInputChange, inputValue }: SearchProps) => {
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    onChange={(e) => handleInputChange(e)}
                    value={inputValue}
                    placeholder="enter user name"
                    className="border border-green-800 rounded-md p-1.5 mr-4 outline-green-800"
                />
                <button
                    type="submit"
                    className="bg-gray-200 text-black py-2 px-4 rounded duration-300 hover:bg-green-800 hover:text-white  transition ease-in-out"
                >
                    search
                </button>
            </form>
        </>
    );
};

export default Search;
