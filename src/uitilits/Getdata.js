export const getDataFromLS = () => {
  const storeDetails = localStorage.getItem("booking");
  if (storeDetails) {
    const localData = JSON.parse(storeDetails);
    return localData;
  } else {
    return [];
  }
};
export const setDataToLs = (id) => {
  const localData = getDataFromLS();
  if (localData.includes(id)) {
    return false;
  } else {
    localData.push(id);
    const p = JSON.stringify(localData);
    localStorage.setItem("booking", p);
    return true;
  }
};
