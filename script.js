const grid = document.getElementById('numberGrid');

for (let i = 0; i < 100; i++) {
  const num = i.toString().padStart(2, '0');
  const btn = document.createElement('div');
  btn.className = 'number';
  btn.textContent = num;

  // Simular algunos ocupados (puede cambiarse por backend)
  if ([2, 17, 34, 56, 78].includes(i)) {
    btn.classList.add('taken');
  } else {
    btn.onclick = () => {
      if (confirm(`¿Querés reservar el número ${num}?`)) {
        alert(`Perfecto. Transferí el pago al alias: pony.sorteo`);
      }
    };
  }

  grid.appendChild(btn);
}