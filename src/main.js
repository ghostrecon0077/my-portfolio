import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="text-xl font-bold text-white animate-fade-in">
            <span class="text-blue-500">Syed</span> Awais Shah
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="nav-link text-gray-300 hover:text-blue-500 transition-colors duration-200">Home</a>
            <a href="#about" class="nav-link text-gray-300 hover:text-blue-500 transition-colors duration-200">About</a>
            <a href="#projects" class="nav-link text-gray-300 hover:text-blue-500 transition-colors duration-200">Projects</a>
            <a href="#skills" class="nav-link text-gray-300 hover:text-blue-500 transition-colors duration-200">Skills</a>
            <a href="#contact" class="nav-link text-gray-300 hover:text-blue-500 transition-colors duration-200">Contact</a>
          </div>
          <!-- Mobile menu button -->
          <button class="md:hidden p-2" id="mobile-menu-btn">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <!-- Mobile menu -->
        <div class="md:hidden hidden pb-4" id="mobile-menu">
          <div class="flex flex-col space-y-2">
            <a href="#home" class="nav-link text-gray-300 hover:text-blue-500 py-2">Home</a>
            <a href="#about" class="nav-link text-gray-300 hover:text-blue-500 py-2">About</a>
            <a href="#projects" class="nav-link text-gray-300 hover:text-blue-500 py-2">Projects</a>
            <a href="#skills" class="nav-link text-gray-300 hover:text-blue-500 py-2">Skills</a>
            <a href="#contact" class="nav-link text-gray-300 hover:text-blue-500 py-2">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-b from-black to-gray-900">
      <div class="max-w-6xl mx-auto w-full">
        <div class="text-center animate-fade-in">
          <div class="mb-6">
            <span class="text-blue-500 text-lg font-medium">Hello, I'm</span>
          </div>
          <h1 class="text-5xl sm:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Syed Awais Shah
            </span>
          </h1>
          <h2 class="text-2xl sm:text-3xl text-gray-300 mb-8 font-light">
            AI Developer & Backend Specialist
          </h2>
          <p class="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting intelligent solutions with AI, APIs, and bots to solve real-world problems.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#projects" class="btn-primary">View My Work</a>
            <a href="#contact" class="btn-secondary !text-white !border-white hover:!bg-white hover:!text-gray-900">Get In Touch</a>
          </div>
          <!-- Floating Animation Elements -->
          <div class="relative">
            <div class="absolute top-0 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-float opacity-70"></div>
            <div class="absolute top-12 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-float opacity-60" style="animation-delay: 2s;"></div>
            <div class="absolute bottom-0 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-float opacity-50" style="animation-delay: 4s;"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="section-title text-white">About Me</h2>
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-up">
            <h3 class="text-2xl font-semibold text-white mb-6">
              Passionate AI Enthusiast & Developer
            </h3>
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
              I'm Syed Awais Shah, an AI enthusiast and student developer based in Peshawar, Pakistan. In my final year of BSc Electrical Engineering, I’ve gained a year of experience specializing in AI-driven solutions, including fine-tuning LLMs, creating RAG pipelines, and developing bots and APIs.
            </p>
            <p class="text-gray-300 text-lg leading-relaxed mb-8">
              My passion lies in leveraging AI for research and innovation. In my free time, I enjoy gaming, testing various LLMs for research purposes, reading, and listening to music. I’ve also completed an AI course from NAVTTC, Pakistan Government.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center p-4 bg-gray-800 rounded-lg">
                <div class="text-3xl font-bold text-blue-500 mb-2">5</div>
                <div class="text-gray-300">Projects Completed</div>
              </div>
              <div class="text-center p-4 bg-gray-800 rounded-lg">
                <div class="text-3xl font-bold text-purple-500 mb-2">1</div>
                <div class="text-gray-300">Year Experience</div>
              </div>
            </div>
          </div>
          <div class="relative flex justify-center">
  <img src="/my-portfolio/profile.jpg" alt="Syed Awais Shah" class="w-72 h-72 rounded-full object-cover grayscale filter hover:grayscale-0 transition duration-300">
</div>
          </div>
        </div>
      </div>
    </section>

   <!-- Skills Section -->
<section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
  <div class="max-w-6xl mx-auto">
    <h2 class="section-title text-white">Skills & Technologies</h2>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-gray-900 p-8 rounded-lg border border-gray-800">
        <h3 class="text-xl font-semibold mb-6 text-white">AI & Backend Development</h3>
        <div class="space-y-4">
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-gray-300">Python</span>
              <span class="text-gray-400">70%</span>
            </div>
            <div class="w-full bg-gray-800 rounded-full h-2.5">
              <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" style="width: 70%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-gray-300">REST API</span>
              <span class="text-gray-400">60%</span>
            </div>
            <div class="w-full bg-gray-800 rounded-full h-2.5">
              <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" style="width: 60%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-gray-300">Bot Development</span>
              <span class="text-gray-400">90%</span>
            </div>
            <div class="w-full bg-gray-800 rounded-full h-2.5">
              <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" style="width: 90%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-gray-300">RAG Pipelines</span>
              <span class="text-gray-400">60%</span>
            </div>
            <div class="w-full bg-gray-800 rounded-full h-2.5">
              <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" style="width: 60%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-gray-300">Java</span>
              <span class="text-gray-400">80%</span>
            </div>
            <div class="w-full bg-gray-800 rounded-full h-2.5">
              <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" style="width: 80%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <h2 class="section-title text-white">Featured Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <div class="card overflow-hidden">
            <div class="bg-gradient-to-br from-blue-600 to-purple-600 h-48 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="text-4xl mb-2">🤖</div>
                <p class="text-sm opacity-80">Custom LLM</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-xl mb-2 text-white">Electrical Engineering LLM</h3>
              <p class="text-gray-300 mb-4">Fine-tuned GPT-2 to create a specialized LLM for electrical engineering applications.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Python</span>
                <span class="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">GPT-2</span>
              </div>
              <div class="flex space-x-3">
                <a href="https://github.com/ghostrecon0077" target="_blank" class="text-blue-500 hover:text-blue-300 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>
          <!-- Project 2 -->
          <div class="card overflow-hidden">
            <div class="bg-gradient-to-br from-green-600 to-blue-600 h-48 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="text-4xl mb-2">🐧</div>
                <p class="text-sm opacity-80">Twitter NFT Bot</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-xl mb-2 text-white">Twitter NFT Bot</h3>
              <p class="text-gray-300 mb-4">Developed a bot that fetches NFT sales from Aptos and Wapal.io, posting updates for Aptos Penguins on Twitter.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Python</span>
                <span class="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">REST API</span>
              </div>
              <div class="flex space-x-3">
                <a href="https://github.com/ghostrecon0077" target="_blank" class="text-blue-500 hover:text-blue-300 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>
          <!-- Project 3 -->
          <div class="card overflow-hidden">
            <div class="bg-gradient-to-br from-purple-600 to-pink-600 h-48 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="text-4xl mb-2">🌐</div>
                <p class="text-sm opacity-80">Custom Websites</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-xl mb-2 text-white">Client Websites</h3>
              <p class="text-gray-300 mb-4">Built two custom websites for clients, focusing on responsive design and user experience.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">HTML</span>
                <span class="bg-pink-100 text-pink-800 text-sm px-2 py-1 rounded">Tailwind CSS</span>
                <span class="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">JavaScript</span>
              </div>
              <div class="flex space-x-3">
                <a href="https://github.com/ghostrecon0077" target="_blank" class="text-blue-500 hover:text-blue-300 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>
          <!-- Project 4 -->
          <div class="card overflow-hidden">
            <div class="bg-gradient-to-br from-yellow-600 to-blue-600 h-48 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="text-4xl mb-2">📡</div>
                <p class="text-sm opacity-80">Colpitts Oscillator</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-xl mb-2 text-white">Colpitts Oscillator</h3>
              <p class="text-gray-300 mb-4">Designed and implemented a Colpitts oscillator as part of university coursework.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Electronics</span>
              </div>
              <div class="flex space-x-3">
                <a href="https://github.com/ghostrecon0077" target="_blank" class="text-blue-500 hover:text-blue-300 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>
          <!-- Project 5 -->
          <div class="card overflow-hidden">
            <div class="bg-gradient-to-br from-green-600 to-gray-600 h-48 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="text-4xl mb-2">🖩</div>
                <p class="text-sm opacity-80">8051 Calculator</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-xl mb-2 text-white">8051 Microcontroller Calculator</h3>
              <p class="text-gray-300 mb-4">Developed a calculator using the 8051 microcontroller for university project.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Microcontroller</span>
              </div>
              <div class="flex space-x-3">
                <a href="https://github.com/ghostrecon0077" target="_blank" class="text-blue-500 hover:text-blue-300 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <a href="https://github.com/ghostrecon0077" target="_blank" class="btn-secondary !text-white !border-white hover:!bg-white hover:!text-gray-900">View All Projects</a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
        <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Got an AI-driven project or need a robust backend? Let's collaborate to bring your ideas to life!
        </p>
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Email</h3>
            <p class="text-gray-400">shahawais35@gmail.com</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Phone</h3>
            <p class="text-gray-400">+923179911378</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Location</h3>
            <p class="text-gray-400">Peshawar, Pakistan</p>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:shahawais35@gmail.com" class="btn-primary">Send Email</a>
          <a href="https://github.com/ghostrecon0077" target="_blank" class="btn-secondary !text-white !border-white hover:!bg-white hover:!text-gray-900">View GitHub</a>
          <a href="https://www.linkedin.com/in/syed-awais-shah-b739982bb/" target="_blank" class="btn-secondary !text-white !border-white hover:!bg-white hover:!text-gray-900">LinkedIn</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-400 mb-4 md:mb-0">
            © 2025 Syed Awais Shah. All rights reserved.
          </div>
          <div class="flex space-x-6">
            <a href="https://www.linkedin.com/in/syed-awais-shah-b739982bb/" target="_blank" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/ghostrecon0077" target="_blank" class="text-gray-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
`

// JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Add active state to navigation based on scroll position
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        // Remove active class from all nav links
        navLinks.forEach(link => {
          link.classList.remove('text-blue-500', 'font-semibold');
          link.classList.add('text-gray-300');
        });
        
        // Add active class to current nav link
        const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.remove('text-gray-300');
          activeLink.classList.add('text-blue-500', 'font-semibold');
        }
      }
    });
  }

  // Listen for scroll events
  window.addEventListener('scroll', updateActiveNav);
  
  // Initialize active nav on page load
  updateActiveNav();

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
      }
    });
  }, observerOptions);

  // Observe all sections for animations
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
});
