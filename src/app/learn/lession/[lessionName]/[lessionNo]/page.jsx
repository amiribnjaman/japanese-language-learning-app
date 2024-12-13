"use client";

import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "next/navigation";
import Pagination from "@/components/pagination";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";

export default function Lession() {
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  const { lessionName, lessionNo } = useParams();
  const [vocabularies, setVocabularies] = useState([]);
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);

  // GETTING ALL LESSION THROUGH USEEFFECT
  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:4000/api/v1/vocabulary/getvocabularymatchlession/${lessionNo}`,
      {
        method: "GET",
        headers: {
          authorization: "Bearer " + cookies.Token,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == "200") {
          setVocabularies(data.vocabularies);
        }
      })
      .catch((err) => {
        console.log("Something went wrong");
      });
    setLoading(false);
  }, []);

  // States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(1);

  // Pagination calculation
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentData = vocabularies.slice(indexOfFirstPost, indexOfLastPost);

  // handle paginate next page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // FUNCTION FOR PRONOUNCE WORD
  function pronounceWord(word) {
    console.log(word);
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; // Japanese
    window.speechSynthesis.speak(utterance);
  }

  // CONFENETI CEBELREATION FUNCTION
  const confenettiForComplete = () => {
    confetti({
      particleCount: 200,
      spread: 50,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      navigate.push("/learn");
    });
  };

  return (
    <div className="md:w-[90%] ml-auto">
      <h4 className="text-lg font-semibold mb-2">Lession {lessionNo}</h4>
      <div className="flex mt-10 justify-center items-center">
        {loading && "Loading..."}
        {vocabularies.map((vocabulary) => (
          <div key={vocabulary.id}>
            <h2 className="text-4xl font-semibold">{vocabulary.word}</h2>
            <h3>{vocabulary.pronunciation}</h3>
            <h3>{vocabulary.meaning}</h3>
            <h3>When to Say: {vocabulary.whenToSay}</h3>
            <div className="flex flex-col">
              <button
                className="my-4 text-underline underline"
                onClick={() => pronounceWord(vocabulary.word)}
              >
                Click for hear the pronunciation
              </button>
              <button
                onClick={confenettiForComplete}
                className="w-[200px] text-center text-white font-semibold bg-green-500 px-4 py-2 rounded"
              >
                Complete
              </button>
            </div>
          </div>
        ))}
      </div>
      {vocabularies.length > 1 && (
        <Pagination
          dataPerPage={dataPerPage}
          totalData={vocabularies.length}
          paginate={paginate}
        />
      )}
    </div>
  );
}
