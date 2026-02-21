import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Github, Twitter, Mail } from "lucide-react";
import profileImage from "@assets/image_1771661639886.png";
import logoImage from "@assets/logo.png";
import { Button } from "@/components/ui/button";

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
          <div className="mb-8">
            <img src={logoImage} alt="Isha Logo" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          </div>

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

            <div className="space-y-4 mt-auto pt-12">
              <a href="mailto:hello@example.com" className="flex items-center gap-3 text-lg hover:text-primary transition-colors w-fit group">
                <Mail className="w-5 h-5" />
                <span>Let's talk</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <div className="flex gap-4">
                <a href="#" className="p-3 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
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
            <div className="p-6 border-l-2 border-primary bg-card/50">
              <p className="text-lg m-0 font-bold">
                Next chapter: Planning and launching my own App Studio.
              </p>
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
                title: "Design System",
                desc: "A brutalist-inspired open source UI kit for developers who hate boring websites.",
                status: "Live",
                link: "#"
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
                  <a href={project.link}>View Project</a>
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
              >
                Initiate Contact
              </Button>
            </div>
            
            {/* Decorative oversized icon */}
            <ArrowUpRight className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </motion.section>

        <footer className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm uppercase tracking-widest">
          <p>© {new Date().getFullYear()} ISHA. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH PASSION.</p>
        </footer>

      </div>
    </div>
  );
}
