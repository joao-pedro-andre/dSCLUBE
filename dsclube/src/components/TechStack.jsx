import React from 'react';

export default function TechStack({
  tecnologias = []
}) {
  return (
    <div className="tech-container">

      <h3>
        Tecnologias que praticamos
      </h3>

      <div className="tech-tags">

        {tecnologias.map((tech, idx) => (

          <span
            key={idx}
            className="tech-tag"
          >

            <code>
              #
            </code>

            {tech}

          </span>

        ))}

      </div>

    </div>
  );
}