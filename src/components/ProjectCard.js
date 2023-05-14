import React from "react";

export default function ProjectCard({ image, altText, title, description, tools, github, application}) {
  return (
    <div class="max-w-md m-4 rounded shadow-lg project-card">
      <img
        class="w-full project-image"
        src={image}
        alt={altText}
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base m-3">
            {description}
        </p>
        <p class="text-gray-700 text-base m-3">
            <strong>Github: </strong><a href={github}>{github}</a>
        </p>
        <p class="text-gray-700 text-base">
            <strong>Application: </strong><a href={application}>{application}</a>
        </p>
      </div>
      <div>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-3">
          {tools}
        </span>
      </div>
    </div>
  );
}
