import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { QuizzInterface } from "@/interface/QuizzInterface";
import Image from "next/image";
import { useContext, useState } from "react";
import { QuizzContext } from "../page";
import { Radio, RadioGroup } from "@mui/joy";
import Pagination from "./Pagination";

const PropQuizz = () => {
  const { currentQuizz, setChoiseID, choiseID, quizzID, setQuizzID } =
    useContext(QuizzContext);

  const quizzs: QuizzInterface[] = currentQuizz;

  const handelChange = (e: any) => {
    const quizz_ID = e.target.name;
    const choise_ID = e.target.value;
    if (!quizzID.includes(quizz_ID) && !choiseID.includes(choise_ID)) {
      setQuizzID([...quizzID, quizz_ID]);
      setChoiseID([...choiseID, choise_ID]);
    } else if (quizzID.includes(quizz_ID)) {
      const index = quizzID.indexOf(quizz_ID);
      setChoiseID([
        ...choiseID.slice(0, index),
        choise_ID,
        ...choiseID.slice(index + 1),
      ]);
    }
  };

  return (
    <>
      {quizzs.map((quizz) => {
        return (
          <Box key={quizz._id} className="w-full flex flex-col gap-y-10">
            <Box className="w-full flex justify-center">
              <Image
                src={quizz.ImageQuizz}
                alt="quizz"
                width={300}
                height={300}
              />
            </Box>
            <Typography variant="h4" className="flex justify-center font-bold">{quizz.quizzTitle}</Typography>
            <Box className="px-32">
              <RadioGroup
                className="w-full"
                onChange={handelChange}
                key={quizz._id}
                name={quizz._id}
              >
                {quizz.choies.map((choise, index) => {
                  return (
                    <Radio
                      key={choise._id}
                      className="bg-secondary02 w-full h-[48px] items-center px-5"
                      value={choise._id}
                      label={`${index+1}. ${choise.answer}`}
                    ></Radio>
                  );
                })}
              </RadioGroup>
            </Box>
            <Pagination />
          </Box>
        );
      })}
    </>
  );
};

export default PropQuizz;
