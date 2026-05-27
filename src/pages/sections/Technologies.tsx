const Technologies = () => {
    // 'Azure', 'AWS', Google Cloud, Docker, Kubernetes
    const technologies = [
        '.NET', 
        '.NET Framework', 
        'Android Studio', 
        'Apache Cordova', 
        'App Store', 
        'Aplicativos móveis', 
        'Bootstrap', 
        'C#', 
        'Desenvolvimento de software', 
        'Desenvolvimento web', 
        'Git', 
        'Github', 
        'Google Play Console', 
        'JavaScript', 
        'MongoDB', 
        'Node.js', 
        'PostgreSQL', 
        'Python', 
        'React', 
        'React Native', 
        'Redes neurais artificiais', 
        'SQL', 
        'SQL Server', 
        'Tailwind CSS', 
        'TypeScript', 
        'Webflow', 
        'Xcode'
    ];

    return (
        <section className="relative w-full overflow-hidden border-y border-gray-800/50">
            {/* Desktop: Single Line */}
            <div className="hidden md:block py-4 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <span
                            key={index}
                            className="mx-6 text-lg font-fira text-neon-pink/80 hover:text-neon-pink transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Mobile: 3 Lines */}
            <div className="md:hidden">
                {/* Line 1 - Left to Right (starts at beginning) */}
                <div className="py-3 border-b border-gray-800/30 overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...technologies.slice(0), ...technologies.slice(0)].map((tech, index) => (
                            <span
                                key={index}
                                className="mx-4 text-sm font-fira text-neon-aqua/80 hover:text-neon-aqua transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Line 2 - Right to Left (starts at 1/3) */}
                <div className="py-3 border-b border-gray-800/30 overflow-hidden">
                    <div className="flex animate-marquee-reverse whitespace-nowrap">
                        {[...technologies.slice(9), ...technologies.slice(0, 9), ...technologies.slice(9), ...technologies.slice(0, 9)].map((tech, index) => (
                            <span
                                key={index}
                                className="mx-4 text-sm font-fira text-neon-pink/80 hover:text-neon-pink transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Line 3 - Left to Right (starts at 2/3) */}
                <div className="py-3 overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...technologies.slice(18), ...technologies.slice(0, 18), ...technologies.slice(18), ...technologies.slice(0, 18)].map((tech, index) => (
                            <span
                                key={index}
                                className="mx-4 text-sm font-fira text-neon-blue/80 hover:text-neon-blue transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;