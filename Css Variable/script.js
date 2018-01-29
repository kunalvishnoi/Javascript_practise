const inputs = document.querySelectorAll('.controls input');
    function Update() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    inputs.forEach(input => input.addEventListener('change', Update));
    inputs.forEach(input => input.addEventListener('mousemove', Update));
