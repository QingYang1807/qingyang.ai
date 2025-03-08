// =====================================================
// Initialize Variables and State Management
// =====================================================
let devicePerformanceLevel = 'high'; // Device performance level, default is high
let particleSystemObj = null;
let holographicMatrixObj = null;
let spaceTunnelObj = null;
let brandAnimationObj = null;
let clickCount = 0; // Brand logo click counter
let scrollProgress = 0;

// Detect device performance and set appropriate level
function DetectDevicePerformance() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
        devicePerformanceLevel = 'low';
        return;
    }
    
    const extension = gl.getExtension('WEBGL_debug_renderer_info');
    if (extension) {
        const renderer = gl.getParameter(extension.UNMASKED_RENDERER_WEBGL);
        
        // Mobile device detection
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            devicePerformanceLevel = 'medium';
        }
        
        // Low-end GPU detection
        if (renderer.indexOf('Intel') !== -1) {
            devicePerformanceLevel = 'medium';
        }
    }
    
    // Check if 4K resolution is supported
    if (window.screen.width >= 3840 && window.screen.height >= 2160) {
        devicePerformanceLevel = 'ultra';
    }
}

// =====================================================
// Particle Background System
// =====================================================
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = devicePerformanceLevel === 'high' ? 5000 : 
                           devicePerformanceLevel === 'medium' ? 2000 : 800;
        this.mouseX = 0;
        this.mouseY = 0;
        this.gravitySensitivity = 120;
        
        this.Initialize();
        this.BindEvents();
    }
    
    Initialize() {
        this.AdjustSize();
        
        // Create particles
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25,
                color: this.GetRandomColor(),
                originalX: Math.random() * this.canvas.width,
                originalY: Math.random() * this.canvas.height
            });
        }
        
        this.AnimationLoop();
    }
    
    AdjustSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    BindEvents() {
        window.addEventListener('resize', () => this.AdjustSize());
        
        window.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        
        // Touch device support
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouseX = e.touches[0].clientX;
                this.mouseY = e.touches[0].clientY;
            }
        });
    }
    
    GetRandomColor() {
        const colors = [
            { r: 42, g: 110, b: 245 }, // Tech blue
            { r: 125, g: 78, b: 255 }, // Quantum purple
            { r: 0, g: 240, b: 255 }  // Neon blue
        ];
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        const opacity = Math.random() * 0.5 + 0.2;
        
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
    }
    
    CalculateGravityEffect(particle) {
        const dx = this.mouseX - particle.x;
        const dy = this.mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Apply gravity influence within a certain range
        if (distance < this.gravitySensitivity) {
            const force = this.gravitySensitivity / (distance * distance);
            
            particle.speedX += (dx / distance) * force * 0.02;
            particle.speedY += (dy / distance) * force * 0.02;
        }
        
        // Add return force to make particles slowly return to original position
        const homeX = particle.originalX - particle.x;
        const homeY = particle.originalY - particle.y;
        
        particle.speedX += homeX * 0.0005;
        particle.speedY += homeY * 0.0005;
        
        // Apply damping
        particle.speedX *= 0.98;
        particle.speedY *= 0.98;
    }
    
    UpdateParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            const particle = this.particles[i];
            
            // Calculate gravity effect
            this.CalculateGravityEffect(particle);
            
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Boundary check
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
        }
    }
    
    ConnectParticles() {
        const maxDistance = 100;
        const connections = devicePerformanceLevel === 'high' ? 5 : 
                          devicePerformanceLevel === 'medium' ? 3 : 1;
        
        for (let i = 0; i < this.particles.length; i++) {
            let connectedCount = 0;
            const p1 = this.particles[i];
            
            for (let j = i + 1; j < this.particles.length && connectedCount < connections; j++) {
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    // Draw connection line
                    const opacity = 1 - (distance / maxDistance);
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(125, 78, 255, ${opacity * 0.2})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                    
                    connectedCount++;
                }
            }
        }
    }
    
    DrawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw background gradient
        const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        gradient.addColorStop(0, 'rgba(12, 26, 47, 1)');
        gradient.addColorStop(1, 'rgba(30, 41, 59, 1)');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Connect particles
        this.ConnectParticles();
        
        // Draw particles
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();
        }
    }
    
    AnimationLoop() {
        this.UpdateParticles();
        this.DrawParticles();
        requestAnimationFrame(() => this.AnimationLoop());
    }
}

// =====================================================
// Holographic Matrix System
// =====================================================
class HolographicMatrixSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('webgl');
        this.modules = [
            { id: 'nlp', title: 'Natural Language Processing', data: [85, 92, 78, 95, 88, 90] },
            { id: 'multimodal', title: 'Multimodal Systems', data: [90, 85, 92, 80, 94, 87] },
            { id: 'business', title: 'Business Solutions', data: [88, 95, 82, 90, 85, 93] },
            { id: 'research', title: 'Advanced Research', data: [95, 88, 92, 85, 90, 96] }
        ];
        
        this.InitializeWebGL();
        this.CreateHTMLMatrixModules();
    }
    
    InitializeWebGL() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // WebGL initialization settings
        if (this.ctx) {
            this.ctx.clearColor(0.0, 0.0, 0.0, 0.0);
            this.ctx.enable(this.ctx.DEPTH_TEST);
            this.ctx.depthFunc(this.ctx.LEQUAL);
            this.ctx.clear(this.ctx.COLOR_BUFFER_BIT | this.ctx.DEPTH_BUFFER_BIT);
        }
        
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            if (this.ctx) {
                this.ctx.viewport(0, 0, this.canvas.width, this.canvas.height);
            }
        });
    }
    
    CreateHTMLMatrixModules() {
        const container = document.querySelector('.matrix-container');
        
        // Clear container
        container.innerHTML = '';
        
        // Create modules
        this.modules.forEach((module, index) => {
            const el = document.createElement('div');
            el.className = 'diamond-module';
            el.dataset.id = module.id;
            
            // Set position, create diamond distribution
            const angle = (index / this.modules.length) * Math.PI * 2;
            const radius = Math.min(window.innerWidth, window.innerHeight) * 0.25;
            
            // Calculate position based on viewport center
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const x = Math.cos(angle) * radius + centerX - 100; // 100px is half the module width
            const y = Math.sin(angle) * radius + centerY - 100; // 100px is half the module height
            
            el.style.left = `${x}px`;
            el.style.top = `${y}px`;
            el.style.transform = `rotateY(${index * 45}deg) rotateX(${index * 15}deg)`;
            
            // Module content
            el.innerHTML = `
                <div class="module-content">
                    <h3>${module.title}</h3>
                    <div class="radar-chart" id="radar-${module.id}"></div>
                </div>
            `;
            
            // Event listener
            el.addEventListener('click', () => this.HandleModuleClick(module));
            
            container.appendChild(el);
            
            // Create radar chart
            setTimeout(() => this.CreateRadarChart(module), 100);
        });
    }
    
    CreateRadarChart(module) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const radarContainer = document.getElementById(`radar-${module.id}`);
        
        if (!radarContainer) return;
        
        canvas.width = 200;
        canvas.height = 200;
        radarContainer.appendChild(canvas);
        
        // Radar chart drawing code
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 80;
        
        // Radar chart parameter labels
        const labels = ['Algorithm Innovation', 'Business Insight', 'Data Processing', 'System Integration', 'User Experience', 'Iteration Speed'];
        
        // Draw background hexagon
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = Math.PI * 2 * (i / 6) - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(125, 78, 255, 0.3)';
        ctx.stroke();
        
        // Draw data area
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const dataValue = module.data[i] / 100; // Convert to 0-1 range
            const angle = Math.PI * 2 * (i / 6) - Math.PI / 2;
            const x = centerX + radius * dataValue * Math.cos(angle);
            const y = centerY + radius * dataValue * Math.sin(angle);
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(42, 110, 245, 0.3)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.8)';
        ctx.stroke();
        
        // Draw labels
        ctx.fillStyle = 'white';
        ctx.font = '10px "Neue Machina"';
        ctx.textAlign = 'center';
        
        for (let i = 0; i < 6; i++) {
            const angle = Math.PI * 2 * (i / 6) - Math.PI / 2;
            const x = centerX + (radius + 20) * Math.cos(angle);
            const y = centerY + (radius + 20) * Math.sin(angle);
            
            ctx.fillText(labels[i], x, y);
        }
    }
    
    HandleModuleClick(module) {
        console.log(`Module ${module.title} clicked`);
        
        // Get clicked module element
        const moduleElement = document.querySelector(`.diamond-module[data-id="${module.id}"]`);
        
        // Get all other modules
        const otherModules = document.querySelectorAll(`.diamond-module:not([data-id="${module.id}"])`);
        
        // Scale selected module and move to center
        moduleElement.style.transform = 'scale(1.5) translateZ(50px)';
        moduleElement.style.zIndex = '100';
        
        // Fade out other modules
        otherModules.forEach(module => {
            module.style.opacity = '0.2';
            module.style.transform = 'scale(0.8) translateZ(-50px)';
        });
        
        // Create particle effect
        this.CreateParticleTransitionEffect(moduleElement);
        
        // Restore original state after 5 seconds
        setTimeout(() => {
            moduleElement.style.transform = '';
            moduleElement.style.zIndex = '';
            
            otherModules.forEach(module => {
                module.style.opacity = '1';
                module.style.transform = '';
            });
        }, 5000);
    }
    
    CreateParticleTransitionEffect(element) {
        // Get element position
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create 100 particles
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.className = 'effect-particle';
            particle.style.position = 'absolute';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.backgroundColor = i % 2 === 0 ? '#2A6EF5' : '#7D4EFF';
            particle.style.borderRadius = '50%';
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            particle.style.zIndex = '50';
            
            document.body.appendChild(particle);
            
            // Particle animation
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 200 + 100;
            const duration = Math.random() * 1000 + 1000;
            
            const targetX = centerX + Math.cos(angle) * distance;
            const targetY = centerY + Math.sin(angle) * distance;
            
            // Use CSS animation
            particle.style.transition = `all ${duration}ms ease-out`;
            
            // Delay execution to trigger animation
            setTimeout(() => {
                particle.style.left = `${targetX}px`;
                particle.style.top = `${targetY}px`;
                particle.style.opacity = '0';
            }, 10);
            
            // Remove particle after animation ends
            setTimeout(() => {
                document.body.removeChild(particle);
            }, duration + 100);
        }
    }
}

// =====================================================
// Space Tunnel System
// =====================================================
class SpaceTunnelSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.tunnel = null;
        this.particles = [];
        this.logos = [];
        this.active = false;
        
        // Check if THREE.js is loaded
        if (typeof THREE !== 'undefined') {
            this.InitializeThree();
        } else {
            console.error('THREE.js not loaded, cannot initialize Space Tunnel System');
        }
    }
    
    InitializeThree() {
        // Create scene
        this.scene = new THREE.Scene();
        
        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            75, window.innerWidth / window.innerHeight, 0.1, 1000
        );
        this.camera.position.z = 5;
        
        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: this.canvas,
            alpha: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Window resize handler
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        // Create tunnel
        this.CreateTunnel();
        
        // Start animation loop
        this.AnimationLoop();
    }
    
    CreateTunnel() {
        // Create torus geometry
        const tunnelGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const tunnelMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x7D4EFF,
            wireframe: true,
            transparent: true,
            opacity: 0.3
        });
        
        this.tunnel = new THREE.Mesh(tunnelGeometry, tunnelMaterial);
        this.scene.add(this.tunnel);
        
        // Add particles
        const particleCount = devicePerformanceLevel === 'high' ? 2000 : 
                            devicePerformanceLevel === 'medium' ? 1000 : 500;
        
        const particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        const color1 = new THREE.Color(0x2A6EF5); // Tech blue
        const color2 = new THREE.Color(0x7D4EFF); // Quantum purple
        
        for (let i = 0; i < particleCount; i++) {
            // Random position but limited to near the torus tunnel
            const angle = Math.random() * Math.PI * 2;
            const radius = 10 + (Math.random() - 0.5) * 3;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const z = (Math.random() - 0.5) * 50;
            
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            
            // Color gradient
            const mixedColor = color1.clone().lerp(color2, Math.random());
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
            
            // Save particle data for animation
            this.particles.push({
                x: x,
                y: y,
                z: z,
                speed: Math.random() * 0.1 + 0.05
            });
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });
        
        const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        this.scene.add(particleSystem);
        
        // Add partner brand logos
        this.AddBrandLogos();
    }
    
    AddBrandLogos() {
        // Here we just create simple 3D text as examples
        // In a real project, we would load actual brand logo images
        const brandNames = ['Client A', 'Client B', 'Client C', 'Client D', 'Client E'];
        
        const fontLoader = new THREE.FontLoader();
        
        // Since font loading is asynchronous, we simplify handling here
        // In a real project, we should handle the callback after loading completes
        setTimeout(() => {
            brandNames.forEach((name, index) => {
                // Create simple plane geometry as logo placeholder
                const geometry = new THREE.PlaneGeometry(2, 0.5);
                const material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    transparent: true,
                    opacity: 0.7,
                    side: THREE.DoubleSide
                });
                
                const logo = new THREE.Mesh(geometry, material);
                
                // Place logo on tunnel inner wall
                const angle = (index / brandNames.length) * Math.PI * 2;
                const radius = 10;
                
                logo.position.x = Math.cos(angle) * radius;
                logo.position.y = Math.sin(angle) * radius;
                logo.position.z = Math.random() * 20 - 10;
                
                // Make logo face tunnel center
                logo.lookAt(0, 0, 0);
                
                this.scene.add(logo);
                this.logos.push({
                    mesh: logo,
                    speed: Math.random() * 0.05 + 0.01,
                    angle: angle
                });
            });
        }, 1000);
    }
    
    UpdateParticlePositions() {
        if (!this.scene || !this.scene.children || this.scene.children.length < 2) return;
        
        const positions = this.scene.children[1].geometry.attributes.position.array;
        
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            // Update Z position - create movement effect
            p.z -= p.speed;
            
            // If particle moves out of view, reset to starting point
            if (p.z < -25) {
                p.z = 25;
            }
            
            // Update position in buffer
            positions[i * 3] = p.x;
            positions[i * 3 + 1] = p.y;
            positions[i * 3 + 2] = p.z;
        }
        
        this.scene.children[1].geometry.attributes.position.needsUpdate = true;
        
        // Update logo positions
        this.logos.forEach(logo => {
            logo.mesh.position.z -= logo.speed;
            
            // If logo moves out of view, reset to starting point
            if (logo.mesh.position.z < -25) {
                logo.mesh.position.z = 25;
            }
        });
    }
    
    AnimationLoop() {
        if (!this.renderer) return;
        
        // Update tunnel rotation
        if (this.tunnel) {
            this.tunnel.rotation.x += 0.001;
            this.tunnel.rotation.z += 0.002;
        }
        
        // Update particle positions
        if (this.active) {
            this.UpdateParticlePositions();
        }
        
        // Render scene
        this.renderer.render(this.scene, this.camera);
        
        // Next frame
        requestAnimationFrame(() => this.AnimationLoop());
    }
    
    SetVisibility(visible) {
        this.canvas.style.opacity = visible ? '1' : '0';
        this.active = visible;
    }
    
    ActivateTunnelEffect(progress) {
        // Adjust camera position based on scroll progress
        if (this.camera) {
            // Move camera to create tunnel traversal effect
            this.camera.position.z = 5 - progress * 10;
            
            // When entering deeper, increase rotation feeling
            if (progress > 0.5) {
                const rotationIntensity = (progress - 0.5) * 2;
                this.camera.rotation.z = rotationIntensity * 0.2;
            } else {
                this.camera.rotation.z = 0;
            }
        }
    }
}

// =====================================================
// Brand Logo Animation System
// =====================================================
class BrandLogoAnimation {
    constructor(element) {
        this.element = element;
        this.originalText = element.textContent;
        this.particles = [];
        this.completed = false;
        
        this.Initialize();
    }
    
    Initialize() {
        // Clear element and prepare particles
        this.element.textContent = '';
        this.element.style.opacity = '1';
        
        // Create particle text
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-container';
        particleContainer.style.position = 'relative';
        particleContainer.style.width = '100%';
        particleContainer.style.height = '100%';
        
        this.element.appendChild(particleContainer);
        
        // Create final text (hidden)
        const finalText = document.createElement('div');
        finalText.className = 'final-text';
        finalText.textContent = this.originalText;
        finalText.style.opacity = '0';
        finalText.style.position = 'absolute';
        finalText.style.top = '0';
        finalText.style.left = '0';
        finalText.style.width = '100%';
        finalText.style.height = '100%';
        
        this.element.appendChild(finalText);
        
        // Create particles
        const particleCount = 200;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'logo-particle';
            particle.style.position = 'absolute';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = i % 2 === 0 ? '#2A6EF5' : '#7D4EFF';
            
            // Random initial position - scattered across the screen
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            
            particleContainer.appendChild(particle);
            
            // Calculate target position for particles
            // In a real implementation, we would calculate exact positions for the letterforms
            // Here we use a simplified version, making particles converge to the center
            const targetX = window.innerWidth / 2 - particleContainer.offsetWidth / 2 + Math.random() * 100 - 50;
            const targetY = window.innerHeight / 2 - particleContainer.offsetHeight / 2 + Math.random() * 20 - 10;
            
            this.particles.push({
                element: particle,
                x: x,
                y: y,
                targetX: targetX,
                targetY: targetY,
                speed: Math.random() * 0.05 + 0.02,
                size: Math.random() * 2 + 1
            });
        }
        
        // Start animation
        this.AnimationLoop();
        
        // Set click event listener
        this.element.addEventListener('click', () => this.HandleClick());
    }
    
    AnimationLoop() {
        let allArrived = true;
        
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            // Calculate distance to target
            const dx = p.targetX - p.x;
            const dy = p.targetY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // If particle hasn't reached target yet
            if (distance > 0.5) {
                allArrived = false;
                
                // Move particle
                p.x += dx * p.speed;
                p.y += dy * p.speed;
                
                // Update particle position
                p.element.style.left = `${p.x}px`;
                p.element.style.top = `${p.y}px`;
            }
        }
        
        // If all particles have reached their targets, show final text
        if (allArrived && !this.completed) {
            this.completed = true;
            
            // Hide particles, show final text
            setTimeout(() => {
                const particleContainer = this.element.querySelector('.particle-container');
                const finalText = this.element.querySelector('.final-text');
                
                particleContainer.style.opacity = '0';
                finalText.style.opacity = '1';
                
                // Show multidimensional coordinate system grid
                // In a real project, this would trigger background grid animation
            }, 500);
        }
        
        // Continue animation loop
        if (!this.completed) {
            requestAnimationFrame(() => this.AnimationLoop());
        }
    }
    
    HandleClick() {
        clickCount++;
        
        // Trigger easter egg after 7 consecutive clicks
        if (clickCount >= 7) {
            this.TriggerEasterEgg();
            clickCount = 0;
        }
    }
    
    TriggerEasterEgg() {
        console.log('Triggering Core Algorithm Sandbox Easter Egg');
        // Create easter egg content
        const easterEgg = document.createElement('div');
        easterEgg.className = 'easter-egg';
        easterEgg.style.position = 'fixed';
        easterEgg.style.top = '0';
        easterEgg.style.left = '0';
        easterEgg.style.width = '100%';
        easterEgg.style.height = '100%';
        easterEgg.style.backgroundColor = 'rgba(12, 26, 47, 0.9)';
        easterEgg.style.zIndex = '1000';
        easterEgg.style.display = 'flex';
        easterEgg.style.justifyContent = 'center';
        easterEgg.style.alignItems = 'center';
        easterEgg.style.flexDirection = 'column';
        
        easterEgg.innerHTML = `
            <h2 style="color: #7D4EFF; font-size: 2rem; margin-bottom: 2rem;">Core Algorithm Sandbox Activated</h2>
            <div class="algorithm-sandbox" style="width: 80%; height: 60%; border: 2px solid #2A6EF5; padding: 2rem; overflow: auto;">
                <pre style="color: #00F0FF; font-family: monospace;">
// Qingyang AI Core Algorithm Example
class QuantumNeuralNetwork {
    constructor(layers, qubits) {
        this.layers = layers;
        this.qubits = qubits;
        this.networkState = this.InitializeQuantumState();
    }
    
    InitializeQuantumState() {
        // Create superposition state
        console.log("Initializing quantum network...");
        return "Quantum network in superposition state ready";
    }
    
    ApplyQuantumGate(gateType) {
        console.log(`Applying ${gateType} quantum gate...`);
        return "Quantum state updated";
    }
    
    ExecuteQuantumInference(inputData) {
        console.log("Processing data through quantum channel...");
        return "Quantum computation completed";
    }
}

// Initialize system
const qingyangCoreEngine = new QuantumNeuralNetwork(7, 42);
console.log(qingyangCoreEngine.networkState);
                </pre>
            </div>
            <button style="margin-top: 2rem; padding: 1rem 2rem; background: #2A6EF5; color: white; border: none; border-radius: 4px; cursor: pointer;" onclick="this.parentNode.remove()">Close Sandbox</button>
        `;
        
        document.body.appendChild(easterEgg);
    }
}

// =====================================================
// Dynamic Watermark System
// =====================================================
class DynamicWatermarkSystem {
    constructor(element) {
        this.element = element;
        this.text = element.textContent;
        this.counter = 0;
        
        this.Initialize();
    }
    
    Initialize() {
        // Start animation loop
        setInterval(() => this.UpdateWatermark(), 100);
        
        // Change structure every 17 seconds
        setInterval(() => this.RestructureText(), 17000);
    }
    
    UpdateWatermark() {
        this.counter += 0.05;
        
        // Create wave effect
        const transform = `translateY(${Math.sin(this.counter) * 5}px) rotate(${Math.sin(this.counter * 0.5) * 2}deg)`;
        this.element.style.transform = transform;
    }
    
    RestructureText() {
        // Save original text
        const originalText = this.text;
        
        // Text change animation
        this.element.style.opacity = '0';
        
        setTimeout(() => {
            // Restructure text characters
            let newText = '';
            const chars = originalText.split('');
            
            // 50% chance to keep original, 50% chance to restructure
            if (Math.random() > 0.5) {
                // Random sort
                for (let i = chars.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [chars[i], chars[j]] = [chars[j], chars[i]];
                }
                
                // Restore after 5 seconds
                setTimeout(() => {
                    this.element.textContent = originalText;
                    this.text = originalText;
                }, 5000);
            }
            
            newText = chars.join('');
            
            this.element.textContent = newText;
            this.text = newText;
            
            this.element.style.opacity = '0.2';
        }, 500);
    }
}

// =====================================================
// Page Initialization and Event Handling
// =====================================================
function InitializePage() {
    console.log('DOM fully loaded, initializing page...');
    
    // Detect device performance
    DetectDevicePerformance();
    console.log(`Device performance level: ${devicePerformanceLevel}`);
    
    // Initialize particle background
    const particleCanvas = document.getElementById('particleBackground');
    particleSystemObj = new ParticleSystem(particleCanvas);
    console.log('Particle system initialized');
    
    // Initialize holographic matrix
    const matrixCanvas = document.getElementById('holographicMatrix');
    holographicMatrixObj = new HolographicMatrixSystem(matrixCanvas);
    console.log('Holographic matrix initialized');
    
    // Initialize space tunnel
    const tunnelCanvas = document.getElementById('spaceTunnel');
    spaceTunnelObj = new SpaceTunnelSystem(tunnelCanvas);
    console.log('Space tunnel initialized');
    
    // Initialize brand logo animation
    const brandLogo = document.getElementById('brandLogo');
    brandAnimationObj = new BrandLogoAnimation(brandLogo);
    console.log('Brand logo animation initialized');
    
    // Initialize dynamic watermark
    const watermark = document.querySelector('.dynamic-watermark');
    new DynamicWatermarkSystem(watermark);
    console.log('Dynamic watermark initialized');
    
    // Set scroll listener
    window.addEventListener('scroll', HandleScroll);
}

function HandleScroll() {
    // Calculate scroll progress
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = scrollTop / totalHeight;
    
    // Show tunnel effect after certain scroll progress
    if (scrollProgress > 0.2) {
        spaceTunnelObj.SetVisibility(true);
        spaceTunnelObj.ActivateTunnelEffect((scrollProgress - 0.2) / 0.8); // Normalize progress
    } else {
        spaceTunnelObj.SetVisibility(false);
    }
    
    // Parallax scrolling effect
    ApplyParallaxScrollEffect(scrollProgress);
}

function ApplyParallaxScrollEffect(progress) {
    // Get all elements that need parallax effect
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        const speed = index % 2 === 0 ? 0.5 : -0.5; // Alternate direction
        const yOffset = progress * 100 * speed;
        section.style.transform = `translateY(${yOffset}px)`;
    });
    
    // Special handling for value statement section
    const statement = document.querySelector('.value-statement');
    if (statement) {
        // Calculate section-specific progress
        const rect = statement.getBoundingClientRect();
        const sectionProgress = 1 - Math.max(0, Math.min(1, rect.top / window.innerHeight));
        
        if (sectionProgress > 0) {
            // Add light cone text effect
            const text = statement.querySelector('.light-cone-text');
            if (text) {
                text.style.transform = `perspective(1000px) rotateX(${sectionProgress * 5}deg)`;
                text.style.filter = `brightness(${1 + sectionProgress * 0.5})`;
            }
            
            // Keyword pulse effect
            const keywords = statement.querySelectorAll('.highlight-keyword');
            keywords.forEach(keyword => {
                keyword.style.textShadow = `0 0 ${5 + sectionProgress * 10}px rgba(125, 78, 255, ${sectionProgress * 0.8})`;
            });
        }
    }
}

// Initialize page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', InitializePage);

// Create global easter egg trigger function
window.TriggerAlgorithmSandbox = function() {
    if (brandAnimationObj) {
        brandAnimationObj.TriggerEasterEgg();
    }
};