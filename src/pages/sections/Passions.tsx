import { Code2, Smartphone, Layers, GitBranch, Zap, BookOpen, Database, Cloud, FileCode, Workflow } from 'lucide-react';

const Passions = () => {

    // 'Azure', 'AWS', Google Cloud, Docker, Kubernetes
    const technologies = ['.NET', '.NET Framework', 'Android Studio', 'Apache Cordova', 'App Store', 'Aplicativos móveis', 'Bootstrap', 'C#', 'Desenvolvimento de software', 'Desenvolvimento web', 'Git', 'Github', 'Google Play Console', 'JavaScript', 'MongoDB', 'Node.js', 'PostgreSQL', 'Python', 'React', 'React Native', 'Redes neurais artificiais', 'SQL', 'SQL Server', 'Tailwind CSS', 'TypeScript', 'Webflow', 'Xcode'];

    const neonColors = ["neon-aqua", "neon-pink", "neon-blue"];
    function getRandomColor() {
        return neonColors[Math.floor(Math.random() * neonColors.length)];
    }

    const passions = [
        {
            icon: <Code2 className="w-12 h-12" />,
            title: "Clean Code",
            description: "Sigo as melhores práticas de desenvolvimento, aplicando princípios SOLID e sempre focando em escrever código limpo, eficiente e manutenível.",
        },
        {
            icon: <Smartphone className="w-12 h-12" />,
            title: "Desenvolvimento Mobile",
            description: "Especialista em React Native, desenvolvendo aplicativos móveis com foco em performance, integrações de APIs e experiência do usuário.",
        },
        {
            icon: <Layers className="w-12 h-12" />,
            title: "Full Stack Engineer",
            description: "Mais de 5 anos de experiência com desenvolvimento completo, do frontend com React ao backend com .NET e C#, integrando sistemas escaláveis.",
        },
        {
            icon: <GitBranch className="w-12 h-12" />,
            title: "Arquitetura de Software",
            description: "Experiência em definição de arquitetura, modelagem de dados e decisões técnicas com foco em performance, segurança e estabilidade.",
        },
        {
            icon: <Zap className="w-12 h-12" />,
            title: "Otimização de Performance",
            description: "Especializado em otimizar aplicações web e mobile, melhorando tempo de resposta e experiência do usuário em produção.",
        },
        {
            icon: <Cloud className="w-12 h-12" />,
            title: "REST APIs & Integrações",
            description: "Desenvolvimento e integração de APIs REST, conectando sistemas diversos com foco em escalabilidade e confiabilidade.",
        },
        {
            icon: <Database className="w-12 h-12" />,
            title: "Banco de Dados",
            description: "Experiência em modelagem de dados e desenvolvimento com SQL Server, garantindo estruturas eficientes e otimizadas.",
        },
        {
            icon: <FileCode className="w-12 h-12" />,
            title: "TypeScript & JavaScript",
            description: "Desenvolvimento moderno utilizando TypeScript para aplicações type-safe e JavaScript para soluções web robustas.",
        },
        {
            icon: <Workflow className="w-12 h-12" />,
            title: "CI/CD & Deploy",
            description: "Experiência com ciclo completo de desenvolvimento, desde implementação até deploy e manutenção em produção (Play Store e App Store).",
        }
    ];

    return (
        <section id="passions" className="py-20 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-12 gap-1 h-full">
                    {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border border-neon-aqua/20"></div>
                    ))}
                </div>
            </div>

            {/* Section Content */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        <span className="gradient-text">Construindo soluções</span>
                        <br />
                        <span className="text-white">escaláveis e inovadoras</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-4 sm:mb-6"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {passions.map((passion, index) => {
                        const color = getRandomColor();
                        return (
                            <div
                                key={index}
                                className="group p-6 rounded-lg border border-gray-800 bg-dark-secondary/50 hover:bg-dark-secondary transition-all duration-300 hover:border-neon-aqua/50 hover:shadow-lg hover:shadow-neon-aqua/20"
                            >
                                <div className={`text-${color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                                    {passion.icon}
                                </div>
                                <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                                    {passion.title}
                                </h3>
                                <p className="text-gray-400 font-fira text-sm leading-relaxed">
                                    {passion.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Technologies Marquee - Responsive Lines */}
            <div className="relative w-full overflow-hidden mt-8 border-y border-gray-800/50">
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
            </div>
        </section>
    );
};

export default Passions;