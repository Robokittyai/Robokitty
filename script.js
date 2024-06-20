const matrixContainer = document.querySelector('.matrix');
const columns = Array.from({length: 50}, () => {
    const column = document.createElement('div');
    column.style.position = 'absolute';
    column.style.top = 0;
    column.style.left = `${Math.random() * 100}%`;
    column.style.width = '20px';
    column.style.height = '100%';
    column.style.background = 'url(data:image/png;base64,...) repeat-y';
    column.style.animation = `rain 1s linear infinite`;
    return column;
});

columns.forEach(column => matrixContainer.appendChild(column));
