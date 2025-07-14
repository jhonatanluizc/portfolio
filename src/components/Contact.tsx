
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jhonatan@example.com',
      href: 'mailto:jhonatan@example.com',
      color: 'neon-aqua'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/jhonatan-chagas',
      href: 'https://linkedin.com/in/jhonatan-chagas',
      color: 'neon-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@jhonatan-chagas',
      href: 'https://github.com/jhonatan-chagas',
      color: 'neon-pink'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Ready to discuss your next project? I'm always excited to collaborate on innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="terminal-window animate-fade-in">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot bg-neon-aqua"></div>
                <div className="terminal-dot bg-neon-blue"></div>
                <div className="terminal-dot bg-neon-pink"></div>
              </div>
              <div className="text-xs font-fira text-gray-400">contact_form.js</div>
              <div className="w-16"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-orbitron font-bold text-neon-aqua mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-fira text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-primary border border-neon-aqua/30 rounded-lg focus:border-neon-aqua focus:ring-2 focus:ring-neon-aqua/20 transition-all duration-300 text-white font-fira"
                    placeholder="Your name"
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
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-primary border border-neon-blue/30 rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 text-white font-fira"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-fira text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-primary border border-neon-pink/30 rounded-lg focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/20 transition-all duration-300 text-white font-fira resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-neon-aqua to-neon-blue text-dark-primary font-fira font-semibold rounded-lg hover:from-neon-blue hover:to-neon-pink transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-dark-primary mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="hud-panel animate-fade-in">
              <div className="terminal-header mb-6">
                <div className="terminal-dots">
                  <div className="terminal-dot bg-green-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-red-500"></div>
                </div>
                <div className="text-xs font-fira text-gray-400">contact_info.json</div>
                <div className="w-16"></div>
              </div>

              <h3 className="text-xl font-orbitron font-bold text-neon-blue mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 bg-dark-primary/50 rounded-lg border border-${method.color}/30 hover:border-${method.color} hover:bg-${method.color}/10 transition-all duration-300 group`}
                  >
                    <div className={`p-3 bg-${method.color}/20 rounded-lg group-hover:animate-pulse`}>
                      <method.icon className={`w-6 h-6 text-${method.color}`} />
                    </div>
                    <div>
                      <div className="font-fira font-semibold text-white">{method.label}</div>
                      <div className="font-fira text-sm text-gray-400">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="hud-panel animate-fade-in">
              <h3 className="text-xl font-orbitron font-bold text-neon-pink mb-6">
                Let's Build Something Amazing
              </h3>
              
              <div className="space-y-4 font-fira text-gray-300 text-sm">
                <p>
                  <span className="text-neon-aqua">🚀 Available for:</span> Full-time opportunities, 
                  freelance projects, and consulting work
                </p>
                <p>
                  <span className="text-neon-blue">⏰ Response time:</span> Usually within 24 hours
                </p>
                <p>
                  <span className="text-neon-pink">🌍 Location:</span> Remote-friendly, based in Brasil
                </p>
                <p>
                  <span className="text-yellow-400">☕ Fun fact:</span> Best reached with a good 
                  project idea and coffee enthusiasm!
                </p>
              </div>
            </div>

            <div className="hud-panel animate-fade-in">
              <h3 className="text-xl font-orbitron font-bold text-yellow-400 mb-4">
                Current Status
              </h3>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-fira text-gray-300">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
