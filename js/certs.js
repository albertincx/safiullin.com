var certs =
    'Сафиуллин Альберт Sbergile 4.0.png\n' +
    'Сафиуллин Альберт Soft Revolution_ как быть продуктивным и все успев.png\n' +
    'Сафиуллин Альберт Дистанционная работа в Сбере.png\n' +
    'Сафиуллин Альберт Облачные технологии для ИТ-архитектора (Sber Cloud.png\n' +
    'Сафиуллин Альберт Объектно-ориентированное Java-программирование I.png\n' +
    'Сафиуллин Альберт Объектно-ориентированное Java-программирование II.png\n' +
    'Сафиуллин Альберт Основы программирования на JavaScript II.png\n' +
    'Сафиуллин Альберт Основы программирования на JavaScript I.png\n' +
    'Сафиуллин Альберт Введение в Service mesh на основе Istio.png\n' +
    'Сафиуллин Альберт Осознанная карьера (24_7).png\n' +
    'Сафиуллин Альберт Основы риск-менеджмента в банке.png\n' +
    'Сафиуллин Альберт Основы разработки на Java.png\n' +
    'Сафиуллин Альберт Основы SQL. Задачи и решения.png\n' +
    'Сафиуллин Альберт Основы Java-программирования I.png\n' +
    'Сафиуллин Альберт Основы Java-программирования II.png\n' +
    'Сафиуллин Альберт Инструменты DevOps_ Git.png\n' +
    'Сафиуллин Альберт Bash. Работа в Терминале.png\n' +
    'Сафиуллин Альберт DevOps для всех.png\n' +
    'Сафиуллин Альберт Учись учиться.png\n' +
    'Сафиуллин Альберт Основы Agile Production Process.png\n' +
    'Сафиуллин Альберт Интеграционная архитектура.png\n' +
    'Сафиуллин Альберт Мониторинг и алертинг.png\n' +
    'Сафиуллин Альберт Soft Revolution_ как управлять своими эмоциями_ (э.png\n' +
    '1.png\n' +
    '2.png\n' +
    '3.png\n' +
    'Сафиуллин Альберт Критическое мышление.png\n' +
    'Сафиуллин Альберт Ловушки мышления.png'
console.log(certs.split('\n'));
// Array of image paths
const images = certs.split('\n').map(line => 'certs/mini/' + line.replace('.png', 'mini.png'));
// Array of image paths


let currentImageIndex = 0;

// Function to render images in the gallery
function renderGallery() {
    const gallery = document.getElementById("gallery");

    images.forEach((imageSrc, index) => {
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";

        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = `Image ${index + 1}`;
        img.onclick = () => openModal(index);

        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);
    });
}

let nosetCl, nosetMo;

// Function to open the modal with the clicked image
function openModal(index) {
    const modal = document.getElementById("myModal");
    const cl = document.querySelector("span.close");
    !nosetMo && (modal.onclick = closeModal);
    !nosetCl && (modal.onclick = closeModal);
    nosetCl = 1;
    nosetMo = 1;
    const modalImg = document.getElementById("modalImage");
    const thumbnails = document.getElementById("thumbnails");

    currentImageIndex = index;
    modalImg.src = images[currentImageIndex]
        .replace('mini.png', '.png')
        .replace('/mini', '/');
    modal.style.display = "block";

    // Render thumbnails
    thumbnails.innerHTML = "";
    // images.forEach((imageSrc, i) => {
    //     // const thumbnail = document.createElement("img");
    //     var thumbnail = new Image();
    //
    //     thumbnail.src = imageSrc;
    //     thumbnail.setAttribute('class','test');
    //     thumbnail.alt = `Thumbnail ${i + 1}`;
    //     thumbnail.classList.add(i === currentImageIndex ? ["active"] : ['']);
    //     thumbnail.onclick = () => setImage(i);
    //     thumbnails.appendChild(thumbnail);
    // });
}

// Function to close the modal
function closeModal(e) {
    if (e && e.target) {
        if (e.target.classList.contains('next')) return;
        if (e.target.classList.contains('prev')) return;
    }
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    // console.log(e.target.classList);
}

// Function to change image in the modal
function changeImage(step) {
    currentImageIndex += step;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    setImage(currentImageIndex);
}

// Function to set the current image in the modal
function setImage(index) {
    const modalImg = document.getElementById("modalImage");
    const thumbnails = document.querySelectorAll(".thumbnails img");

    currentImageIndex = index;
    modalImg.src = images[currentImageIndex].replace('mini.png', '.png')
        .replace('/mini', '/');

    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === currentImageIndex);
    });
}

// Render the gallery when the page loads
window.onload = renderGallery;

// Render the gallery when the page loads
window.onload = renderGallery;
