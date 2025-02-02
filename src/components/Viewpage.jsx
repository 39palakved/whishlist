import React, { useEffect, useState } from 'react';
import './style.css';

const Viewpage = () => {
  const [arr, setArr] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]); // Array to track checked items by index

  const handleChange = (index) => {
    // Toggle the checkbox state for the given index
    setCheckedItems((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle the state of the checkbox at the index
      return newState;
    });
  };

  const getdata = async () => {
    const wishes = await fetch('http://localhost:8080/getwish', {
      method: 'GET',
    });
    const data = await wishes.json();
    setArr(data);
    setCheckedItems(new Array(data.length).fill(false)); // Initialize all checkboxes as unchecked
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div className="container">
        <table className="wishlist-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((wish, index) => (
              <tr key={wish._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={wish.image} alt="Item 1" className="item-image" />
                </td>
                <td>{wish.title}</td>
                <td>{wish.description}</td>
                <td>{wish.category}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleChange(index)} // Use the index to toggle the checkbox
                    checked={checkedItems[index] || false} // Access the checkbox state from checkedItems array
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewpage;
