import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Certification = {
  id: number;
  title: string;
  institution: string;
  date: string;
  credentialId: string;
  credentialUrl?: string;
  logo?: string;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: '.NET: um curso orientado para o mercado de trabalho',
      institution: 'Udemy',
      date: 'Jun 2026',
      credentialId: 'UC-22ab3a1f-4b8b-4604-95f3-571427d1b30e',
      credentialUrl: 'https://www.udemy.com/certificate/UC-22ab3a1f-4b8b-4604-95f3-571427d1b30e',
    },
    {
      id: 2,
      title: 'React Native Criando aplicativos do zero ao avançado',
      institution: 'Udemy',
      date: 'Out 2022',
      credentialId: 'UC-a51e5439-50c8-404f-87e7-645b2b62b1b8',
      credentialUrl: 'https://www.udemy.com/certificate/UC-a51e5439-50c8-404f-87e7-645b2b62b1b8',
    },
    {
      id: 3,
      title: 'Inteligência Artificial e Computacional',
      institution: 'FIAP',
      date: 'Jun 2022',
      credentialId: '772ea185c676d8d81599bac22897b051',
      credentialUrl: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/56740/772ea185c676d8d81599bac22897b051/certificado.png',
    },
    {
      id: 4,
      title: 'User Experience',
      institution: 'FIAP',
      date: 'Mai 2022',
      credentialId: '6941dbd57a08efa5c32fbf5354e16de4',
      credentialUrl: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/52143/6941dbd57a08efa5c32fbf5354e16de4/certificado.png',
    },
    {
      id: 5,
      title: 'UX Design de A a Z: tudo sobre experiência do usuário',
      institution: 'Udemy',
      date: 'Fev 2022',
      credentialId: 'UC-f763b879-64be-429b-8741-6e6024f039a4',
      credentialUrl: 'https://www.udemy.com/certificate/UC-f763b879-64be-429b-8741-6e6024f039a4',
    },
    {
      id: 6,
      title: 'Curso de JavaScript Avançado',
      institution: 'TreinaWeb',
      date: 'Nov 2021',
      credentialId: 'HY0GPHVTRPKD',
      credentialUrl: 'https://www.treinaweb.com.br/certificado/HY0GPHVTRPKD',
    },
    {
      id: 7,
      title: 'Curso de JavaScript Intermediário',
      institution: 'TreinaWeb',
      date: 'Out 2021',
      credentialId: 'ZBY3QB75WE1N',
      credentialUrl: 'https://www.treinaweb.com.br/certificado/ZBY3QB75WE1N',
    },
    {
      id: 8,
      title: 'Curso de JavaScript Básico',
      institution: 'TreinaWeb',
      date: 'Mar 2021',
      credentialId: '1KSCMNSZ4SZ3',
      credentialUrl: 'https://www.treinaweb.com.br/certificado/1KSCMNSZ4SZ3',
    },
    {
      id: 9,
      title: 'Iniciativa de Alunos para Aprimorar Experiências com Novas Tecnologias',
      institution: 'Fatec Cruzeiro',
      date: 'Nov 2020',
      credentialId: 'LDJ65ra344IpyHItXX2LVARCi2rYKjS7',
      credentialUrl: 'https://sistema.fateccruzeiro.edu.br/extensao/includes/certificado?c=LDJ65ra344IpyHItXX2LVARCi2rYKjS7',
    },
    {
      id: 10,
      title: 'Machine Learning – Redes Neurais Artificiais em Python',
      institution: 'Fatec Cruzeiro',
      date: 'Nov 2020',
      credentialId: 'aHs5WjbvgqBPZ9hqWulZUtwyTelgkkDO',
      credentialUrl: 'https://sistema.fateccruzeiro.edu.br/extensao/includes/certificado?c=aHs5WjbvgqBPZ9hqWulZUtwyTelgkkDO',
    },
    {
      id: 11,
      title: 'Model. De Dados',
      institution: 'Fundação Bradesco',
      date: 'Fev 2019',
      credentialId: '9A5E4780-64AE-4A4D-8FDD-8F6100FA330A',
    },
    {
      id: 12,
      title: 'Maratona de Programação XP',
      institution: 'Fatec Cruzeiro',
      date: 'Out 2018',
      credentialId: 'hKd7vZXldUyUf5XwnQf1B9Drl0c91eCo',
      credentialUrl: 'https://sistema.fateccruzeiro.edu.br/extensao/includes/certificado?c=hKd7vZXldUyUf5XwnQf1B9Drl0c91eCo',
    },
    {
      id: 13,
      title: 'TDD e a importância de testes no desenvolvimento',
      institution: 'Fatec Cruzeiro',
      date: 'Out 2018',
      credentialId: 'i0sG85iZMjOkYoeF1JDod2hFOF0Vwc5i',
      credentialUrl: 'https://sistema.fateccruzeiro.edu.br/extensao/includes/certificado?c=i0sG85iZMjOkYoeF1JDod2hFOF0Vwc5i',
    },
    {
      id: 14,
      title: 'Introdução À Programação Orientada a Objetos - POO',
      institution: 'Fundação Bradesco',
      date: 'Set 2018',
      credentialId: 'CA3EBE45-65F7-42F0-8408-504A242694A3',
    },
    {
      id: 15,
      title: 'Fundamentos De Ti - Hardware E Software',
      institution: 'Fundação Bradesco',
      date: 'Set 2018',
      credentialId: '52BA65F2-69E9-4456-9E2F-CF16C6965B93',
    },
    {
      id: 16,
      title: 'Treinamento Maratona de Programação',
      institution: 'Fatec Cruzeiro',
      date: 'Set 2018',
      credentialId: 'u4AO5p36YWGQuO4OptFNHfeA0tP42ZrQ',
      credentialUrl: 'https://sistema.fateccruzeiro.edu.br/extensao/includes/certificado?c=u4AO5p36YWGQuO4OptFNHfeA0tP42ZrQ',
    },
    {
      id: 17,
      title: 'Visita Técnica ao Parque Tecnológico de São José dos Campos e ao Caminhão HackaTruck IBM',
      institution: 'Fatec Cruzeiro',
      date: 'Abr 2018',
      credentialId: 'NzIL5DHNCVp2PeAAsNl3KYoetnBhdlos',
      credentialUrl: 'https://sistema.fateccruzeiro.edu.br/extensao/includes/certificado?c=NzIL5DHNCVp2PeAAsNl3KYoetnBhdlos',
    }
  ];

  const categoryLabels = {
    'backend': 'Backend',
    'frontend': 'Frontend',
    'ux': 'UX/UI',
    'data-science': 'Data Science',
    'general': 'Geral'
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Certificações
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Certificados e cursos que comprovam meu compromisso com o aprendizado contínuo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-dark-secondary border border-gray-800 rounded-lg p-3 animate-fade-in hover:border-neon-aqua/30 transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-orbitron font-semibold text-white leading-tight flex-1">
                  {cert.title}
                </h3>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-blue hover:text-neon-aqua transition-colors duration-200 flex-shrink-0 ml-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              
              <p className="text-neon-aqua font-fira text-xs mb-2">
                {cert.institution}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-fira">{cert.date}</span>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
