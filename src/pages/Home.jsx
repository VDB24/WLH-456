import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      title: "AI Learning Assistant",
      description: "Get personalized guidance and micro-videos on demand",
      icon: "🤖"
    },
    {
      title: "Project Hub",
      description: "Collaborate on real-world projects with other learners",
      icon: "🚀"
    },
    {
      title: "Badges & Portfolio",
      description: "Earn recognition and build your professional profile",
      icon: "🏆"
    },
    {
      title: "Community Challenges",
      description: "Participate in hackathons and climb the leaderboards",
      icon: "🎯"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-secondary/10 dark:from-dark-bg dark:to-primary/10 pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Learn. Build. Grow Together.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Experience the future of learning with our AI-powered platform. Connect with peers, build real projects, and accelerate your growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/projects"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Explore Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Modes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Learning Modes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">📚 Curated Knowledge Library</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Access our carefully curated collection of learning resources, filtered and tagged for easy discovery.</p>
            <Link to="/learn" className="text-primary font-semibold hover:underline">Browse Library →</Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">🤖 Ask AI</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Get instant answers and generate custom learning materials with our AI assistant.</p>
            <Link to="/ask" className="text-primary font-semibold hover:underline">Start Learning →</Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Join Our Growing Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Chen</h4>
                  <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">"The collaborative projects helped me build a strong portfolio and land my dream job."</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">James Wilson</h4>
                  <p className="text-gray-600 dark:text-gray-400">UI/UX Designer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">"The AI assistant is like having a personal mentor available 24/7."</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Maria Garcia</h4>
                  <p className="text-gray-600 dark:text-gray-400">Data Scientist</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">"The community challenges pushed me to learn new skills and make great connections."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}