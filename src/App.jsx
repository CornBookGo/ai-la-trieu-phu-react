import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex là một công ty chuyên về loại sản phẩm gì?",
      answers: [
        {
          text: "A.Điện thoại",
          correct: false,
        },
        {
          text: "B.Đồng hồ",
          correct: true,
        },
        {
          text: "C.Đồ ăn",
          correct: false,
        },
        {
          text: "D.Gia dụng",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Facebook được thành lập năm nào?",
      answers: [
        {
          text: "A.2004",
          correct: true,
        },
        {
          text: "B.2005",
          correct: false,
        },
        {
          text: "C.2006",
          correct: false,
        },
        {
          text: "D.2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Ai đã được chọn vào vai Harry Poter trong bộ phim cùng tên?",
      answers: [
        {
          text: "A.Johnny Deep",
          correct: false,
        },
        {
          text: "B.Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "C.Denzel Washington",
          correct: false,
        },
        {
          text: "D.Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Một chương trình có tính phi cấu trúc mà khó bảo trì được thiết kế gọi là gi?",
      answers: [
        {
          text: "A.Mã nhị phân",
          correct: false,
        },
        {
          text: "B.Mã ASCII",
          correct: false,
        },
        {
          text: "C.Mã đảo ngược",
          correct: false,
        },
        {
          text: "D.Mã Spaghetti",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Điền từ còn thiếu trong câu sau:'Giấy rách phải giữ lấy ...' ?",
      answers: [
        {
          text: "A.Lề",
          correct: true,
        },
        {
          text: "B.Bìa",
          correct: false,
        },
        {
          text: "C.Nề",
          correct: false,
        },
        {
          text: "D.Bọc",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Hồ Chí Minh đã sáng tác tác phẩm nào sau đây?",
      answers: [
        {
          text: "A.Nam quốc sơn hà",
          correct: false,
        },
        {
          text: "B.Bản Tuyên ngôn độc lập 1945",
          correct: true,
        },
        {
          text: "C.Chiến tranh và hòa bình",
          correct: false,
        },
        {
          text: "D.Bình Ngô đại cáo",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "?",
      answers: [
        {
          text: "A.Phone",
          correct: false,
        },
        {
          text: "B.Watches",
          correct: true,
        },
        {
          text: "C.Food",
          correct: false,
        },
        {
          text: "D.Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "?",
      answers: [
        {
          text: "A.Phone",
          correct: false,
        },
        {
          text: "B.Watches",
          correct: true,
        },
        {
          text: "C.Food",
          correct: false,
        },
        {
          text: "D.Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "?",
      answers: [
        {
          text: "A.Phone",
          correct: false,
        },
        {
          text: "B.Watches",
          correct: true,
        },
        {
          text: "C.Food",
          correct: false,
        },
        {
          text: "D.Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "?",
      answers: [
        {
          text: "A.Phone",
          correct: false,
        },
        {
          text: "B.Watches",
          correct: true,
        },
        {
          text: "C.Food",
          correct: false,
        },
        {
          text: "D.Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "?",
      answers: [
        {
          text: "A.Phone",
          correct: false,
        },
        {
          text: "B.Watches",
          correct: true,
        },
        {
          text: "C.Food",
          correct: false,
        },
        {
          text: "D.Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "?",
      answers: [
        {
          text: "A.Phone",
          correct: false,
        },
        {
          text: "B.Watches",
          correct: true,
        },
        {
          text: "C.Food",
          correct: false,
        },
        {
          text: "D.Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "?",
      answers: [
        {
          text: "A.Phone",
          correct: false,
        },
        {
          text: "B.Watches",
          correct: true,
        },
        {
          text: "C.Food",
          correct: false,
        },
        {
          text: "D.Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "?",
      answers: [
        {
          text: "A.Phone",
          correct: false,
        },
        {
          text: "B.Watches",
          correct: true,
        },
        {
          text: "C.Food",
          correct: false,
        },
        {
          text: "D.Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "?",
      answers: [
        {
          text: "A.Phone",
          correct: false,
        },
        {
          text: "B.Watches",
          correct: true,
        },
        {
          text: "C.Food",
          correct: false,
        },
        {
          text: "D.Cosmetic",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "200.000Đ" },
        { id: 2, amount: "400.000Đ" },
        { id: 3, amount: "600.000Đ" },
        { id: 4, amount: "1.000.000Đ" },
        { id: 5, amount: "2.000.000Đ" },
        { id: 6, amount: "3.000.000Đ" },
        { id: 7, amount: "6.000.000Đ" },
        { id: 8, amount: "10.000.000Đ" },
        { id: 9, amount: "14.000.000Đ" },
        { id: 10, amount: "22.000.000Đ" },
        { id: 11, amount: "30.000.000Đ" },
        { id: 12, amount: "40.000.000Đ" },
        { id: 13, amount: "60.000.000Đ" },
        { id: 14, amount: "85.000.000Đ" },
        { id: 15, amount: "150.000.000Đ" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">Bạn nhận được: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
