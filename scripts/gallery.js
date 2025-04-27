window.addEventListener('DOMContentLoaded', function() {

    const images = ['bakery1.jpg', 'bakery10.jpg', 'bakery11.jpg', 'bakery12.jpg', 'bakery13.jpg', 'bakery14.jpg', 'bakery2.jpg', 'bakery3.jpg', 'bakery4.jpg', 'bakery5.jpg', 'bakery6.jpg', 'bakery7.jpg', 'bakery8.jpg', 'bakery9.jpg', 'cooking_stove1.jpg', 'cooking_stove2.jpg', 'cooking_stove3.jpg', 'cooking_stove4.jpg', 'cooking_stove5.jpg', 'double_pot_stove1.jpg', 'double_pot_stove2.jpg', 'double_pot_stove3.jpg', 'double_pot_stove4.jpg', 'double_pot_stove5.jpg', 'double_pot_stove6.jpg', 'mushroom_growing1.jpg', 'mushroom_growing10.jpg', 'mushroom_growing11.jpg', 'mushroom_growing12.jpg', 'mushroom_growing13.jpg', 'mushroom_growing14.jpg', 'mushroom_growing15.jpg', 'mushroom_growing16.jpg', 'mushroom_growing17.jpg', 'mushroom_growing18.jpg', 'mushroom_growing3.jpg', 'mushroom_growing4.jpg', 'mushroom_growing5.jpg', 'mushroom_growing6.jpg', 'mushroom_growing7.jpg', 'mushroom_growing8.jpg', 'mushroom_growing9.jpg', 'sanitary1.jpg', 'sanitary10.jpg', 'sanitary11.jpg', 'sanitary12.jpg', 'sanitary13.jpg', 'sanitary14.jpg', 'sanitary2.jpg', 'sanitary3.jpg', 'sanitary4.jpg', 'sanitary5.jpg', 'sanitary6.jpg', 'sanitary7.jpg', 'sanitary8.jpg', 'sanitary9.jpg', 'soap_making1.jpg', 'soap_making2.jpg', 'soap_making3.jpg']

    for (let i = 0; i < images.length; i++) {
        const img = document.createElement('img');
        img.src = `assets/images/gallery_section/${images[i]}`;
        img.alt = images[i].split('.')[0].replace(/_/g, ' ');
        img.classList.add('gallery-image');
        document.querySelector('.images-container').appendChild(img);
    }


})