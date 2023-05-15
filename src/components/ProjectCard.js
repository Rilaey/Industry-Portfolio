import React from "react";

export default function ProjectCard({ image, altText, title, description, tools, github, application}) {
  return (
    <div class="max-w-md m-4 overflow-scroll rounded shadow-lg project-card flex flex-col items-center text-center">
      <img
        class="project-image"
        src={image}
        alt={altText}
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2" style={{ color: "#fff"}}>{title}</div>
        <p class="text-base m-3" style={{ color: "#fff"}}>
            {description}
        </p>
        <p class="text-base m-3" style={{ color: "#fff"}}>
            <strong>Github: </strong><a href={github} style={{ color: "#3086db"}}>{github}</a>
        </p>
        <p class="text-base m-3" style={{ color: "#fff"}}>
            <strong>Application: </strong><a href={application} style={{ color: "#3086db"}}>{application}</a>
        </p>
      </div>
      <div>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-4">
          {tools}
        </span>
      </div>
    </div>
  );
}
