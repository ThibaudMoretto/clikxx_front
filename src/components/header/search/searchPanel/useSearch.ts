export const useSearch = () => {
  const handleClickSearch = (searchValue: string) => {
    console.log(searchValue);
  };

  return { handleClickSearch };
};
