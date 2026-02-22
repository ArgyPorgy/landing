import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Mail } from "lucide-react";
import profileImage from "@assets/image_1771661639886.png";
import logoImage from "@assets/logo.png";
import { Button } from "@/components/ui/button";

// X (Twitter) Logo Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Instagram Icon Component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Snapchat Icon Component
const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.017 0C8.396 0 5.29 1.155 2.554 3.43c-.12.096-.12.24 0 .336C5.29 6.141 8.396 7.296 12.017 7.296c3.62 0 6.727-1.155 9.463-3.53.12-.096.12-.24 0-.336C18.744 1.155 15.637 0 12.017 0zm0 3.67c-1.883 0-3.43 1.547-3.43 3.43 0 1.883 1.547 3.43 3.43 3.43 1.883 0 3.43-1.547 3.43-3.43 0-1.883-1.547-3.43-3.43-3.43zm-6.86 6.86c-.12 0-.24.048-.336.144-.72.72-1.68 1.2-2.76 1.488-.12.048-.192.144-.192.288 0 .096.048.192.096.288.048.048.144.096.24.096.048 0 .096 0 .144-.048 1.2-.336 2.256-.864 3.024-1.632.048-.048.096-.096.144-.192 0-.048 0-.096-.048-.144 0-.048-.048-.096-.048-.144 0-.048.048-.096.048-.144zm13.72 0c0 .048.048.096.048.144 0 .048 0 .096.048.144.048.048.096.096.144.192.768.768 1.824 1.296 3.024 1.632.048.048.096.048.144.048.096 0 .192-.048.24-.096.048-.096.096-.192.096-.288 0-.144-.072-.24-.192-.288-1.08-.288-2.04-.768-2.76-1.488-.096-.096-.216-.144-.336-.144zm-6.86 2.4c-1.68 0-3.168.768-4.176 1.968-.48.576-.816 1.248-1.008 1.968-.048.192-.048.384 0 .576.048.192.144.384.288.528.144.144.336.24.528.288.192.048.384.048.576 0 .72-.192 1.392-.528 1.968-1.008 1.2-1.008 1.968-2.496 1.968-4.176 0-.192 0-.384-.048-.576-.048-.192-.144-.384-.288-.528-.144-.144-.336-.24-.528-.288-.192-.048-.384-.048-.576 0-.72.192-1.392.528-1.968 1.008z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row overflow-hidden relative selection:bg-primary selection:text-primary-foreground">
      {/* Decorative background noise */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* LEFT PANE - Sticky Profile */}
      <div className="w-full md:w-5/12 lg:w-1/3 md:h-screen md:sticky top-0 border-b md:border-b-0 md:border-r border-border p-6 md:p-12 flex flex-col justify-between z-10 bg-background/95 backdrop-blur-sm">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col"
        >
          <div className="flex-1 flex flex-col justify-center">
            <div className="relative inline-block mb-8 group w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-300"></div>
              <img 
                src={profileImage} 
                alt="Isha" 
                className="relative z-10 object-cover w-full h-full border-2 border-foreground grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading uppercase leading-none mb-2">
              Isha<span className="text-primary">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-sm">
              18 y/o builder. Crafting digital experiences.
            </p>

            <div className="mb-8 flex gap-4">
              <a href="https://x.com/ishaonchain" target="_blank" rel="noopener noreferrer" className="p-3 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/isha.lovesmatcha" target="_blank" rel="noopener noreferrer" className="p-3 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.snapchat.com/@isha.aroora" target="_blank" rel="noopener noreferrer" className="p-3 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <SnapchatIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-4 mt-auto pt-12">
              <a href="mailto:rexriot9@gmail.com" className="flex items-center gap-3 text-lg hover:text-primary transition-colors w-fit group">
                <Mail className="w-5 h-5" />
                <span>Let's talk</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT PANE - Scrolling Content */}
      <div className="w-full md:w-7/12 lg:w-2/3 p-6 md:p-12 lg:p-20 z-10">
        
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-primary w-12"></div>
            <h2 className="text-2xl md:text-3xl font-heading text-primary">About</h2>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-2xl font-sans">
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              I'm <span className="text-foreground font-bold">Isha</span>. I build apps because I love turning ideas into reality. Currently spending my days coding, designing, and exploring what's possible on the web.
            </p>
            <div className="mb-6 p-6 border-l-2 border-primary bg-card/50">
              <p className="text-lg m-0 font-bold">
                Next chapter: Planning and launching my own App Studio.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <img 
                  src="https://pbs.twimg.com/profile_images/1770009360011333632/H5BFG6-M_400x400.jpg" 
                  alt="ETHGlobal Winner 2x" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <span className="text-sm uppercase tracking-widest font-bold text-primary">ETHGlobal Winner 2x</span>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src="https://pbs.twimg.com/profile_images/1184141979493568515/NMa0vlIb_400x400.jpg" 
                  alt="MLH Winner" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <span className="text-sm uppercase tracking-widest font-bold text-primary">MLH Winner</span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-primary w-12"></div>
            <h2 className="text-2xl md:text-3xl font-heading text-primary">Currently Building</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "App Studio",
                desc: "My upcoming venture. A digital workshop where I build and scale consumer apps.",
                status: "In Progress",
                link: "#"
              },
              {
                title: "Project Zero",
                desc: "An experimental productivity tool for Gen-Z founders. Built with React and bold UI.",
                status: "Beta",
                link: "#"
              },
              {
                title: "SophistAI",
                desc: "Your Personal Syllabus Navigator. Visualize Your Syllabus, Conquer Your Coursework.",
                status: "Live",
                link: "https://sophistai.app/"
              },
              {
                title: "BlockOff",
                desc: "Sign Ethereum Transactions Offline. Secure Bluetooth and QR-based Ethereum signing. Keep your private keys offline while staying connected to the network.",
                status: "Live",
                link: "https://block-off.vercel.app/"
              }
            ].map((project, i) => (
              <div 
                key={i} 
                className="group relative border border-border bg-card p-6 md:p-8 hover:border-primary transition-colors flex flex-col"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-primary w-6 h-6" />
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${project.status === 'Live' ? 'bg-green-500' : 'bg-primary animate-pulse'}`}></div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{project.status}</span>
                </div>
                <h3 className="text-3xl font-heading mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-8 flex-1">{project.desc}</p>
                <Button 
                  variant="outline" 
                  className="w-fit rounded-none border-border hover:bg-primary hover:text-primary-foreground hover:border-primary uppercase tracking-widest text-xs"
                  asChild
                >
                  <a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}>View Project</a>
                </Button>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pb-12"
        >
          <div className="p-8 md:p-12 border border-border bg-primary text-primary-foreground relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-heading mb-4">Want to collaborate?</h2>
                <p className="text-lg max-w-md font-medium opacity-90">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-foreground hover:text-background rounded-none text-lg h-14 px-8 border border-transparent"
                asChild
              >
                <a href="https://x.com/ishaonchain" target="_blank" rel="noopener noreferrer">
                  Initiate Contact
                </a>
              </Button>
            </div>
            
            {/* Decorative oversized icon */}
            <ArrowUpRight className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </motion.section>

        <footer className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm uppercase tracking-widest">
          <p>© {new Date().getFullYear()} ISHA. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH ❤️ by me.</p>
        </footer>

      </div>
    </div>
  );
}
