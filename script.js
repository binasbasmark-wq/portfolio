// Initialize Lucide Icons
lucide.createIcons();

// Typing Effect
const texts = ["UI/UX Designer", "Problem Solver", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

// Start typing effect
setTimeout(type, 1000);

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add("shadow-sm");
  } else {
    navbar.classList.remove("shadow-sm");
  }

  lastScroll = currentScroll;
});

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Animate skill bars if inside the element
      const skillBars = entry.target.querySelectorAll(".skill-bar");
      skillBars.forEach((bar) => {
        bar.style.width = bar.getAttribute("data-width");
      });
    }
  });
}, observerOptions);

document.querySelectorAll(".scroll-reveal").forEach((el) => {
  observer.observe(el);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Contact Form Handler
const contactForm = document.getElementById("contact-form");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.remove("translate-y-20", "opacity-0");

  setTimeout(() => {
    toast.classList.add("translate-y-20", "opacity-0");
  }, 3000);
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simulate form submission
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalContent = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML =
    '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Sending...';
  lucide.createIcons();

  setTimeout(() => {
    submitBtn.innerHTML = originalContent;
    lucide.createIcons();
    submitBtn.disabled = false;
    contactForm.reset();
    showToast("Message sent successfully! I'll get back to you soon.");
  }, 1500);
});

// Resume Download Handler
// function downloadResume(e) {
//   e.preventDefault();

//   // Create a sample PDF content (in a real scenario, this would be an actual PDF file)
//   const resumeContent = `
// ALEX MORGAN
// Full-Stack Developer & UI/UX Designer
// San Francisco, CA | alex.morgan@example.com | (555) 123-4567

// SUMMARY
// Creative developer with 5+ years of experience building scalable web applications and intuitive user interfaces. Passionate about clean code, performance optimization, and delivering exceptional user experiences.

// SKILLS
// • Frontend: React, Vue.js, TypeScript, Tailwind CSS, Next.js
// • Backend: Node.js, Python, PostgreSQL, MongoDB, GraphQL
// • Tools: Git, Docker, AWS, Figma, Adobe XD
// • Soft Skills: Problem-solving, communication, team leadership

// EXPERIENCE
// Senior Frontend Developer | TechCorp Inc. | 2022 - Present
// • Led development of company's flagship SaaS product serving 100K+ users
// • Reduced application load time by 40% through code optimization
// • Mentored junior developers and conducted code reviews

// Full-Stack Developer | Digital Agency | 2020 - 2022
// • Built 20+ custom websites and web applications for clients
// • Implemented CI/CD pipelines reducing deployment time by 60%
// • Collaborated with design team to create pixel-perfect interfaces

// EDUCATION
// B.S. Computer Science | University of Technology | 2016 - 2020
// • GPA: 3.8/4.0
// • Dean's List, Senior Project Award

// PROJECTS
// • ShopFlow: E-commerce platform with 50K+ active users
// • DataViz: Real-time analytics dashboard for enterprise clients
// • ChatSync: Encrypted messaging app with video calling
//             `;

//   const blob = new Blob([resumeContent], { type: "text/plain" });
//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "Alex_Morgan_Resume.txt";
//   document.body.appendChild(a);
//   a.click();
//   window.URL.revokeObjectURL(url);
//   document.body.removeChild(a);

//   showToast("Resume downloaded successfully!");
// }

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-600");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("text-blue-600");
    }
  });
});
