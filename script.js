        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update navigation
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked nav item
            event.target.classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Login functionality
        let isLoggedIn = false;
        
        function toggleLogin() {
            const loginBtn = document.getElementById('loginBtn');
            const userGreeting = document.getElementById('userGreeting');
            
            if (!isLoggedIn) {
                // Login
                isLoggedIn = true;
                loginBtn.textContent = 'Logout';
                userGreeting.style.display = 'inline';
                userGreeting.textContent = 'Hello, Nature Lover! 🌿';
            } else {
                // Logout
                isLoggedIn = false;
                loginBtn.textContent = 'Login';
                userGreeting.style.display = 'none';
            }
        }

        // Handle contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
            
            // Reset form
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
            }, 5000);
        });

        // Gallery Functions
        function filterGallery(category) {
            const items = document.querySelectorAll('.gallery-item');
            const buttons = document.querySelectorAll('.filter-btn');
            
            // Update active button
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Filter items with animation
            items.forEach((item, index) => {
                setTimeout(() => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }, index * 50);
            });
        }
        
        function openLightbox(imageSrc) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            
            lightboxImage.src = imageSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Close lightbox with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            if (!particlesContainer) return;
            
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 6 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Create advanced home page particles
        function createHomeParticles() {
            const homeParticlesContainer = document.getElementById('homeParticles');
            if (!homeParticlesContainer) return;
            
            // Create different types of particles
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random properties
                const size = Math.random() * 12 + 2;
                const opacity = Math.random() * 0.4 + 0.1;
                const hue = Math.random() * 60 + 200; // Blue to purple range
                
                particle.style.left = Math.random() * 100 + '%';
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.animationDelay = Math.random() * 25 + 's';
                particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
                particle.style.background = `hsla(${hue}, 70%, 80%, ${opacity})`;
                particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
                particle.style.boxShadow = `0 0 ${size * 2}px hsla(${hue}, 70%, 80%, ${opacity * 0.5})`;
                
                // Add random rotation
                particle.style.animation += `, rotate ${Math.random() * 10 + 5}s linear infinite`;
                
                homeParticlesContainer.appendChild(particle);
            }
            
            // Create special glowing orbs
            for (let i = 0; i < 10; i++) {
                const orb = document.createElement('div');
                orb.className = 'particle glowing-orb';
                orb.style.left = Math.random() * 100 + '%';
                orb.style.width = '20px';
                orb.style.height = '20px';
                orb.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(102,126,234,0.3) 100%)';
                orb.style.borderRadius = '50%';
                orb.style.boxShadow = '0 0 30px rgba(255,255,255,0.6), 0 0 60px rgba(102,126,234,0.4)';
                orb.style.animationDelay = Math.random() * 15 + 's';
                orb.style.animationDuration = (Math.random() * 25 + 25) + 's';
                orb.style.filter = 'blur(1px)';
                homeParticlesContainer.appendChild(orb);
            }
        }

        // Add CSS for rotating particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .glowing-orb {
                animation: floatParticle 25s infinite linear, pulse 3s ease-in-out infinite alternate !important;
            }
            @keyframes pulse {
                0% { opacity: 0.3; transform: scale(1); }
                100% { opacity: 0.8; transform: scale(1.2); }
            }
        `;
        document.head.appendChild(style);

        // Add tilt effect to feature cards
        function addTiltEffect() {
            const cards = document.querySelectorAll('[data-tilt]');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    const rotateX = (y / rect.height) * 20;
                    const rotateY = (x / rect.width) * 20;
                    
                    card.style.transform = `translateY(-15px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = '';
                });
            });
        }

        // Magnetic mouse effect for gallery items
        function addMagneticEffect() {
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                item.addEventListener('mousemove', (e) => {
                    const rect = item.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    const moveX = x * 0.1;
                    const moveY = y * 0.1;
                    
                    item.style.transform = `translateY(-20px) rotateX(${moveY * 0.1}deg) rotateY(${moveX * 0.1}deg) scale(1.05)`;
                });
                
                item.addEventListener('mouseleave', () => {
                    item.style.transform = '';
                });
            });
        }

        // Add interactive cursor effects
        function createCursorEffects() {
            const cursor = document.createElement('div');
            cursor.className = 'custom-cursor';
            cursor.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(102,126,234,0.4) 100%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                mix-blend-mode: difference;
                transition: transform 0.1s ease;
            `;
            document.body.appendChild(cursor);

            const cursorTrail = [];
            for (let i = 0; i < 10; i++) {
                const trail = document.createElement('div');
                trail.style.cssText = `
                    position: fixed;
                    width: ${15 - i}px;
                    height: ${15 - i}px;
                    background: rgba(255,255,255,${0.3 - i * 0.03});
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: ${9998 - i};
                `;
                document.body.appendChild(trail);
                cursorTrail.push(trail);
            }

            let mouseX = 0, mouseY = 0;
            let trailX = [], trailY = [];
            
            for (let i = 0; i < 10; i++) {
                trailX[i] = 0;
                trailY[i] = 0;
            }

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursor.style.left = mouseX - 10 + 'px';
                cursor.style.top = mouseY - 10 + 'px';
            });

            function animateTrail() {
                trailX[0] = mouseX;
                trailY[0] = mouseY;
                
                for (let i = 1; i < 10; i++) {
                    trailX[i] += (trailX[i-1] - trailX[i]) * 0.3;
                    trailY[i] += (trailY[i-1] - trailY[i]) * 0.3;
                    
                    cursorTrail[i].style.left = trailX[i] - (15 - i) / 2 + 'px';
                    cursorTrail[i].style.top = trailY[i] - (15 - i) / 2 + 'px';
                }
                
                requestAnimationFrame(animateTrail);
            }
            animateTrail();

            // Add hover effects
            document.querySelectorAll('a, button, .gallery-item, .feature-card-advanced').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'scale(2)';
                    cursor.style.background = 'radial-gradient(circle, rgba(240,147,251,0.8) 0%, rgba(245,87,108,0.4) 100%)';
                });
                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'scale(1)';
                    cursor.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(102,126,234,0.4) 100%)';
                });
            });
        }

        // Add smooth scrolling for better UX
        document.addEventListener('DOMContentLoaded', function() {
            // Add loading animation
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease-in-out';
                document.body.style.opacity = '1';
            }, 100);
            
            // Create cursor effects
            createCursorEffects();
            
            // Create particles
            createParticles();
            createHomeParticles();
            
            // Add magnetic effect
            addMagneticEffect();
            
            // Add tilt effect to cards
            addTiltEffect();
            
            // Add intersection observer for gallery animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                });
            }, observerOptions);
            
            // Observe gallery items with staggered animation
            document.querySelectorAll('.gallery-item').forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(50px) scale(0.9)';
                item.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                observer.observe(item);
            });
        });