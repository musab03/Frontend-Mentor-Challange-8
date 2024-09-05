import bg from './assets/images/background-pattern-desktop.svg';
import star from './assets/images/icon-star.svg';
import { useState } from 'react';

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index:any) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  const faqs = [
    {
      question: 'What is Frontend Mentor, and how will it help me?',
      answer: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`,
    },
    {
      question: 'Is Frontend Mentor free?',
      answer: `Frontend Mentor offers both free and premium challenges. The free plan gives you access to a range of challenges, but the premium plans offer more advanced challenges and design assets.`,
    },
    {
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer: `Yes, you can use Frontend Mentor projects to showcase your coding skills in your portfolio.`,
    },
    {
      question: 'How can I get help if I am stuck on a challenge?',
      answer: `You can get help from the Frontend Mentor community. They have an active Slack group where you can ask questions and get feedback.`,
    },
  ];

  return (
    <>
      <img src={bg} alt="bg-image" className="w-full" />

      <div className="bg-white flex flex-col w-full mx-auto max-w-full md:max-w-lg lg:max-w-md absolute top-20 md:top-28 right-0 md:right-1/3 p-4 md:p-6 rounded-xl">
        <h1 className="bg-white flex items-center text-purple-950 font-bold text-3xl md:text-5xl lg:text-6xl">
          <span className="mr-4">
            <img src={star} alt="star-icon" className="w-6 md:w-10 lg:w-12" />
          </span>
          FAQs
        </h1>

        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleDropdown(index)}
              className="flex flex-row justify-between items-center mt-5 text-left text-sm md:text-base lg:text-lg text-purple-950 font-bold w-full"
            >
              {faq.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25" height="25" /* Set default size */
                className="transition-transform duration-100 w-6 md:w-8 lg:w-10"
                fill="none"
                viewBox="0 0 30 31"
              >
                {openIndex === index ? (
                  <path
                    fill="#301534"
                    d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                  />
                ) : (
                  <path
                    fill="#AD28EB"
                    d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                  />
                )}
              </svg>
            </button>

            <div
              className={`mt-4 overflow-hidden transition-all duration-1000 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-purple-950 mb-4 text-sm md:text-base">{faq.answer}</p>
            </div>

            <div className="bg-gray-200 h-[1px]"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
