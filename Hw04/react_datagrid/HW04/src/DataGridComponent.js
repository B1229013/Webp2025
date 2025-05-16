// src/DataGridComponent.js
import React, { useState, useEffect } from 'react';
import './index.css';

const DataGridComponent = () => {
  const [dataset, setDataset] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6", true);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        setDataset(response);
        setFilteredData(response);
        setLoading(false);
      } else if (this.readyState === 4) {
        alert("Failed to load data. Please try again later.");
      }
    };
  }, []);

  const renderTable = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filteredData.slice(start, end);

    return (
      <table id="csie">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Fare</th>
          </tr>
        </thead>
        <tbody>
          {pageItems.map((item, index) => (
            <tr key={index}>
              <td>{item.title || "N/A"}</td>
              <td>{item.showInfo && item.showInfo[0] ? item.showInfo[0].location : "N/A"}</td>
              <td>{item.showInfo && item.showInfo[0] ? item.showInfo[0].price : "Free"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="dataGridContainer">
      <input
        type="text"
        id="searchInput"
        placeholder="Search by name..."
        onInput={(e) => {
          const keyword = e.target.value.trim().toLowerCase();
          setFilteredData(dataset.filter((item) => item.title.toLowerCase().includes(keyword)));
          setCurrentPage(1); // Reset to page 1 after filtering
        }}
      />
      {loading ? (
        <p>Loading data...</p> // Show loading message while data is being fetched
      ) : (
        <>
          {renderTable()}  {/* Render the table */}
          <div className="pagination">
            <button onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)} disabled={currentPage === 1}>
              Previous
            </button>
            <span id="pageInfo">
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DataGridComponent;  // Make sure to export the component
