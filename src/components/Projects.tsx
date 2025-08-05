'use client'

const projects = [
  {
    title: 'Recipe App',
    description: 'You can save your cooking recipes and visit anytime',
    videoLink: 'https://drive.google.com/file/d/1Ed7ptg14Ny5d4dph1aCT_Ytab4gzskxM/view?usp=sharing',
    githubLink: 'https://github.com/csy20/day9',
    tags: ['Flutter', 'Dart', 'Local Storage'],
  },
  {
    title: 'News App',
    description: 'Use news API to read real-time news in real time',
    videoLink: 'https://drive.google.com/file/d/1rXCJucBNpI1m5YfAEGfk397qDy8MGQKt/view?usp=drive_link',
    githubLink: 'https://github.com/csy20/day21',
    tags: ['Flutter', 'API Integration', 'Real-time'],
  },
  {
    title: 'Weather App',
    description: 'Use weather API and you can check your current area weather in real time',
    videoLink: 'https://drive.google.com/file/d/1R0RTrw71SWnyBiGTtOusH273-INFBeYM/view?usp=sharing',
    githubLink: 'https://github.com/csy20/proj23',
    tags: ['Flutter', 'Weather API', 'Location'],
  },
  {
    title: 'GitHub View',
    description: 'You can check someone\'s GitHub profile just by their username',
    videoLink: 'https://drive.google.com/file/d/13USknzcrl-pjOdGu9ghJWKKoKXyAQR9x/view?usp=sharing',
    githubLink: 'https://github.com/csy20/proj23',
    tags: ['Flutter', 'GitHub API', 'User Profiles'],
  },
]

export function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve built with Flutter and Dart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Demo Video
                </a>
                
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
