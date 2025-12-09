import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaJava,
    FaPhp,
    FaLaravel,
    FaReact,
    FaGitAlt
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";

export default function Skills() {
    const skills = [
        { nombre: "HTML5", icono: <FaHtml5 className="skill-icon html" /> },
        { nombre: "CSS3", icono: <FaCss3Alt className="skill-icon css" /> },
        { nombre: "JavaScript", icono: <FaJs className="skill-icon js" /> },
        { nombre: "Bootstrap", icono: <FaBootstrap className="skill-icon bootstrap" /> },
        { nombre: "Java", icono: <FaJava className="skill-icon java" /> },
        { nombre: "PHP", icono: <FaPhp className="skill-icon php" /> },
        { nombre: "Laravel", icono: <FaLaravel className="skill-icon laravel" /> },
        { nombre: "React", icono: <FaReact className="skill-icon react" /> },
        { nombre: "MySQL", icono: <SiMysql className="skill-icon mysql" /> },
        { nombre: "Git", icono: <FaGitAlt className="skill-icon git" /> }
    ];

    return (
        <section className="section">
            <h2>Stack Tecnológico</h2>

            <div className="skills-row">
                {skills.map((skill) => (
                    <div className="skill" key={skill.nombre}>
                        {skill.icono}
                    </div>
                ))}
            </div>
        </section>
    );
}
