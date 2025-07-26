import React from 'react';

const Disclaimer = () => {
  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Confidential Project Disclaimer</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This project, "Confidential Dashboard App," is part of my professional work at a previous company. Due to confidentiality agreements and company policies, I am unable to share a live demo or the full source code.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          The information presented here is for portfolio demonstration purposes only and provides a high-level overview of my contributions and the technologies used. It does not reflect the full scope, complexity, or proprietary details of the actual project.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Technologies used include: React, TypeScript, Tailwind CSS, Chart.js.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          For further inquiries or to discuss my experience with similar projects, please feel free to contact me at <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline dark:text-blue-400">your.email@example.com</a>.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
          Last updated: July 26, 2025. Project is ongoing.
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;
