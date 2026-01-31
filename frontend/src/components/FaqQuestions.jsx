import React, { useState } from "react";

const faqLeft = [
  {
    question: "What Is The Duration And Frequency Of Class?",
    answer:
      "Classes are usually held 2–3 times a week. Each session lasts approximately 60 minutes.",
  },
  {
    question: "Do You Need Any Previous Dance Training To Join The Class?",
    answer:
      "The beginners module of Odissi does not require prior training in any dance form. It is designed for complete beginners.",
  },
  {
    question: "What Is The Age Limit?",
    answer:
      "There is no strict age limit. Anyone with interest and dedication can join the classes.",
  },
  {
    question: "I Have Knee/Back/Joint Issues. Is It Ok For Me To Join?",
    answer:
      "Yes, but please inform the instructor beforehand so movements can be adapted safely.",
  },
  {
    question: "Who Conducts / Teaches The Class?",
    answer:
      "Classes are conducted by trained and experienced Odissi dance professionals.",
  },
];

const faqRight = [
  {
    question: "How Effective Is Online Learning?",
    answer:
      "We have a structured module-based program with personalized guidance, making online learning effective and engaging.",
  },
  {
    question: "What Is The Structure Of The Module?",
    answer:
      "The module includes warm-ups, technique training, choreography, theory, and revision sessions.",
  },
  {
    question: "What If I Miss A Class?",
    answer:
      "Recorded sessions or revision classes are provided so you can catch up.",
  },
  {
    question: "When Are The Classes Usually Held?",
    answer:
      "Classes are generally held in the morning or evening depending on batch availability.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border border-[#e6d5c3] rounded-md mb-4 bg-white">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800"
      >
        {item.question}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
};

const FaqQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#faf7f3] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-serif text-center mb-14">
          Frequently Asked Questions
        </h2>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            {faqLeft.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {faqRight.map((item, index) => {
              const realIndex = index + faqLeft.length;
              return (
                <AccordionItem
                  key={realIndex}
                  item={item}
                  isOpen={openIndex === realIndex}
                  onClick={() => handleToggle(realIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqQuestions;
