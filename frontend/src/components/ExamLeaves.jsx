import React from "react";

const examLevels = [
  {
    title: "Prarambhik",
    subtitle: "2 year Preliminary Course",
    description:
      "This is the foundational level designed to introduce students to the basics of Odissi dance, including fundamental techniques, theory, and rhythm.",
  },
  {
    title: "Praveshika",
    subtitle: "2-year Intermediate level course after Prarambhik",
    description:
      "This level builds upon foundational knowledge with increased focus on technique, repertoire, musical understanding, and performance skills.",
  },
  {
    title: "Madhyama",
    subtitle: "2-year Diploma level course after Praveshika",
    description:
      "An advanced diploma-level course emphasizing refined technique, expressive depth, theoretical knowledge, and performance readiness.",
  },
  {
    title: "Visharad",
    subtitle:
      "Visharad (2-year course after Madhyama) is treated as equivalent to Bachelor degree in Odissi Dance",
    description:
      "This is the highest examination level, focusing on mastery of Odissi dance, advanced repertoire, teaching skills, and professional performance competence.",
  },
];

const ExamLevels = () => {
  return (
    <section className="bg-[#fbf1e8] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-serif text-center mb-14">
          Exam Levels
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {examLevels.map((level, index) => (
            <div
              key={index}
              className="border border-[#e2d3c2] bg-[#fff8f1] rounded-lg p-6 text-center
                         hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-serif text-[#b56b4b] mb-2">
                {level.title}
              </h3>

              <p className="text-sm font-medium text-gray-800 mb-3">
                {level.subtitle}
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamLevels;
