import React from "react";

export default function EducationCard({ photo, altText, title, message, location, time }) {
  return (
    <>
      <div style={{ backgroundColor: "#616065"}} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="more-info-pictures w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg rounded-lg p-2"
          src={photo}
          alt={altText}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {time}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {location}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {message}
          </p>
        </div>
      </div>
    </>
  );
}
