const fakeDB = {
    '1': { id: 1, name: 'iPhone 14', price: 58000 },
    '2': { id: 2, name: 'MacBook m3', price: 96000 },
    '3': { id: 3, name: 'i mac', price: 119000 },
  };
  
const findProductById = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return fakeDB[id] || null;
};

export default findProductById;