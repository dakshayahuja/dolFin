import axios from "axios";
import AppBar from "../AppBar";
import Footer from "../Footer";
import "../../Styles/mfunds.css";
import React, { useState, useEffect } from "react";

const Pagination = ({ items, itemsPerPage, setPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length;
  const firstPage = 1;
  const lastPage = totalPages;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const showFirstDots = currentPage > 3;
  const showLastDots = currentPage < totalPages - 2;

  return (
    <div className="pagination">
      {pageNumbers.map((number) => {
        if (
          number === firstPage ||
          number === lastPage ||
          number === prevPage ||
          number === nextPage ||
          number === currentPage
        ) {
          return (
            <button
              key={number}
              onClick={() => setPage(number)}
              className="page-button"
            >
              {number}
            </button>
          );
        } else if (number === currentPage - 2 && showFirstDots) {
          return <span key={number}>...</span>;
        } else if (number === currentPage + 2 && showLastDots) {
          return <span key={number}>...</span>;
        } else {
          return null;
        }
      })}
    </div>
  );
};

const formatCategory = (category) => {
  if (!category) return "";
  let formattedCategory = category.replace("Open Ended Schemes", "");
  formattedCategory = formattedCategory.replace(/[\(\)]/g, "");
  return formattedCategory;
};

const MutualFunds = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);
  const [funds, setFunds] = useState([]);
  const [allFunds, setAllFunds] = useState([]);
  const [selectedSchemeCategory, setSelectedSchemeCategory] = useState("");
  const [selectedFundFamily, setSelectedFundFamily] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV",
      params: {
        SchemeType: "Open Ended Schemes",
      },
      headers: {
        "X-RapidAPI-Key": "a1b2dea5bamshf319786f27ab9adp1b3d6bjsnf1013f76e2e9",
        "X-RapidAPI-Host": "latest-mutual-fund-nav.p.rapidapi.com",
      },
    };

    const fetchFunds = async () => {
      try {
        const response = await axios.request(options);
        setAllFunds(response.data);
        const filteredData = response.data.filter(
          (fund) =>
            (selectedSchemeCategory
              ? formatCategory(fund["Scheme Category"]) ===
                selectedSchemeCategory
              : true) &&
            (selectedFundFamily
              ? fund["Mutual Fund Family"] === selectedFundFamily
              : true)
        );
        setFunds(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFunds();
  }, [selectedSchemeCategory, selectedFundFamily]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = funds.slice(indexOfFirstItem, indexOfLastItem);

  const schemeCategory = [
    ...new Set(allFunds.map((fund) => formatCategory(fund["Scheme Category"]))),
  ];
  const fundFamilies = [
    ...new Set(allFunds.map((fund) => fund["Mutual Fund Family"])),
  ];

  if (funds.length === 0) {
    return (
      <>
        <AppBar />
        <h1
          className="mt-4 mb-5 text-center"
          style={{ fontFamily: "Montserrat", color: "#fa6640f4" }}
        >
          Mutual Fund Insights
        </h1>
        <div className="filter-container">
          <select
            className="filter-dropdown"
            value={selectedSchemeCategory}
            onChange={(e) => setSelectedSchemeCategory(e.target.value)}
          >
            <option value="">Select Scheme Category</option>
            {schemeCategory.map((scheme) => (
              <option key={scheme} value={scheme}>
                {scheme}
              </option>
            ))}
          </select>

          <select
            className="filter-dropdown"
            value={selectedFundFamily}
            onChange={(e) => setSelectedFundFamily(e.target.value)}
          >
            <option value="">Select Mutual Fund Family</option>
            {fundFamilies.map((family) => (
              <option key={family} value={family}>
                {family}
              </option>
            ))}
          </select>
        </div>
        <div className="no-result">No Result Found</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AppBar />
      <h1
        className="mt-4 mb-5 text-center"
        style={{ fontFamily: "Montserrat", color: "#fa6640f4" }}
      >
        Mutual Fund Insights
      </h1>
      <div className="filter-container">
        <select
          className="filter-dropdown"
          value={selectedSchemeCategory}
          onChange={(e) => setSelectedSchemeCategory(e.target.value)}
        >
          <option value="">Select Scheme Category</option>
          {schemeCategory.map((scheme) => (
            <option key={scheme} value={scheme}>
              {scheme}
            </option>
          ))}
        </select>

        <select
          className="filter-dropdown"
          value={selectedFundFamily}
          onChange={(e) => setSelectedFundFamily(e.target.value)}
        >
          <option value="">Select Mutual Fund Family</option>
          {fundFamilies.map((family) => (
            <option key={family} value={family}>
              {family}
            </option>
          ))}
        </select>
      </div>
      <table className="fund-table">
        <thead>
          <tr>
            <th>Scheme Name</th>
            <th>NAV</th>
            <th>Scheme Category</th>
            <th>Mutual Fund Family</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((fund) => (
            <tr key={fund["Scheme Code"]}>
              <td style={{ width: "40vw" }}>{fund["Scheme Name"]}</td>
              <td style={{ width: "10vw" }}>
                {parseFloat(fund["Net Asset Value"]).toFixed(2)}
              </td>
              <td style={{ width: "25vw" }}>
                {formatCategory(fund["Scheme Category"])}{" "}
              </td>
              <td style={{ width: "25vw" }}>{fund["Mutual Fund Family"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <Pagination
          items={funds}
          itemsPerPage={itemsPerPage}
          setPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <Footer />
    </>
  );
};

export default MutualFunds;
