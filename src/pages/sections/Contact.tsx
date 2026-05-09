import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Criar mailto link com os dados do formulário
    const subject = `Contato de ${formData.name}`;
    const body = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;
    window.location.href = `mailto:jhonatan.sont@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'jhonatan.sont@gmail.com',
      link: 'mailto:jhonatan.sont@gmail.com',
      color: 'neon-aqua'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      value: '(12) 98182-7621',
      link: 'tel:+5512981827621',
      color: 'neon-blue'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização',
      value: 'Piquete/SP',
      link: null,
      color: 'neon-pink'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/jhonatanluizc',
      color: 'neon-aqua'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jhonatanluizc',
      color: 'neon-blue'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto ou oportunidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="terminal-window animate-fade-in">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot bg-neon-aqua"></div>
                  <div className="terminal-dot bg-neon-blue"></div>
                  <div className="terminal-dot bg-neon-pink"></div>
                </div>
                <div className="text-xs font-fira text-gray-400">contact_info.json</div>
                <div className="w-16"></div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-neon-aqua mb-4">
                    Informações de Contato
                  </h3>
                  <p className="text-gray-300 font-fira text-sm mb-6">
                    Estou disponível para novos projetos e oportunidades. Entre em contato!
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-dark-primary/50 rounded border border-gray-700 hover:border-neon-aqua/50 transition-colors"
                  >
                    <div className={`text-${info.color} mt-1`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-fira font-semibold text-gray-200 mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className={`text-${info.color} font-fira text-sm hover:underline`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 font-fira text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="pt-6 border-t border-gray-700">
                  <h4 className="font-fira font-semibold text-gray-200 mb-4">
                    Redes Sociais
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 px-4 py-2 neon-border hover:bg-${social.color}/10 transition-all duration-300 group`}
                      >
                        <span className={`text-${social.color} group-hover:animate-pulse`}>
                          {social.icon}
                        </span>
                        <span className="font-fira text-sm">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="terminal-window animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot bg-neon-aqua"></div>
                <div className="terminal-dot bg-neon-blue"></div>
                <div className="terminal-dot bg-neon-pink"></div>
              </div>
              <div className="text-xs font-fira text-gray-400">send_message.form</div>
              <div className="w-16"></div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-orbitron font-bold text-neon-aqua mb-6">
                Envie uma Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-fira text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-primary border border-gray-700 rounded font-fira text-white focus:border-neon-aqua focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-fira text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-primary border border-gray-700 rounded font-fira text-white focus:border-neon-aqua focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-fira text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-primary border border-gray-700 rounded font-fira text-white focus:border-neon-aqua focus:outline-none transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-aqua to-neon-blue text-dark-primary font-orbitron font-bold rounded hover:shadow-lg hover:shadow-neon-aqua/50 transition-all duration-300 group"
                >
                  <span>Enviar Mensagem</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
