import React, { useState } from "react";

const modulesData = [
  {
    category: "Kids",
    levels: [
      {
        title: "Level 0 - Kids",
        content:
          "This module introduces young learners to the basics of Odissi through fun movements, rhythm exercises, posture training, and simple expressions. Focus is on body coordination, musicality, and building interest in classical dance.",
      },
    ],
  },
  {
    category: "Beginner",
    levels: [
      {
        title: "Level 1 - Beginners Module",
        content:
          "Introduction to Odissi fundamentals including Chowka and Tribhangi, basic footwork, hand gestures (Hastas), eye movements, and rhythm patterns. Ideal for absolute beginners.",
      },
      {
        title: "Level 2 - Pallavi Module",
        content:
          "Focus on learning Pallavi with emphasis on grace, posture, coordination, and understanding musical structure. Students develop strength, flexibility, and rhythmic clarity.",
      },
      {
        title: "Level 3 - Angashuddhi Module",
        content:
          "Detailed body alignment training to refine posture, movements, and transitions. This module improves precision, stamina, and overall dance aesthetics.",
      },
    ],
  },
  {
    category: "Intermediate",
    levels: [
      {
        title: "Level 4 - Sthai Module",
        content:
          "Learning structured Sthai compositions with rhythmic variations. Focus on stamina building, movement clarity, and stage presence.",
      },
      {
        title: "Level 5 - Abhinaya Module",
        content:
          "Introduction to facial expressions (Abhinaya), storytelling, emotions (Rasas), and interpretation of lyrics. Enhances expressive skills and emotional depth.",
      },
    ],
  },
  {
    category: "Advanced",
    levels: [
      {
        title: "Level 6 - Megh Pallavi",
        content:
          "Advanced Pallavi training focusing on speed control, intricate movements, complex rhythms, and musical interpretation.",
      },
      {
        title: "Level 7 - Champu Module",
        content:
          "Learning Champu compositions combining Nritta and Abhinaya. Focus on storytelling, coordination, and expressive balance.",
      },
      {
        title: "Level 8 - Dashavatar Module",
        content:
          "Advanced repertoire focusing on the Dashavatar theme. Emphasis on character portrayal, expression, and performance readiness.",
      },
    ],
  },
];

const Moduls = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let count = 0;

  return (
    <section className="bg-[#f9f6f2] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">
          Modules
        </h2>

        {modulesData.map((group) => (
          <div key={group.category} className="mb-10">
            <h3 className="text-xl font-semibold text-[#b56b4b] mb-4">
              {group.category}:
            </h3>

            {group.levels.map((level) => {
              const currentIndex = count++;
              return (
                <div
                  key={currentIndex}
                  className="border border-[#e2d3c2] mb-3 bg-white"
                >
                  <button
                    onClick={() => toggle(currentIndex)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-medium"
                  >
                    {level.title}
                    <span className="text-xl">
                      {openIndex === currentIndex ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === currentIndex && (
                    <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                      {level.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Moduls;
