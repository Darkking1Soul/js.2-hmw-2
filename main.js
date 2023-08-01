function nav(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const nav = document.createElement('div');
        nav.className = 'nav';
        document.getElementById('container').appendChild(nav);
        resolve(); 
      }, delay);
    });
  }
  
  async function black() {
    for (let i = 0; i < 4; i++) {
      await nav(1000); 
    }
  }
  
  black();