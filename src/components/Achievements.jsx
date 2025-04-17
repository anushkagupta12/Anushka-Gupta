import React from 'react';

const achievementsData = [
  { text: 'Amazon FFE Scholar (Top 500 in India)', icon: '🏆' },
  { text: 'Solved 450+ DSA Problems on LeetCode', icon: '✅' },
  { text: 'Python Certification from Udemy', icon: '📜' },
  { text: 'Speaker at NEP Conference, NERIST', icon: '🎤' },
];

const Achievements = () => {
  return (
    <section id = "achievements" className="bg-gradient-to-r from-indigo-100 via-white to-purple-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-10">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg flex items-center"
            >
              <span className="text-3xl mr-4">{achievement.icon}</span>
              <p className="text-lg text-gray-700">{achievement.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;