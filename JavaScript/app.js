window.onload = function() {
  Particles.init({
    selector: '#background',
		sizeVariations: 3,
	  color: ['#00bbdd', '#404B69', '#DBEDF3'],
	  connectParticles: true,
		maxParticles: 80,
		minDistance: 250
  });
};